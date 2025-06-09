import React, { useState } from 'react';
import { useFastingStore } from '../../store/fastingStore';
import { breakfastMealSuggestions, lunchMealSuggestions, dinnerMealSuggestions, getBreakFastSuggestions } from '../../data/mealSuggestions';
import { UtensilsCrossed, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { formatHoursMinutes } from '../../utils/formatTime';

const MealPlanner: React.FC = () => {
  const { currentFast, getElapsedTime } = useFastingStore();
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);
  
  let elapsedHours = 0;
  if (currentFast) {
    elapsedHours = getElapsedTime() / (60 * 60 * 1000);
  }
  
  const toggleMeal = (id: string) => {
    if (expandedMeal === id) {
      setExpandedMeal(null);
    } else {
      setExpandedMeal(id);
    }
  };
  
  // Determine which meal suggestions to show
  const mealSuggestions = currentFast
    ? getBreakFastSuggestions(elapsedHours)
    : [...breakfastMealSuggestions, ...lunchMealSuggestions, ...dinnerMealSuggestions];
  
  return (
    <div className="max-w-md mx-auto mt-8"> {/* Added top margin to lower the window */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {currentFast 
            ? 'Breaking Fast Recommendations' 
            : 'Meal Suggestions'
          }
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {currentFast 
            ? `Based on your ${formatHoursMinutes(getElapsedTime())} fast, here are optimal ways to break your fast when you're ready.` 
            : 'Nutrient-dense meal ideas for your eating window.'
          }
        </p>
        
        <div className="space-y-4">
          {mealSuggestions.map((meal) => (
            <div 
              key={meal.id} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleMeal(meal.id)}
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mr-3">
                    <UtensilsCrossed size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">{meal.title}</h3>
                    <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center mt-1">
                      <Clock size={12} className="mr-1" />
                      <span>
                        {meal.mealType === 'break-fast' ? 'Break Fast' : meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  {expandedMeal === meal.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {expandedMeal === meal.id && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  {meal.imageUrl && (
                    <div className="mb-4">
                      <img 
                        src={meal.imageUrl} 
                        alt={meal.title} 
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {meal.description}
                  </p>
                  
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Protein</div>
                      <div className="font-medium">{meal.nutrients.protein}g</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Carbs</div>
                      <div className="font-medium">{meal.nutrients.carbs}g</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Fat</div>
                      <div className="font-medium">{meal.nutrients.fat}g</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-primary-700 dark:text-primary-400 mb-2">Ingredients</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      {meal.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-700 dark:text-primary-400 mb-2">Instructions</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {meal.instructions}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {meal.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;