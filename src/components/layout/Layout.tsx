import React, { ReactNode, useEffect } from 'react';
import { useFastingStore } from '../../store/fastingStore';
import Header from './Header';
import Footer from './Footer';
import { Sun, Moon } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { userPreferences, updateUserPreferences } = useFastingStore();
  
  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
  }, []);
  
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        aria-label="Toggle theme"
      >
        {userPreferences.theme === 'light' ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </button>
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-20 md:pb-24 max-w-full sm:max-w-md lg:max-w-lg">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;