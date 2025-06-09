import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import FastingTimer from './components/timer/FastingTimer';
import AICoach from './components/coach/AICoach';
import ProgressTracker from './components/progress/ProgressTracker';
import MealPlanner from './components/meals/MealPlanner';
import SafetyHub from './components/education/SafetyHub';
import { useFastingStore } from './store/fastingStore';
import { useCapacitor } from './hooks/useCapacitor';
import { Timer, MessageSquare, BarChart3, Book, Apple, AlertTriangle, Check } from 'lucide-react';
import boltBadge from './assets/images/built-on-bolt.svg';

// Safety Disclaimer Screen Component
const SafetyDisclaimerScreen: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { updateUserPreferences } = useFastingStore();

  const handleAcknowledge = () => {
    if (isChecked) {
      updateUserPreferences({ safetyDisclaimerAcknowledged: true });
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center p-6 overflow-y-auto">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle size={32} className="text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Medical Disclaimer</h1>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-4 bg-red-50 dark:bg-red-900/20 mb-6 rounded">
          <h2 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-lg">Important Safety Notice</h2>
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            This app does not provide medical advice. Consult a healthcare professional before starting any fasting regimen.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="font-medium">FastWise AI is designed as an educational and supportive tool for intermittent fasting.</p>
            
            <p className="font-bold">However, please understand that:</p>
            
            <ul className="list-disc pl-5 space-y-3">
              <li>The information provided is for educational purposes only and is not intended as medical advice.</li>
              
              <li>
                <span className="font-semibold text-red-600 dark:text-red-400">Fasting may not be appropriate for everyone</span>, especially 
                those with certain medical conditions.
              </li>
              
              <li>
                <span className="font-semibold">The following individuals should NOT fast without specific medical supervision:</span>
                <ul className="list-disc pl-5 mt-2">
                  <li>Children under 18 years of age</li>
                  <li>Pregnant or breastfeeding individuals</li>
                  <li>People with diabetes or other metabolic disorders</li>
                  <li>Those with a history of eating disorders</li>
                  <li>Individuals who are underweight or malnourished</li>
                </ul>
              </li>
              
              <li>The app's recommendations are general in nature and not tailored to your specific health situation.</li>
            </ul>
            
            <p className="font-medium mt-4 text-red-600 dark:text-red-400">
              Before starting any fasting protocol, we strongly advise consulting with a qualified healthcare provider 
              to ensure it's appropriate for your individual health circumstances.
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="acknowledge"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
            />
          </div>
          <label htmlFor="acknowledge" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            I acknowledge that this app is not a substitute for medical advice, and I agree to consult my doctor before starting a fasting plan.
          </label>
        </div>

        <button
          onClick={handleAcknowledge}
          disabled={!isChecked}
          className={`w-full flex items-center justify-center py-3 px-5 ${isChecked
              ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500'
              : 'bg-gray-300 cursor-not-allowed dark:bg-gray-700'
            } text-white font-medium rounded-lg text-base focus:outline-none focus:ring-4`}
        >
          {isChecked && <Check size={20} className="mr-2" />}
          I Understand and Agree
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('timer');
  const [showMainApp, setShowMainApp] = useState<boolean>(false);
  const { userPreferences } = useFastingStore();
  const { isNative, isIOS } = useCapacitor();
  
  // No need to track initialization with simplified disclaimer logic
  
  // Apply theme and initialize app only once
  useEffect(() => {
    // Always apply dark mode by default
    document.documentElement.classList.add('dark');
    
    // Add iOS-specific classes for native app
    if (isNative && isIOS) {
      document.body.classList.add('ios-native');
    }

    // Check if user has previously acknowledged the disclaimer on any platform
    // Only show disclaimer once on first app installation
    console.log('Checking safety disclaimer status:', userPreferences.safetyDisclaimerAcknowledged);
    setShowMainApp(userPreferences.safetyDisclaimerAcknowledged);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNative, isIOS]);  // Only run on mount and when platform changes
  
  // Handle disclaimer acknowledgment changes
  useEffect(() => {
    // Show main app when disclaimer is acknowledged
    // This ensures user can proceed after checking the disclaimer checkbox
    if (userPreferences.safetyDisclaimerAcknowledged) {
      setShowMainApp(true);
    }
  }, [userPreferences.safetyDisclaimerAcknowledged]);

  // Handle completion of safety disclaimer
  const handleDisclaimerComplete = () => {
    setShowMainApp(true);
  };

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
  
  // Development environment check removed - no longer needed
  
  // If disclaimer hasn't been acknowledged, show the disclaimer screen
  if (!showMainApp) {
    return <SafetyDisclaimerScreen onComplete={handleDisclaimerComplete} />;
  }
  
  // Otherwise show the main app
  return (
    <>
      <Layout>
        <div className="mb-6">
          {/* Built on Bolt Badge */}
          <div className="fixed left-4 bottom-28 z-40">
            <img src={boltBadge} alt="Built on Bolt" className="h-6 opacity-90" />
          </div>
          
          {/* Bottom tab navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 pb-safe z-50 pt-3 pb-6">
            <div className="flex justify-around max-w-md mx-auto">
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
          
          {/* Main content */}
          <div className="pb-24"> {/* Increased bottom padding for taller tabs */}
            {renderActiveComponent()}
          </div>
        </div>
      </Layout>
    </>
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