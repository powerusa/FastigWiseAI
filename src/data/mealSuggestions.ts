import { MealSuggestion } from '../types';

export const breakfastMealSuggestions: MealSuggestion[] = [
  {
    id: 'breakfast-1',
    title: 'Bone Broth',
    description: 'A gentle way to break a fast with essential minerals and protein.',
    nutrients: {
      protein: 9,
      carbs: 2,
      fat: 5,
    },
    ingredients: [
      '2 cups homemade or high-quality bone broth',
      '1/4 tsp sea salt',
      'Fresh herbs (optional)',
    ],
    instructions: 'Warm the bone broth gently on the stove. Add salt and herbs if desired. Sip slowly.',
    imageUrl: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg',
    tags: ['gentle', 'break-fast', 'protein', 'hydrating'],
    mealType: 'break-fast',
  },
  {
    id: 'breakfast-2',
    title: 'Scrambled Eggs with Avocado',
    description: 'Protein-rich eggs with healthy fats from avocado make an ideal fast-breaking meal.',
    nutrients: {
      protein: 14,
      carbs: 6,
      fat: 22,
    },
    ingredients: [
      '2 pastured eggs',
      '1/2 small avocado',
      'Pinch of sea salt',
      'Fresh herbs (optional)',
    ],
    instructions: 'Scramble eggs in a small amount of butter or ghee. Serve with sliced avocado and a sprinkle of salt.',
    imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg',
    tags: ['protein', 'healthy-fats', 'keto-friendly'],
    mealType: 'break-fast',
  },
  {
    id: 'breakfast-3',
    title: 'Greek Yogurt with Berries',
    description: 'Probiotic-rich yogurt with antioxidant berries for shorter fasts.',
    nutrients: {
      protein: 18,
      carbs: 14,
      fat: 5,
    },
    ingredients: [
      '1 cup full-fat Greek yogurt',
      '1/4 cup mixed berries',
      '1 tsp honey (optional)',
      '1 tbsp chopped nuts (optional)',
    ],
    instructions: 'Layer yogurt and berries in a bowl. Drizzle with honey and sprinkle with nuts if desired.',
    imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    tags: ['probiotics', 'antioxidants', 'shorter-fasts'],
    mealType: 'break-fast',
  }
];

export const lunchMealSuggestions: MealSuggestion[] = [
  {
    id: 'lunch-1',
    title: 'Salmon Salad with Olive Oil Dressing',
    description: 'Protein-rich salmon with leafy greens and anti-inflammatory olive oil.',
    nutrients: {
      protein: 28,
      carbs: 8,
      fat: 18,
    },
    ingredients: [
      '4 oz wild-caught salmon',
      '2 cups mixed greens',
      '1/2 cucumber, sliced',
      '1/4 avocado, diced',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      'Salt and pepper to taste',
    ],
    instructions: 'Arrange greens, cucumber, and avocado. Top with cooked salmon. Whisk together olive oil, lemon juice, salt, and pepper for dressing.',
    imageUrl: 'https://images.pexels.com/photos/4553036/pexels-photo-4553036.jpeg',
    tags: ['protein', 'omega-3', 'anti-inflammatory'],
    mealType: 'lunch',
  },
  {
    id: 'lunch-2',
    title: 'Turkey and Vegetable Lettuce Wraps',
    description: 'Light, protein-focused meal that\'s easy on digestion.',
    nutrients: {
      protein: 24,
      carbs: 10,
      fat: 12,
    },
    ingredients: [
      '4 oz sliced turkey breast',
      'Large lettuce leaves',
      '1/2 bell pepper, sliced',
      '1/4 cup grated carrot',
      '1/4 avocado, sliced',
      '1 tbsp olive oil mayo or guacamole',
    ],
    instructions: 'Lay out lettuce leaves. Fill with turkey and vegetables. Top with mayo or guacamole. Roll up and enjoy.',
    imageUrl: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    tags: ['protein', 'low-carb', 'easy-digestion'],
    mealType: 'lunch',
  }
];

export const dinnerMealSuggestions: MealSuggestion[] = [
  {
    id: 'dinner-1',
    title: 'Baked Chicken with Roasted Vegetables',
    description: 'Well-balanced meal with quality protein and fiber-rich vegetables.',
    nutrients: {
      protein: 30,
      carbs: 18,
      fat: 15,
    },
    ingredients: [
      '5 oz chicken breast',
      '1 cup Brussels sprouts, halved',
      '1 small sweet potato, cubed',
      '1 tbsp olive oil',
      'Herbs and spices to taste',
    ],
    instructions: 'Toss vegetables in olive oil and seasonings. Arrange on baking sheet with chicken breast. Bake at 400°F for 25-30 minutes.',
    imageUrl: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg',
    tags: ['protein', 'fiber', 'nutrient-dense'],
    mealType: 'dinner',
  },
  {
    id: 'dinner-2',
    title: 'Grass-Fed Beef and Vegetable Stir Fry',
    description: 'Nutrient-dense meal with complete protein and colorful vegetables.',
    nutrients: {
      protein: 26,
      carbs: 14,
      fat: 16,
    },
    ingredients: [
      '4 oz grass-fed beef strips',
      '2 cups mixed stir-fry vegetables',
      '1 tbsp coconut oil',
      '1 tbsp coconut aminos (soy sauce alternative)',
      '1 clove garlic, minced',
      '1/2 inch ginger, grated',
    ],
    instructions: 'Heat coconut oil. Cook beef strips. Add garlic and ginger. Add vegetables and cook until tender-crisp. Season with coconut aminos.',
    imageUrl: 'https://images.pexels.com/photos/5848206/pexels-photo-5848206.jpeg',
    tags: ['protein', 'nutrient-dense', 'iron-rich'],
    mealType: 'dinner',
  }
];

export const breakFastMealSuggestions: Record<string, MealSuggestion[]> = {
  // For fasts under 24 hours
  short: [
    {
      id: 'break-short-1',
      title: 'Avocado with Sea Salt',
      description: 'A gentle, nutrient-dense option rich in healthy fats and potassium.',
      nutrients: {
        protein: 2,
        carbs: 8,
        fat: 15,
      },
      ingredients: [
        '1/2 medium avocado',
        'Pinch of sea salt',
        'Squeeze of lemon (optional)',
      ],
      instructions: 'Slice avocado and sprinkle with sea salt. Add optional lemon juice. Eat slowly and mindfully.',
      imageUrl: 'https://images.pexels.com/photos/1346345/pexels-photo-1346345.jpeg',
      tags: ['gentle', 'healthy-fats', 'easy-digestion'],
      mealType: 'break-fast',
    },
    {
      id: 'break-short-2',
      title: 'Hard-Boiled Eggs',
      description: 'Simple protein option that\'s easy to digest after shorter fasts.',
      nutrients: {
        protein: 12,
        carbs: 1,
        fat: 10,
      },
      ingredients: [
        '2 hard-boiled eggs',
        'Pinch of sea salt',
      ],
      instructions: 'Peel eggs and sprinkle with sea salt. Eat slowly, chewing thoroughly.',
      imageUrl: 'https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg',
      tags: ['protein', 'easy-digestion', 'simple'],
      mealType: 'break-fast',
    }
  ],
  
  // For fasts 24-48 hours
  medium: [
    {
      id: 'break-medium-1',
      title: 'Bone Broth with Poached Egg',
      description: 'Gentle, protein-rich option ideal for breaking medium-length fasts.',
      nutrients: {
        protein: 15,
        carbs: 2,
        fat: 10,
      },
      ingredients: [
        '2 cups bone broth',
        '1 poached egg',
        'Fresh herbs',
        'Pinch of sea salt',
      ],
      instructions: 'Heat bone broth gently. Poach egg separately. Add to warm broth with herbs and salt.',
      imageUrl: 'https://images.pexels.com/photos/6249468/pexels-photo-6249468.jpeg',
      tags: ['protein', 'gentle', 'mineral-rich'],
      mealType: 'break-fast',
    },
    {
      id: 'break-medium-2',
      title: 'Smoked Salmon with Avocado',
      description: 'Nutrient-dense combination of protein and healthy fats.',
      nutrients: {
        protein: 20,
        carbs: 6,
        fat: 18,
      },
      ingredients: [
        '3 oz wild-caught smoked salmon',
        '1/2 avocado',
        'Squeeze of lemon',
        'Fresh dill (optional)',
        'Pinch of sea salt',
      ],
      instructions: 'Arrange salmon and sliced avocado on a plate. Add lemon juice, dill, and salt. Eat slowly.',
      imageUrl: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg',
      tags: ['protein', 'healthy-fats', 'omega-3'],
      mealType: 'break-fast',
    }
  ],
  
  // For fasts over 48 hours
  long: [
    {
      id: 'break-long-1',
      title: 'Simple Bone Broth',
      description: 'The ideal way to gently reintroduce nutrition after extended fasting.',
      nutrients: {
        protein: 9,
        carbs: 2,
        fat: 5,
      },
      ingredients: [
        '2 cups homemade or high-quality bone broth',
        '1/4 tsp sea salt',
      ],
      instructions: 'Warm broth gently. Sip very slowly over 30-45 minutes. Wait 1-2 hours before consuming anything else.',
      imageUrl: 'https://images.pexels.com/photos/6249455/pexels-photo-6249455.jpeg',
      tags: ['gentle', 'mineral-rich', 'hydrating'],
      mealType: 'break-fast',
    },
    {
      id: 'break-long-2',
      title: 'Soft-Boiled Egg in Broth',
      description: 'For the second meal after an extended fast, adding gentle protein.',
      nutrients: {
        protein: 15,
        carbs: 2,
        fat: 8,
      },
      ingredients: [
        '1 cup bone broth',
        '1 soft-boiled egg',
        'Small pinch of sea salt',
      ],
      instructions: 'Prepare soft-boiled egg (6 minutes). Warm broth separately. Place peeled egg in broth and consume slowly.',
      imageUrl: 'https://images.pexels.com/photos/4553035/pexels-photo-4553035.jpeg',
      tags: ['gentle-protein', 'second-meal', 'mineral-rich'],
      mealType: 'break-fast',
    }
  ]
};

// Function to get meal suggestions based on fast duration
export function getBreakFastSuggestions(fastDurationHours: number): MealSuggestion[] {
  if (fastDurationHours < 24) {
    return breakFastMealSuggestions.short;
  } else if (fastDurationHours < 48) {
    return breakFastMealSuggestions.medium;
  } else {
    return breakFastMealSuggestions.long;
  }
}