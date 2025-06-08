import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import FastingTimer from './components/timer/FastingTimer';
import AICoach from './components/coach/AICoach';
import ProgressTracker from './components/progress/ProgressTracker';
import MealPlanner from './components/meals/MealPlanner';
import SafetyHub from './components/education/SafetyHub';
import { useFastingStore } from './store/fastingStore';
import { useCapacitor } from './hooks/useCapacitor';
import { Timer, MessageSquare, BarChart3, Book, Apple } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('timer');
  const { userPreferences } = useFastingStore();
  const { isNative, isIOS } = useCapacitor();

  useEffect(() => {
    // Always apply dark mode by default
    document.documentElement.classList.add('dark');
    
    // Add iOS-specific classes for native app
    if (isNative && isIOS) {
      document.body.classList.add('ios-native');
    }
  }, [isNative, isIOS]);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'timer':
        return <FastingTimer />;
      case 'coach':
        return <AICoach />;
      case 'progress':
        return <ProgressTracker />;
      case 'meals':
        return <MealPlanner />;
      case 'learn':
        return <SafetyHub />;
      default:
        return <FastingTimer />;
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 py-2 px-1 ${isIOS && isNative ? 'pt-12' : ''}`}>
          <div className="flex justify-center w-full mx-auto">
            <div className="flex w-full max-w-sm p-1 bg-gray-800 rounded-lg">
              <TabButton
                icon={<Timer size={16} />}
                label="Timer"
                isActive={activeTab === 'timer'}
                onClick={() => setActiveTab('timer')}
              />
              <TabButton
                icon={<MessageSquare size={16} />}
                label="Coach"
                isActive={activeTab === 'coach'}
                onClick={() => setActiveTab('coach')}
              />
              <TabButton
                icon={<BarChart3 size={16} />}
                label="Progress"
                isActive={activeTab === 'progress'}
                onClick={() => setActiveTab('progress')}
              />
              <TabButton
                icon={<Apple size={16} />}
                label="Meals"
                isActive={activeTab === 'meals'}
                onClick={() => setActiveTab('meals')}
              />
              <TabButton
                icon={<Book size={16} />}
                label="Learn"
                isActive={activeTab === 'learn'}
                onClick={() => setActiveTab('learn')}
              />
            </div>
          </div>
        </nav>
        
        <div className={`${isIOS && isNative ? 'mt-20' : 'mt-16'}`}>
          {renderActiveComponent()}
        </div>
      </div>
    </Layout>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center px-1 py-2 text-xs font-medium rounded-md transition-colors ${
        isActive
          ? 'bg-primary-600 text-white'
          : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      <span className="mb-1">{icon}</span>
      <span className="text-xs leading-tight">{label}</span>
    </button>
  );
};

export default App;