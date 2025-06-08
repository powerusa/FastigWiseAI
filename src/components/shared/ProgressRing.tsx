import React from 'react';

interface ProgressRingProps {
  progress: number;
  size: number | string;
  strokeWidth: number;
  circleColor: string;
  progressColor: string;
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size,
  strokeWidth,
  circleColor,
  progressColor,
}) => {
  // Handle both number and string sizes
  const isPercentageSize = typeof size === 'string' && size.includes('%');
  const sizeValue = isPercentageSize ? '100%' : size;
  
  // For percentage-based sizing, we need to calculate the radius differently
  const viewBoxSize = 100;
  const radius = (viewBoxSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <svg 
      width={sizeValue} 
      height={sizeValue} 
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      className="transform -rotate-90 w-full h-full"
    >
      {/* Background circle */}
      <circle
        className={circleColor}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
      />
      
      {/* Progress circle */}
      <circle
        className={`${progressColor} transition-all duration-500 ease-in-out`}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
      />
    </svg>
  );
};

export default ProgressRing;