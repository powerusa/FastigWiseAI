import React, { useState } from 'react';
import { fastingStages } from '../../data/fastingStages';
import { 
  Clock, ChevronDown, ChevronUp, 
  Zap, Flame, Star, Utensils, Battery, Sparkles, Apple 
} from 'lucide-react';
import { formatHoursMinutes } from '../../utils/formatTime';

interface FastingStageInfoProps {
  stageId: number;
  elapsedTime: number;
}

const stageIcons = {
  'Utensils': Utensils,
  'Battery': Battery,
  'Zap': Zap,
  'Flame': Flame,
  'Sparkles': Sparkles,
  'Star': Star,
  'Apple': Apple,
};

const FastingStageInfo: React.FC<FastingStageInfoProps> = ({ stageId, elapsedTime }) => {
  const [expanded, setExpanded] = useState(false);
  
  const stage = fastingStages.find(s => s.id === stageId);
  
  if (!stage) return null;
  
  const StageIcon = stageIcons[stage.icon as keyof typeof stageIcons] || Flame;
  
  // Calculate percentage through current stage
  const stageStartMs = stage.timeRange.start * 60 * 60 * 1000;
  const stageEndMs = stage.timeRange.end * 60 * 60 * 1000;
  const stageDurationMs = stageEndMs - stageStartMs;
  
  const progressInStageMs = elapsedTime - stageStartMs;
  const progressPercentage = Math.min(100, Math.max(0, (progressInStageMs / stageDurationMs) * 100));
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transition-all duration-300">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpanded}>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
            <StageIcon size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{stage.name}</h3>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>
                {stage.timeRange.start}-{stage.timeRange.end} hours
              </span>
            </div>
          </div>
        </div>
        <div>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      <div className="mt-3">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-primary-500 dark:bg-primary-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
          <span>{formatHoursMinutes(stageStartMs)}</span>
          <span>{formatHoursMinutes(stageEndMs)}</span>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-4 transition-all duration-300">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {stage.description}
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary-700 dark:text-primary-400 mb-1">Benefits</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                {stage.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-primary-700 dark:text-primary-400 mb-1">Tips</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                {stage.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-primary-700 dark:text-primary-400 mb-1">Common Symptoms</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                {stage.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FastingStageInfo;