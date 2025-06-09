import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FastingProtocol, Fast, UserStats, ChatMessage, ProgressEntry, UserPreferences } from '../types';
import { fastingProtocols } from '../data/fastingProtocols';
import { v4 as uuidv4 } from '../utils/uuid';

interface FastingState {
  protocols: FastingProtocol[];
  currentFast: Fast | null;
  pastFasts: Fast[];
  userStats: UserStats;
  chatHistory: ChatMessage[];
  progressEntries: ProgressEntry[];
  userPreferences: UserPreferences;
  
  // Actions
  startFast: (protocolId: string) => void;
  pauseFast: () => void;
  resumeFast: () => void;
  endFast: (completed?: boolean) => void;
  getCurrentStage: () => number;
  getElapsedTime: () => number;
  getRemainingTime: () => number;
  getCompletionPercentage: () => number;
  addChatMessage: (message: string, sender: 'user' | 'ai') => void;
  addProgressEntry: (entry: Partial<ProgressEntry>) => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
}

export const useFastingStore = create<FastingState>()(
  persist(
    (set, get) => ({
      protocols: fastingProtocols,
      currentFast: null,
      pastFasts: [],
      userStats: {
        totalFasts: 0,
        totalFastingHours: 0,
        longestFast: 0,
        currentStreak: 0,
        completionRate: 0,
        experienceLevel: 'beginner',
        motivationStyle: 'scientific',
      },
      chatHistory: [],
      progressEntries: [],
      userPreferences: {
        theme: 'dark',
        defaultProtocol: '16-8',
        notifications: true,
        safetyDisclaimerAcknowledged: false,
        dietary: {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          keto: false,
        },
      },

      startFast: (protocolId) => {
        const protocol = get().protocols.find(p => p.id === protocolId);
        if (!protocol) return;
        
        const now = Date.now();
        const plannedEndTime = now + (protocol.fastHours * 60 * 60 * 1000);
        
        const newFast: Fast = {
          id: uuidv4(),
          protocolId,
          startTime: now,
          endTime: null,
          plannedEndTime,
          pausedTime: 0,
          isPaused: false,
          pauseStartTime: null,
          completed: false,
          notes: '',
        };
        
        set({ currentFast: newFast });
      },
      
      pauseFast: () => {
        const { currentFast } = get();
        if (!currentFast || currentFast.isPaused) return;
        
        set({
          currentFast: {
            ...currentFast,
            isPaused: true,
            pauseStartTime: Date.now(),
          }
        });
      },
      
      resumeFast: () => {
        const { currentFast } = get();
        if (!currentFast || !currentFast.isPaused || !currentFast.pauseStartTime) return;
        
        const pauseDuration = Date.now() - currentFast.pauseStartTime;
        
        set({
          currentFast: {
            ...currentFast,
            isPaused: false,
            pauseStartTime: null,
            pausedTime: currentFast.pausedTime + pauseDuration,
            plannedEndTime: currentFast.plannedEndTime + pauseDuration,
          }
        });
      },
      
      endFast: (completed = false) => {
        const { currentFast, pastFasts, userStats } = get();
        if (!currentFast) return;
        
        const endTime = Date.now();
        const endedFast: Fast = {
          ...currentFast,
          endTime,
          completed,
        };
        
        // Calculate fasting duration in hours
        const fastDuration = ((endTime - endedFast.startTime - endedFast.pausedTime) / (60 * 60 * 1000));
        
        // Update stats
        const totalFasts = userStats.totalFasts + 1;
        const totalFastingHours = userStats.totalFastingHours + fastDuration;
        const longestFast = Math.max(userStats.longestFast, fastDuration);
        const currentStreak = completed ? userStats.currentStreak + 1 : 0;
        const completedFasts = [...pastFasts, endedFast].filter(f => f.completed).length;
        const completionRate = (completedFasts / totalFasts) * 100;
        
        set({
          currentFast: null,
          pastFasts: [...pastFasts, endedFast],
          userStats: {
            totalFasts,
            totalFastingHours,
            longestFast,
            currentStreak,
            completionRate,
            experienceLevel: userStats.experienceLevel,
            motivationStyle: userStats.motivationStyle,
          },
        });
      },
      
      getCurrentStage: () => {
        const { currentFast } = get();
        if (!currentFast) return 0;
        
        const now = Date.now();
        const elapsedHours = (now - currentFast.startTime - currentFast.pausedTime) / (60 * 60 * 1000);
        
        if (elapsedHours < 4) return 1; // Fed State
        if (elapsedHours < 16) return 2; // Early Post-Absorptive
        if (elapsedHours < 24) return 3; // Metabolic Shift
        if (elapsedHours < 48) return 4; // Gluconeogenic State
        if (elapsedHours < 72) return 5; // Deep Ketosis
        return 6; // Extended Starvation
      },
      
      getElapsedTime: () => {
        const { currentFast } = get();
        if (!currentFast) return 0;
        
        if (currentFast.isPaused && currentFast.pauseStartTime) {
          return currentFast.pauseStartTime - currentFast.startTime - currentFast.pausedTime;
        }
        
        return Date.now() - currentFast.startTime - currentFast.pausedTime;
      },
      
      getRemainingTime: () => {
        const { currentFast } = get();
        if (!currentFast) return 0;
        
        const now = Date.now();
        return Math.max(0, currentFast.plannedEndTime - now);
      },
      
      getCompletionPercentage: () => {
        const { currentFast } = get();
        if (!currentFast) return 0;
        
        const protocol = get().protocols.find(p => p.id === currentFast.protocolId);
        if (!protocol) return 0;
        
        const totalDuration = protocol.fastHours * 60 * 60 * 1000;
        const elapsed = get().getElapsedTime();
        
        return Math.min(100, (elapsed / totalDuration) * 100);
      },
      
      addChatMessage: (message, sender) => {
        const newMessage: ChatMessage = {
          id: uuidv4(),
          sender,
          message,
          timestamp: Date.now(),
        };
        
        set(state => ({
          chatHistory: [...state.chatHistory, newMessage],
        }));
      },
      
      addProgressEntry: (entry) => {
        const newEntry: ProgressEntry = {
          date: Date.now(),
          ...entry,
        };
        
        set(state => ({
          progressEntries: [...state.progressEntries, newEntry],
        }));
      },
      
      updateUserPreferences: (preferences) => {
        set(state => ({
          userPreferences: {
            ...state.userPreferences,
            ...preferences,
          },
        }));
      },
    }),
    {
      name: 'fastwise-storage',
    }
  )
);