import React, { useState, useEffect } from 'react';
import { useFastingStore } from '../../store/fastingStore';
import { fastingProtocols } from '../../data/fastingProtocols';
import { formatTime } from '../../utils/formatTime';
import { Play, Pause, StopCircle } from 'lucide-react';
import ProgressRing from '../shared/ProgressRing';
import FastingStageInfo from './FastingStageInfo';

const FastingTimer: React.FC = () => {
  const { 
    currentFast,
    protocols,
    startFast,
    pauseFast,
    resumeFast,
    endFast,
    getElapsedTime,
    getRemainingTime,
    getCompletionPercentage,
    getCurrentStage 
  } = useFastingStore();
  
  const [selectedProtocolId, setSelectedProtocolId] = useState(() => {
    return protocols.find(p => p.id === '16-8')?.id || protocols[0].id;
  });
  
  const [elapsedTime, setElapsedTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  
  useEffect(() => {
    if (!currentFast) {
      setElapsedTime(0);
      setRemainingTime(0);
      setCompletionPercentage(0);
      setCurrentStage(0);
      return;
    }
    
    if (currentFast.isPaused) return;
    
    const interval = setInterval(() => {
      setElapsedTime(getElapsedTime());
      setRemainingTime(getRemainingTime());
      setCompletionPercentage(getCompletionPercentage());
      setCurrentStage(getCurrentStage());
    }, 1000);
    
    setElapsedTime(getElapsedTime());
    setRemainingTime(getRemainingTime());
    setCompletionPercentage(getCompletionPercentage());
    setCurrentStage(getCurrentStage());
    
    return () => clearInterval(interval);
  }, [currentFast, getElapsedTime, getRemainingTime, getCompletionPercentage, getCurrentStage]);
  
  const handleProtocolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProtocolId(e.target.value);
  };
  
  const handleStartFast = () => {
    startFast(selectedProtocolId);
  };
  
  const handlePauseResumeFast = () => {
    if (currentFast?.isPaused) {
      resumeFast();
    } else {
      pauseFast();
    }
  };
  
  const handleEndFast = (completed: boolean = false) => {
    endFast(completed);
  };

  const selectedProtocol = protocols.find(p => p.id === selectedProtocolId);
  
  return (
    <div className="w-full max-w-sm mx-auto px-4 sm:px-0">
      {!currentFast ? (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-100">Start a New Fast</h2>
          
          <div className="mb-4">
            <label htmlFor="protocol" className="block text-sm font-medium text-gray-300 mb-1">
              Select Fasting Protocol
            </label>
            <select
              id="protocol"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100"
              value={selectedProtocolId}
              onChange={handleProtocolChange}
            >
              {protocols.map(protocol => (
                <option key={protocol.id} value={protocol.id}>
                  {protocol.name} {protocol.recommended && '(Recommended)'}
                </option>
              ))}
            </select>
            
            {selectedProtocol && (
              <p className="mt-2 text-sm text-gray-400">
                {selectedProtocol.description}
              </p>
            )}
          </div>
          
          <button
            onClick={handleStartFast}
            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow transition-colors duration-200 flex items-center justify-center"
          >
            <Play size={20} className="mr-2" /> Start Fasting
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white">
              {protocols.find(p => p.id === currentFast.protocolId)?.name}
            </h2>
            <p className="text-gray-400 mt-1">
              {currentFast.isPaused ? 'Paused' : 'In Progress'}
            </p>
          </div>
          
          <div className="flex justify-center items-center mb-8 px-4">
            <div className="relative w-full max-w-[280px] aspect-square">
              <ProgressRing 
                progress={completionPercentage} 
                size="100%" 
                strokeWidth={4} 
                circleColor="text-gray-700"
                progressColor="text-primary-400"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {formatTime(remainingTime)}
                </span>
                <span className="text-gray-400 text-sm">
                  remaining
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8">
            <div className="text-center">
              <p className="text-gray-400 mb-1">Elapsed</p>
              <p className="text-xl sm:text-2xl font-semibold text-white">{formatTime(elapsedTime)}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-1">Completion</p>
              <p className="text-xl sm:text-2xl font-semibold text-white">{Math.round(completionPercentage)}%</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handlePauseResumeFast}
              className={`py-3 px-4 font-medium rounded-md shadow transition-colors duration-200 flex items-center justify-center ${
                currentFast.isPaused
                  ? 'bg-secondary-600 hover:bg-secondary-700 text-white'
                  : 'bg-secondary-600 hover:bg-secondary-700 text-white'
              }`}
            >
              {currentFast.isPaused ? (
                <>
                  <Play size={20} className="mr-2" /> Resume
                </>
              ) : (
                <>
                  <Pause size={20} className="mr-2" /> Pause
                </>
              )}
            </button>
            
            <button
              onClick={() => handleEndFast(false)}
              className="py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-md shadow transition-colors duration-200 flex items-center justify-center"
            >
              <StopCircle size={20} className="mr-2" /> End Fast
            </button>
          </div>
        </div>
      )}
      
      {currentFast && currentStage > 0 && (
        <FastingStageInfo stageId={currentStage} elapsedTime={elapsedTime} />
      )}
    </div>
  );
};

export default FastingTimer;