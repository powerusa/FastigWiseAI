import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-600 dark:bg-primary-800 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 pt-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit size={28} className="text-white" />
          <h1 className="text-xl md:text-2xl font-display font-bold tracking-tight">
            FastWise<span className="text-secondary-300">AI</span>
          </h1>
        </div>
        <div className="text-sm font-medium hidden md:block">
          Your AI Fasting Coach
        </div>
      </div>
    </header>
  );
};

export default Header;