export interface FastingProtocol {
  id: string;
  name: string;
  description: string;
  fastHours: number;
  eatHours: number;
  recommended: boolean;
}

export interface FastingStage {
  id: number;
  name: string;
  timeRange: {
    start: number; // hours
    end: number; // hours
  };
  description: string;
  benefits: string[];
  tips: string[];
  symptoms: string[];
  icon: string;
}

export interface Fast {
  id: string;
  protocolId: string;
  startTime: number; // timestamp
  endTime: number | null; // timestamp
  plannedEndTime: number; // timestamp
  pausedTime: number; // total paused time in ms
  isPaused: boolean;
  pauseStartTime: number | null; // timestamp when pause started
  completed: boolean;
  notes: string;
  symptoms?: string[];
  energy?: number;
  mood?: Mood;
}

export type Mood = 'great' | 'good' | 'neutral' | 'poor' | 'bad';

export interface UserStats {
  totalFasts: number;
  totalFastingHours: number;
  longestFast: number; // hours
  currentStreak: number;
  completionRate: number; // percentage
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  motivationStyle: 'scientific' | 'emotional' | 'practical';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  message: string;
  timestamp: number;
  context?: {
    stage: number;
    fastingHours: number;
    symptoms?: string[];
    energy?: number;
    mood?: Mood;
  };
}

export interface MealSuggestion {
  id: string;
  title: string;
  description: string;
  nutrients: {
    protein: number;
    carbs: number;
    fat: number;
  };
  ingredients: string[];
  instructions: string;
  imageUrl?: string;
  tags: string[];
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'break-fast';
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  defaultProtocol: string;
  notifications: boolean;
  dietary: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    keto: boolean;
  };
}

export interface ProgressEntry {
  date: number; // timestamp
  weight?: number;
  energy?: number; // 1-10
  mood?: Mood;
  sleep?: number; // hours
  notes?: string;
  symptoms?: string[];
}