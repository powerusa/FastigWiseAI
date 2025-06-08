import React, { useState } from 'react';
import { useFastingStore } from '../../store/fastingStore';
import { formatDateShort, getDayOfWeek } from '../../utils/formatTime';
import { BarChart, PieChart, CalendarRange, Clock, ThumbsUp } from 'lucide-react';
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProgressTracker: React.FC = () => {
  const { userStats, pastFasts, progressEntries, protocols } = useFastingStore();
  const [view, setView] = useState<'calendar' | 'stats'>('calendar');
  
  // Generate calendar data for current month
  const generateCalendarData = () => {
    const today = new Date();
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    
    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(today.getFullYear(), today.getMonth(), i + 1);
      const timestamp = date.getTime();
      
      // Find fasts on this day
      const fastsOnDay = pastFasts.filter(fast => {
        const fastDate = new Date(fast.startTime);
        return (
          fastDate.getDate() === date.getDate() &&
          fastDate.getMonth() === date.getMonth() &&
          fastDate.getFullYear() === date.getFullYear()
        );
      });
      
      // Get progress entry for this day
      const progressOnDay = progressEntries.find(entry => {
        const entryDate = new Date(entry.date);
        return (
          entryDate.getDate() === date.getDate() &&
          entryDate.getMonth() === date.getMonth() &&
          entryDate.getFullYear() === date.getFullYear()
        );
      });
      
      return {
        day: i + 1,
        timestamp,
        fasts: fastsOnDay,
        progress: progressOnDay,
        isToday: 
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear(),
      };
    });
    
    // Add empty slots for the days before the first day of the month
    const emptySlots = Array.from({ length: firstDayOfMonth }, (_, i) => ({
      day: 0,
      timestamp: 0,
      fasts: [],
      progress: undefined,
      isToday: false,
      isEmpty: true,
    }));
    
    return [...emptySlots, ...days];
  };
  
  const calendarData = generateCalendarData();
  
  // Prepare data for pie chart
  const fastingDistribution = protocols.map(protocol => {
    const count = pastFasts.filter(fast => fast.protocolId === protocol.id).length;
    return {
      name: protocol.name,
      value: count,
      id: protocol.id,
    };
  }).filter(item => item.value > 0);
  
  // Prepare data for fast completion rate
  const completionData = [
    { name: 'Completed', value: userStats.completionRate },
    { name: 'Abandoned', value: 100 - userStats.completionRate },
  ];
  
  const chartColors = ['#1e95fd', '#1ab275', '#ef4444', '#6366f1', '#f59e0b', '#8b5cf6'];
  
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Fasting Progress</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setView('calendar')}
              className={`p-2 rounded-md ${
                view === 'calendar'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              <CalendarRange size={20} />
            </button>
            <button
              onClick={() => setView('stats')}
              className={`p-2 rounded-md ${
                view === 'stats'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              <BarChart size={20} />
            </button>
          </div>
        </div>
        
        {view === 'calendar' && (
          <div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarData.map((day, index) => (
                <div
                  key={index}
                  className={`aspect-square p-1 rounded-md ${
                    day.isEmpty
                      ? 'bg-transparent'
                      : day.isToday
                      ? 'bg-primary-100 dark:bg-primary-900 border border-primary-300 dark:border-primary-700'
                      : day.fasts.length > 0
                      ? 'bg-secondary-100 dark:bg-secondary-900'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {!day.isEmpty && (
                    <>
                      <div className="text-xs font-medium">{day.day}</div>
                      {day.fasts.length > 0 && (
                        <div className="mt-1 flex justify-center">
                          <div className="h-2 w-2 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Latest Fasts</h3>
              <div className="space-y-3">
                {pastFasts.slice(0, 3).map((fast) => {
                  const protocol = protocols.find(p => p.id === fast.protocolId);
                  const fastDuration = fast.endTime 
                    ? ((fast.endTime - fast.startTime - fast.pausedTime) / (60 * 60 * 1000)).toFixed(1)
                    : 0;
                  
                  return (
                    <div 
                      key={fast.id} 
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
                    >
                      <div>
                        <div className="font-medium">{protocol?.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDateShort(fast.startTime)} ({getDayOfWeek(fast.startTime)})
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">{fastDuration}h</span>
                        {fast.completed && (
                          <ThumbsUp size={14} className="ml-2 text-secondary-500 dark:text-secondary-400" />
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {pastFasts.length === 0 && (
                  <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                    No fasting history yet. Start a fast to track your progress!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {view === 'stats' && (
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Fasts</div>
                <div className="text-2xl font-semibold mt-1">{userStats.totalFasts}</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <div className="text-sm text-gray-600 dark:text-gray-400">Current Streak</div>
                <div className="text-2xl font-semibold mt-1">{userStats.currentStreak}</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <div className="text-sm text-gray-600 dark:text-gray-400">Longest Fast</div>
                <div className="text-2xl font-semibold mt-1">{userStats.longestFast.toFixed(1)}h</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <div className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</div>
                <div className="text-2xl font-semibold mt-1">{userStats.completionRate.toFixed(0)}%</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Fasting Distribution</h3>
              {fastingDistribution.length > 0 ? (
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsChart>
                      <Pie
                        data={fastingDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {fastingDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                        ))}
                      </Pie>
                    </RechartsChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                  Complete fasts to see your distribution.
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Completion Rate</h3>
              {userStats.totalFasts > 0 ? (
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsChart>
                      <Pie
                        data={completionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value.toFixed(0)}%`}
                      >
                        <Cell fill="#1ab275" />
                        <Cell fill="#ef4444" />
                      </Pie>
                    </RechartsChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                  Complete fasts to see your completion rate.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;