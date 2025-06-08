import React from 'react';
import { Timer, MessageSquare, BarChart3, Book, Apple } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('timer');
  
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto">
        <ul className="flex justify-around items-center h-16">
          <TabItem 
            icon={<Timer size={22} />} 
            label="Timer" 
            id="timer" 
            active={activeTab === 'timer'} 
            onClick={() => setActiveTab('timer')}
          />
          <TabItem 
            icon={<MessageSquare size={22} />} 
            label="AI Coach" 
            id="coach" 
            active={activeTab === 'coach'} 
            onClick={() => setActiveTab('coach')}
          />
          <TabItem 
            icon={<BarChart3 size={22} />} 
            label="Progress" 
            id="progress" 
            active={activeTab === 'progress'} 
            onClick={() => setActiveTab('progress')}
          />
          <TabItem 
            icon={<Apple size={22} />} 
            label="Meals" 
            id="meals" 
            active={activeTab === 'meals'} 
            onClick={() => setActiveTab('meals')}
          />
          <TabItem 
            icon={<Book size={22} />} 
            label="Learn" 
            id="learn" 
            active={activeTab === 'learn'} 
            onClick={() => setActiveTab('learn')}
          />
        </ul>
      </nav>
    </footer>
  );
};

interface TabItemProps {
  icon: React.ReactNode;
  label: string;
  id: string;
  active: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <li className="flex-1">
      <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full py-2 text-xs font-medium transition-colors duration-200 ${
          active 
            ? 'text-primary-600 dark:text-primary-400' 
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
        }`}
      >
        <span className="mb-1">{icon}</span>
        <span>{label}</span>
        {/* Active indicator removed */}
      </button>
    </li>
  );
};

export default Footer;