import React, { useState, useRef, useEffect } from 'react';
import { useFastingStore } from '../../store/fastingStore';
import { generateCoachResponse } from '../../utils/aiCoach';
import { SendHorizontal, Bot, User, Info } from 'lucide-react';
import { formatTimeShort } from '../../utils/formatTime';
import { fastingStages } from '../../data/fastingStages';

const AICoach: React.FC = () => {
  const { 
    currentFast, 
    chatHistory, 
    addChatMessage, 
    getCurrentStage,
    getElapsedTime,
    userStats
  } = useFastingStore();
  
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);
  
  // Auto welcome message
  useEffect(() => {
    if (chatHistory.length === 0) {
      // Add a slight delay to simulate AI thinking
      setTimeout(() => {
        addChatMessage(
          "Hello! I'm your FastWise AI coach. I can help answer questions about fasting, provide encouragement, or explain what's happening in your body. How can I assist you today?",
          'ai'
        );
      }, 800);
    }
  }, [chatHistory, addChatMessage]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    addChatMessage(message, 'user');
    
    // Clear input and show typing indicator
    setMessage('');
    setIsTyping(true);
    
    // Generate AI response using the enhanced coach
    const aiResponse = generateCoachResponse(
      message,
      currentFast,
      userStats,
      chatHistory
    );
    
    // Simulate AI thinking time
    setTimeout(() => {
      addChatMessage(aiResponse, 'ai');
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col h-[550px]">
        {/* Chat header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="font-semibold">FastWise AI Coach</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {currentFast 
                ? `Supporting your ${fastingStages.find(s => s.id === getCurrentStage())?.name || 'fasting'} journey`
                : 'Ready to assist with your fasting journey'
              }
            </p>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {chatHistory.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-lg px-4 py-2 ${
                  msg.sender === 'user' 
                    ? 'bg-primary-100 dark:bg-primary-900 text-gray-800 dark:text-gray-200 rounded-tr-none' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-1">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center mr-1 text-gray-600 dark:text-gray-400">
                    {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatTimeShort(msg.timestamp)}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 rounded-tl-none max-w-[85%]">
                <div className="flex items-center mb-1">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center mr-1 text-gray-600 dark:text-gray-400">
                    <Bot size={12} />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Now</span>
                </div>
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your AI coach a question..."
              className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-gray-100 resize-none overflow-hidden"
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim() || isTyping}
              className={`p-2 ${
                message.trim() && !isTyping
                  ? 'bg-primary-600 hover:bg-primary-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white rounded-r-md`}
            >
              <SendHorizontal size={20} />
            </button>
          </div>
          
          {!currentFast && (
            <div className="flex items-center mt-2 text-xs text-gray-600 dark:text-gray-400">
              <Info size={12} className="mr-1" />
              <span>Start a fast to get personalized stage-specific guidance</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICoach;