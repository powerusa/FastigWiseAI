import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useFastingStore } from '../../store/fastingStore';

const Header: React.FC = () => {
  const { userPreferences, updateUserPreferences } = useFastingStore();
  
  const toggleTheme = () => {
    updateUserPreferences({ 
      theme: userPreferences.theme === 'light' ? 'dark' : 'light' 
    });
    
    if (userPreferences.theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  // Set header height as a CSS variable to use for positioning other elements
  React.useEffect(() => {
    document.documentElement.style.setProperty('--header-height', '72px'); // Reduced from 96px to 72px
    // Return cleanup function that removes the variable
    return () => {
      document.documentElement.style.removeProperty('--header-height');
    };
  }, []);
  
  // Initialize dark mode
  React.useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <header className="bg-primary-600 dark:bg-primary-800 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 pt-8 flex justify-between items-center">
        <div className="w-10"></div> {/* Spacer for centering */}
        <div className="text-lg font-medium">
          Your AI Fasting Coach
        </div>
        {/* Theme toggle button in the top app bar */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-primary-700 dark:bg-primary-900 text-white hover:bg-primary-800"
          aria-label="Toggle theme"
        >
          {userPreferences.theme === 'light' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;