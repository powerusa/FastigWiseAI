import { ChatMessage, Fast, UserStats, Mood } from '../types';
import { fastingStages } from '../data/fastingStages';
import { getAIResponse, getRandomMotivationalMessage } from '../data/aiResponses';

interface CoachContext {
  stage: number;
  fastingHours: number;
  symptoms?: string[];
  energy?: number;
  mood?: Mood;
  timeOfDay: number;
  experienceLevel: string;
  motivationStyle: string;
}

export function generateCoachResponse(
  message: string,
  currentFast: Fast | null,
  userStats: UserStats,
  chatHistory: ChatMessage[]
): string {
  if (!currentFast) {
    return handleNonFastingResponse(message, userStats);
  }

  const context = buildContext(currentFast, userStats);
  const baseResponse = getBaseResponse(message.toLowerCase(), context);
  return personalizeResponse(baseResponse, context);
}

function buildContext(currentFast: Fast, userStats: UserStats): CoachContext {
  const now = Date.now();
  const elapsedMs = now - currentFast.startTime - currentFast.pausedTime;
  const fastingHours = elapsedMs / (1000 * 60 * 60);
  
  return {
    stage: getCurrentStage(fastingHours),
    fastingHours,
    symptoms: currentFast.symptoms,
    energy: currentFast.energy,
    mood: currentFast.mood,
    timeOfDay: new Date().getHours(),
    experienceLevel: userStats.experienceLevel,
    motivationStyle: userStats.motivationStyle
  };
}

function getCurrentStage(fastingHours: number): number {
  for (const stage of fastingStages) {
    if (fastingHours >= stage.timeRange.start && fastingHours < stage.timeRange.end) {
      return stage.id;
    }
  }
  return fastingStages[fastingStages.length - 1].id;
}

function handleNonFastingResponse(message: string, userStats: UserStats): string {
  const keywords = {
    start: ["how", "begin", "start"],
    benefits: ["benefits", "good", "help"],
    motivation: ["motivate", "encourage", "inspire"],
    protocol: ["protocol", "schedule", "plan"]
  };

  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => message.includes(word))) {
      return getNonFastingResponse(category, userStats.experienceLevel);
    }
  }

  return "I'm here to help with your fasting journey! Would you like to know about getting started, fasting benefits, or choosing a protocol?";
}

function getBaseResponse(message: string, context: CoachContext): string {
  // Handle common symptoms
  if (message.includes('hungry') || message.includes('hunger')) {
    return handleHungerResponse(context);
  }
  if (message.includes('tired') || message.includes('energy')) {
    return handleEnergyResponse(context);
  }
  if (message.includes('headache')) {
    return handleHeadacheResponse(context);
  }

  // Handle time-specific concerns
  if (context.timeOfDay >= 18 && context.fastingHours < 12) {
    return handleEveningResponse(context);
  }
  if (context.timeOfDay >= 5 && context.timeOfDay <= 8 && context.fastingHours > 8) {
    return handleMorningResponse(context);
  }

  // Default to stage-based response
  return getAIResponse(context.stage, message, (context.fastingHours % 24) / 24);
}

function personalizeResponse(response: string, context: CoachContext): string {
  let personalizedResponse = response;

  // Add experience-level specific content
  if (context.experienceLevel === 'beginner') {
    personalizedResponse += '\n\nRemember: It\'s normal to find this challenging at first. Each fast makes you stronger! 💪';
  }

  // Adapt to motivation style
  if (context.motivationStyle === 'scientific') {
    personalizedResponse = addScientificContext(personalizedResponse, context);
  } else if (context.motivationStyle === 'emotional') {
    personalizedResponse = addEmotionalSupport(personalizedResponse, context);
  }

  // Add symptom-specific advice if needed
  if (context.symptoms?.length) {
    personalizedResponse = addSymptomGuidance(personalizedResponse, context);
  }

  return personalizedResponse;
}

function handleHungerResponse(context: CoachContext): string {
  if (context.fastingHours < 12) {
    return "Hunger often comes in waves and passes within 20 minutes. Try drinking water or herbal tea, and stay busy! Your body is just adjusting to its natural eating rhythm.";
  }
  if (context.fastingHours > 24) {
    return "At this stage, true hunger usually decreases as your body becomes more efficient at using stored fat. If you're experiencing discomfort, check your electrolytes and hydration.";
  }
  return "You're in the transition period where hunger can feel strongest. This is normal! Your body is switching from glucose to fat for fuel. Stay strong, this phase usually passes soon! 💪";
}

function handleEnergyResponse(context: CoachContext): string {
  if (context.fastingHours < 16) {
    return "Early fasting fatigue is normal as your body adapts. Try light movement or a short walk to boost energy naturally.";
  }
  if (context.fastingHours > 36) {
    return "Many experience increased energy and mental clarity at this stage! If you're feeling tired, ensure adequate electrolytes and rest as needed.";
  }
  return "You're in the metabolic switch phase! Energy can fluctuate as your body transitions to using fat for fuel. This usually stabilizes soon.";
}

function handleHeadacheResponse(context: CoachContext): string {
  return "Headaches during fasting often relate to electrolyte imbalance or dehydration. Try adding a pinch of salt to your water and ensure you're well hydrated. If it persists, breaking your fast is always an option.";
}

function handleEveningResponse(context: CoachContext): string {
  return "Evening can be challenging for fasting! Try keeping busy with light activities, herbal tea, and remember that sleep is a natural fasting period.";
}

function handleMorningResponse(context: CoachContext): string {
  return "Morning energy is often highest during a fast! Take advantage of this clarity for important tasks. Stay hydrated as you start your day.";
}

function addScientificContext(response: string, context: CoachContext): string {
  const scientificAdditions = {
    1: "During the fed state, insulin levels remain elevated to process nutrients.",
    2: "Your body is accessing glycogen stores, typically holding ~2000kcal of energy.",
    3: "Ketone production is beginning as glucose availability decreases.",
    4: "Gluconeogenesis is maintaining stable blood glucose while ketones increase.",
    5: "Autophagy is significantly enhanced during this prolonged fasting state.",
    6: "Growth hormone levels are elevated to preserve lean tissue mass."
  };
  
  return `${response}\n\n🔬 Scientific Context: ${scientificAdditions[context.stage as keyof typeof scientificAdditions] || ''}`;
}

function addEmotionalSupport(response: string, context: CoachContext): string {
  return `${response}\n\n${getRandomMotivationalMessage()}`;
}

function addSymptomGuidance(response: string, context: CoachContext): string {
  if (context.symptoms?.includes('headache')) {
    return `${response}\n\nFor your headache: Try adding electrolytes and staying hydrated. This is common during adaptation.`;
  }
  if (context.symptoms?.includes('dizzy')) {
    return `${response}\n\nFeeling dizzy? Take it easy, add some salt to your water, and don't hesitate to break your fast if needed.`;
  }
  return response;
}

function getNonFastingResponse(category: string, experienceLevel: string): string {
  const responses = {
    start: {
      beginner: "Let's start with a gentle 16:8 fast - 16 hours fasting, 8 hours eating. Skip breakfast tomorrow and eat lunch as your first meal!",
      intermediate: "Ready to begin? Choose your protocol and I'll guide you through the stages with personalized support.",
      advanced: "Welcome back! Select your fasting protocol and we'll track your progress through all metabolic stages."
    },
    benefits: {
      beginner: "Fasting can help with weight management, mental clarity, and cellular health. We'll start slowly to help you adapt safely.",
      intermediate: "Beyond weight management, you're now experiencing enhanced autophagy, ketone production, and metabolic flexibility.",
      advanced: "At your level, you're maximizing autophagy, stem cell activation, and metabolic benefits. Let's optimize your protocol."
    },
    motivation: {
      beginner: "Every journey begins with a single step! We'll start gradually and celebrate each milestone together.",
      intermediate: "You've already proven you can do this! Let's build on your success and reach new fasting goals.",
      advanced: "Your dedication is impressive! Let's focus on optimizing your fasting for specific health and performance goals."
    },
    protocol: {
      beginner: "I recommend starting with 16:8 intermittent fasting. It's sustainable and effective for most people.",
      intermediate: "Consider advancing to 18:6 or adding a weekly 24-hour fast to enhance benefits.",
      advanced: "You might enjoy experimenting with alternate day fasting or targeted 72-hour fasts for maximum benefits."
    }
  };

  return responses[category as keyof typeof responses][experienceLevel as keyof typeof responses['start']] || 
    "How can I help you with your fasting journey today?";
}