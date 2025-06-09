import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-16 pb-20 md:pb-24 max-w-full sm:max-w-md lg:max-w-lg">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;