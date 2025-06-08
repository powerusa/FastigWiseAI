import { FastingStage } from '../types';

export const fastingStages: FastingStage[] = [
  {
    id: 1,
    name: 'Fed State',
    timeRange: {
      start: 0,
      end: 4,
    },
    description: 'Your body is actively digesting and absorbing nutrients from your last meal. Insulin levels are elevated, promoting storage of excess energy as glycogen and fat.',
    benefits: [
      'Nutrient absorption',
      'Energy for immediate use',
    ],
    tips: [
      'This is when your last meal is being processed',
      'Drink water to help with digestion',
      'Avoid additional snacking to begin the fasting process',
    ],
    symptoms: [
      'Normal energy levels',
      'Feeling of fullness',
      'Possible slight drowsiness after large meals',
    ],
    icon: 'Utensils',
  },
  {
    id: 2,
    name: 'Early Post-Absorptive',
    timeRange: {
      start: 4,
      end: 16,
    },
    description: 'Your body begins to tap into glycogen stores in the liver as blood glucose levels start to decrease. Insulin levels begin to drop, allowing for the beginning of fat mobilization.',
    benefits: [
      'Beginning of glycogen depletion',
      'Insulin levels starting to drop',
      'Initial fat-burning activation',
    ],
    tips: [
      'Stay hydrated with water, black coffee, or plain tea',
      'Light activity can help deplete glycogen faster',
      'Hunger may come in waves - it typically passes after 20-30 minutes',
    ],
    symptoms: [
      'Initial hunger signals',
      'Slight decrease in energy',
      'Possible mild mental fog',
    ],
    icon: 'Battery',
  },
  {
    id: 3,
    name: 'Metabolic Shift',
    timeRange: {
      start: 16,
      end: 24,
    },
    description: 'Liver glycogen is significantly depleted, and your body begins ramping up fat oxidation. Ketone production begins, providing an alternative fuel source for the brain.',
    benefits: [
      'Fat burning increases significantly',
      'Initial ketone production',
      'Growth hormone increases',
      'Cellular cleaning (autophagy) begins',
    ],
    tips: [
      'Replenish electrolytes (sodium, potassium, magnesium)',
      'Light walking can help with energy levels',
      'Mental clarity often improves during this phase',
    ],
    symptoms: [
      'Hunger typically decreases',
      'Energy fluctuations',
      'Possible slight dizziness when standing quickly',
    ],
    icon: 'Zap',
  },
  {
    id: 4,
    name: 'Gluconeogenic State',
    timeRange: {
      start: 24,
      end: 48,
    },
    description: 'Your body is actively producing glucose through gluconeogenesis (creating glucose from non-carbohydrate sources). Ketone levels continue to rise, becoming a major fuel source.',
    benefits: [
      'Significant increase in ketone levels',
      'Enhanced fat burning',
      'Increased autophagy',
      'Reduced inflammation',
    ],
    tips: [
      'Electrolyte supplementation becomes more important',
      'Reduce intensive exercise',
      'Stay busy to avoid food-focused thinking',
    ],
    symptoms: [
      'Hunger typically very low',
      'Possible mental clarity',
      'Some may experience mild headaches',
      'Cold extremities possible',
    ],
    icon: 'Flame',
  },
  {
    id: 5,
    name: 'Deep Ketosis',
    timeRange: {
      start: 48,
      end: 72,
    },
    description: 'Ketone production reaches peak levels, providing most of the energy for the brain and body. Autophagy (cellular cleaning) is significantly enhanced, and insulin sensitivity improves.',
    benefits: [
      'Maximum autophagy',
      'Peak fat burning',
      'Enhanced brain function for many',
      'Stem cell activation begins',
      'Significant insulin sensitivity improvement',
    ],
    tips: [
      'Continue electrolyte supplementation',
      'Rest as needed',
      'Monitor for any warning signs',
    ],
    symptoms: [
      'Minimal hunger',
      'Increased energy for many',
      'Possible euphoria',
      'Some may experience sleep changes',
    ],
    icon: 'Sparkles',
  },
  {
    id: 6,
    name: 'Extended Starvation',
    timeRange: {
      start: 72,
      end: 999, // Effectively no upper limit for the app
    },
    description: 'The body is fully adapted to using ketones and fatty acids for fuel. Protein conservation mechanisms are maximized, and growth hormone levels peak to preserve muscle mass.',
    benefits: [
      'Maximum cellular regeneration',
      'Significant immune system reset',
      'Maximum growth hormone production',
      'Extended stem cell activation',
    ],
    tips: [
      'Only continue under medical supervision',
      'Daily electrolyte supplementation is crucial',
      'Monitor for warning signs',
      'Break fast immediately if feeling unwell',
    ],
    symptoms: [
      'Minimal to no hunger',
      'High mental clarity for many',
      'Possible euphoria',
      'Need for less sleep',
      'Cold sensitivity',
    ],
    icon: 'Star',
  },
  {
    id: 7,
    name: 'Refeeding',
    timeRange: {
      start: 0,
      end: 0, // Special case, not time-based
    },
    description: 'The critical phase of transitioning back to eating. How you break your fast is crucial, especially after extended fasts.',
    benefits: [
      'Insulin sensitivity is maximized',
      'Nutrient absorption is enhanced',
      'Digestive system reset',
    ],
    tips: [
      'Break fast with small, easily digestible meals',
      'For longer fasts (>36h), start with bone broth or light protein',
      'Avoid large, heavy meals and processed foods',
      'Gradually increase meal size over several hours',
    ],
    symptoms: [
      'Possible intense hunger',
      'Digestive sensitivity',
      'Rapid energy increase',
    ],
    icon: 'Apple',
  },
];