import { FastingStage } from '../types';

interface AIResponseTemplate {
  stage: number;
  timeBasedResponses: {
    early: string[];
    middle: string[];
    late: string[];
  };
  commonQuestions: Record<string, string[]>;
}

export const aiResponseTemplates: AIResponseTemplate[] = [
  {
    stage: 1, // Fed State
    timeBasedResponses: {
      early: [
        "You're just getting started with your fast! Your body is still processing your last meal, which typically takes 3-4 hours. This is a great time to stay hydrated and prepare mentally for your fasting journey.",
        "Welcome to your fasting journey! Right now, your body is digesting your last meal. Insulin levels are elevated as nutrients are being absorbed and stored. Stay hydrated and embrace the beginning of your fast!"
      ],
      middle: [
        "You're about halfway through the Fed State. Your body is actively processing your last meal. Insulin is still elevated, which is normal during digestion. Keep drinking water and prepare for the next stage.",
        "Your body is busy processing nutrients from your last meal. This digestive process creates the feeling of fullness that helps ease you into your fast. Stay hydrated and notice how your body feels."
      ],
      late: [
        "You're nearing the end of the Fed State. Soon, your body will transition to using stored energy instead of food from your last meal. Keep drinking water and notice the subtle changes in how you feel.",
        "The Fed State is almost complete. Your body has nearly finished processing your last meal, and soon you'll begin tapping into stored energy. This transition is the first step in your fasting journey!"
      ]
    },
    commonQuestions: {
      "hunger": [
        "Feeling hungry already? That's often psychological at this early stage since your body is still processing food. Try drinking water or herbal tea, and distract yourself with an engaging activity.",
        "Early hunger during the Fed State is typically mental rather than physical. Your body still has plenty of available energy from your recent meal. Deep breathing or a short walk can help shift your focus."
      ],
      "water": [
        "Water is essential during fasting! Aim for at least 2-3 liters daily. You can also enjoy black coffee, plain tea, and other non-caloric beverages. Staying hydrated helps manage hunger and supports your body's processes.",
        "Hydration is crucial! Water, black coffee, and plain tea are excellent choices. Proper hydration helps with hunger management and supports the detoxification processes that occur during fasting."
      ],
      "exercise": [
        "Light exercise during the Fed State is perfectly fine! Your body still has plenty of readily available energy. Walking, stretching, or light cardio are all good options. Listen to your body and don't overdo it.",
        "Exercise is great during this early stage! Your body has ample energy from your recent meal. Moderate activity can help deplete glycogen stores faster, accelerating your transition to fat burning."
      ]
    }
  },
  {
    stage: 2, // Early Post-Absorptive
    timeBasedResponses: {
      early: [
        "You've entered the Early Post-Absorptive stage! Your body has finished processing your last meal and is beginning to tap into liver glycogen (stored carbohydrates). Insulin levels are starting to decrease, which will eventually lead to fat burning.",
        "Welcome to the Early Post-Absorptive phase! Your body is now shifting from using your last meal for energy to tapping into stored glycogen. This is when the metabolic benefits of fasting begin to kick in."
      ],
      middle: [
        "You're making great progress! Your body is actively using glycogen stores, and insulin levels continue to drop. This gradual transition prepares your body to access fat stores more efficiently. Hunger may come and go in waves - this is completely normal.",
        "You're well into the Early Post-Absorptive phase. Your liver is releasing stored glucose to maintain blood sugar levels. This process is helping to deplete glycogen reserves, an important step before significant fat burning begins."
      ],
      late: [
        "You're approaching the end of the Early Post-Absorptive phase! Your glycogen stores are becoming depleted, and your body is preparing to increase fat oxidation. Some people begin to notice mental clarity improvements around this time.",
        "You're doing fantastic! This stage is laying the groundwork for the metabolic shift coming soon. Your insulin levels have decreased significantly, which helps unlock your fat stores for energy use."
      ]
    },
    commonQuestions: {
      "hunger": [
        "Hunger often peaks during this stage as your body adjusts to using stored energy. Remember that hunger comes in waves that typically last only 20-30 minutes. Staying busy, drinking water, or having a pinch of salt can help manage these feelings.",
        "This is when many people experience their strongest hunger signals. These are often hormonal (from ghrelin, the hunger hormone) rather than representing true energy needs. The hunger wave will pass if you wait it out, usually within 30 minutes."
      ],
      "energy": [
        "Energy fluctuations are normal during this transition phase. Your body is switching fuel sources from immediate food energy to stored energy. Light activity can actually help stabilize energy levels, and electrolytes may be beneficial if you're feeling low.",
        "Some energy dips are common as your body adapts to using stored energy instead of recently consumed food. This is temporary! Many people find their energy stabilizes and even improves as they progress further into their fast."
      ],
      "headache": [
        "Headaches during this stage often relate to electrolyte imbalances or caffeine withdrawal (if you've reduced coffee/tea). Try adding a pinch of salt to your water, staying well-hydrated, and ensuring adequate magnesium and potassium intake.",
        "Headaches are common for fasting beginners. They're typically related to dehydration, electrolyte imbalance, or caffeine changes. A pinch of salt in water, staying hydrated, and possibly taking magnesium can help resolve this issue."
      ]
    }
  },
  {
    stage: 3, // Metabolic Shift
    timeBasedResponses: {
      early: [
        "Congratulations on reaching the Metabolic Shift stage! Your body is now significantly increasing fat oxidation as glycogen stores become depleted. Ketone production is beginning, providing an alternative fuel source for your brain.",
        "You've reached an exciting milestone! The Metabolic Shift phase is when your body starts producing significant amounts of ketones from fat breakdown. Many fasters notice improved mental clarity and reduced hunger during this phase."
      ],
      middle: [
        "You're in the heart of the Metabolic Shift! Your body is ramping up ketone production and fat burning. This is when many people report a notable decrease in hunger and improvements in mental focus. Autophagy (cellular cleaning) is also increasing.",
        "You're doing wonderfully! This stage is when many of the beneficial processes of fasting really accelerate. Your body is becoming increasingly efficient at using fat for fuel, and cellular cleaning mechanisms are activating."
      ],
      late: [
        "You're approaching the end of the Metabolic Shift stage! Your ketone levels are continuing to rise, providing clean fuel for your brain. Growth hormone production is increasing, which helps preserve muscle mass during extended fasting.",
        "You're almost through the Metabolic Shift! This crucial transition has established ketosis and enhanced fat burning. The hunger-suppressing effects of ketones are typically strong now, making the rest of your fast more comfortable."
      ]
    },
    commonQuestions: {
      "ketosis": [
        "Yes, you're likely entering ketosis now! The Metabolic Shift stage (16-24 hours) is when ketone production becomes significant. These ketones provide an excellent alternative fuel for your brain and help suppress hunger.",
        "Ketosis typically begins during this Metabolic Shift stage. Your liver is converting fatty acids into ketone bodies, which serve as an efficient fuel source for your brain and many other tissues. This metabolic state offers numerous benefits beyond just weight management."
      ],
      "focus": [
        "Many people report improved mental clarity during this stage as ketones increase. Your brain actually functions very efficiently on ketones, which some researchers believe may have evolutionary advantages. Stay hydrated and consider electrolytes if you're not experiencing this benefit yet.",
        "Mental clarity often improves during this stage! Ketones provide a steady, efficient energy source for your brain, without the fluctuations that can come from glucose metabolism. Some people describe it as a 'lifting of brain fog.'"
      ],
      "exercise": [
        "Light to moderate exercise is still fine, but high-intensity workouts may become more challenging as your body adapts to using fat and ketones for fuel. Walking, yoga, or light resistance training are good options. Listen to your body and scale back if needed.",
        "Exercise during this phase should be approached mindfully. Your body is undergoing a significant metabolic transition. Many people find they perform well with light activities, but may need to reduce intensity compared to their fed state. Walking and light resistance training are excellent choices."
      ]
    }
  },
  {
    stage: 4, // Gluconeogenic State
    timeBasedResponses: {
      early: [
        "You've entered the Gluconeogenic State! Your body is now actively producing glucose from non-carbohydrate sources (like certain amino acids and glycerol) while also significantly increasing ketone production. Fat burning is substantially enhanced.",
        "Welcome to the Gluconeogenic State! You've passed the 24-hour mark, which is an impressive achievement. Your body is now fully engaged in producing ketones and has activated significant autophagy (cellular cleaning) processes."
      ],
      middle: [
        "You're progressing excellently through the Gluconeogenic State. Ketone levels are continuing to rise, providing clean, efficient fuel for your brain. Autophagy is well-established, removing damaged cellular components and proteins.",
        "You're doing remarkably well! At this stage, your growth hormone levels have increased significantly, which helps preserve muscle mass. Fat oxidation is now your primary energy source, and many people report significant mental clarity."
      ],
      late: [
        "You're approaching the end of the Gluconeogenic State! Your ketone levels are approaching their peak, and your body has become quite efficient at using fat for fuel. Insulin sensitivity is improving, which will benefit your metabolism even after the fast.",
        "You're almost through this stage! The extensive fat burning and ketone production happening now are providing steady energy and typically reducing hunger significantly. Your body is showing its remarkable adaptability to using stored energy."
      ]
    },
    commonQuestions: {
      "hunger": [
        "Many people report that hunger significantly decreases during this stage as ketone levels rise. Ketones have a natural appetite-suppressing effect. If you're still experiencing hunger, ensure you're well-hydrated and consider adding a pinch of salt to your water.",
        "Hunger typically diminishes considerably by this stage. If you're still experiencing it, check your hydration and electrolyte balance. Sometimes what feels like hunger is actually thirst or an electrolyte need. A pinch of salt or a sugar-free electrolyte supplement may help."
      ],
      "muscle": [
        "Your body is working to preserve muscle during this stage! Growth hormone levels increase significantly during extended fasting, which helps maintain lean tissue. Adequate protein before and after your fast, along with resistance training, further protects muscle mass.",
        "Muscle preservation is actually enhanced during this fasting stage through several mechanisms. Growth hormone increases significantly (up to 5x baseline), and your body becomes more efficient at recycling amino acids. Light resistance training during your fast can further protect muscle tissue."
      ],
      "sleep": [
        "Sleep changes are common during extended fasting. Some people need less sleep, while others experience lighter sleep. This is often due to increased adrenaline and cortisol - part of your body's adaptation to fasting. Magnesium before bed can help improve sleep quality.",
        "Many fasters notice changes in their sleep patterns at this stage. Often people report needing less sleep yet feeling more rested. This likely relates to hormetic stress responses and increased orexin (a wakefulness neurotransmitter). If sleep disturbances are problematic, consider magnesium supplementation before bed."
      ]
    }
  },
  {
    stage: 5, // Deep Ketosis
    timeBasedResponses: {
      early: [
        "Congratulations on reaching Deep Ketosis! You've passed the 48-hour mark, which is a significant milestone. Ketone production is at or near peak levels, providing efficient fuel for your brain and body. Autophagy is substantially elevated.",
        "Welcome to Deep Ketosis! This stage represents a significant achievement in your fasting journey. Your ketone levels are at or near their peak, providing clean, efficient fuel. Autophagy (cellular cleaning) is now significantly enhanced."
      ],
      middle: [
        "You're progressing exceptionally well through Deep Ketosis. Your body has become highly efficient at utilizing fat for fuel. Stem cell activation begins during this phase, which contributes to the regenerative benefits of extended fasting.",
        "You're doing remarkably well in Deep Ketosis! Your insulin levels are extremely low, maximizing fat burning and improving insulin sensitivity. The significant autophagy happening now helps remove damaged cellular components and may have longevity benefits."
      ],
      late: [
        "You're approaching the end of the Deep Ketosis stage! Your body has been experiencing maximum autophagy, peak fat burning, and significant improvements in inflammatory markers. These benefits can persist even after you resume eating.",
        "You're almost through Deep Ketosis! The metabolic flexibility you're developing during this extended fast will benefit you even after you resume eating. Your insulin sensitivity is significantly improved, and cellular regeneration processes are highly active."
      ]
    },
    commonQuestions: {
      "breaking_fast": [
        "Breaking an extended fast properly is crucial! Start very small with easily digestible foods like bone broth, a small serving of protein, or a light vegetable soup. Avoid carbohydrates and large meals initially, then gradually increase portion sizes over 1-2 days.",
        "After fasting this long, breaking your fast correctly is essential. Begin with a small, gentle meal - bone broth, scrambled eggs, or a small salad with protein are good options. Avoid large portions, high-carb foods, and processed items, which can cause digestive discomfort or reactive hypoglycemia."
      ],
      "electrolytes": [
        "Electrolytes are absolutely critical during extended fasting! Ensure adequate sodium (2-3g daily), potassium (1-2g), and magnesium (300-400mg). Many symptoms at this stage (headache, weakness, cramps) relate to electrolyte imbalances rather than true energy needs.",
        "At this stage, electrolyte management is essential. Your body excretes more sodium, potassium, and magnesium during extended fasting, which must be replaced. A good general approach is adding pink salt to water, consuming sugar-free electrolyte supplements, or using magnesium glycinate supplements."
      ],
      "warning_signs": [
        "Important warning signs to watch for: extreme dizziness when standing, heart palpitations, persistent nausea, unusual weakness, or feeling genuinely unwell (beyond minor discomforts). If you experience these, break your fast with a light meal and consult a healthcare provider if symptoms persist.",
        "While some discomfort can be normal during extended fasting, certain symptoms warrant breaking your fast: severe lightheadedness, heart palpitations that persist after electrolyte supplementation, extreme weakness, persistent nausea, or feeling significantly unwell. Your safety always comes first."
      ]
    }
  },
  {
    stage: 6, // Extended Starvation
    timeBasedResponses: {
      early: [
        "You've entered Extended Starvation after 72+ hours of fasting - an impressive achievement! Your body is fully adapted to using ketones and fat for fuel. Protein conservation mechanisms are maximized to protect muscle tissue.",
        "Welcome to the Extended Starvation phase! This advanced fasting stage represents significant metabolic adaptation. Your body is fully ketone-adapted, growth hormone levels are substantially elevated, and autophagy is maximized."
      ],
      middle: [
        "You're progressing remarkably through Extended Starvation. Your body continues to efficiently utilize fat stores while preserving lean tissue. Stem cell activation is significant during this phase, contributing to cellular renewal.",
        "Your extended fast is progressing exceptionally well! At this stage, your body has maximized its fat-burning capabilities while developing sophisticated protein-sparing mechanisms. The regenerative processes active now may have significant longevity benefits."
      ],
      late: [
        "You're continuing to thrive in the Extended Starvation phase! Your body has been maintaining peak autophagy, maximum fat oxidation, and significant cellular renewal processes. These profound adaptations showcase your body's remarkable resilience.",
        "Your extended fasting journey continues to demonstrate your body's remarkable adaptability! The metabolic flexibility, cellular regeneration, and potential immune system reset you're experiencing represent some of the most profound benefits of extended fasting."
      ]
    },
    commonQuestions: {
      "how_long": [
        "Extended fasts beyond 72 hours should only be undertaken with proper research and ideally medical supervision. Many experts suggest that most metabolic benefits peak within 3-5 days, with diminishing returns afterward. Listen to your body and break your fast if you experience concerning symptoms.",
        "The optimal fasting duration varies by individual and goals. Most research suggests the key autophagy and metabolic benefits are significant by day 3-5. Extended fasts beyond this point should only be done with appropriate medical guidance. Always prioritize safety and listen to your body's signals."
      ],
      "refeeding": [
        "After such an extended fast, proper refeeding is absolutely critical to avoid refeeding syndrome, a potentially dangerous condition. Begin with very small, protein-focused meals (bone broth, small serving of eggs or fish). Gradually increase calories over 2-3 days, initially avoiding high-carb foods.",
        "Proper refeeding after your extended fast is crucial for safety. Begin with very small portions of easily digestible foods rich in proteins and fats but low in carbohydrates. Bone broth, scrambled eggs, or a small portion of fish are ideal. Increase portion sizes gradually over several days while monitoring how you feel."
      ],
      "medical": [
        "Extended fasting of this duration should ideally include medical supervision. Key parameters to monitor include electrolytes (particularly sodium, potassium, magnesium), blood pressure, and any unusual symptoms. Breaking your fast is appropriate if you develop concerning symptoms.",
        "For fasts of this duration, medical oversight is advisable. Important health parameters to monitor include electrolytes, blood pressure, and general wellbeing. Remember that the benefits of fasting can be obtained through shorter durations or intermittent protocols as well. Always prioritize your safety."
      ]
    }
  },
  {
    stage: 7, // Refeeding
    timeBasedResponses: {
      early: [
        "Welcome to the Refeeding phase! This crucial transition back to eating requires careful attention. Start with a very small, easily digestible meal. How you break your fast significantly impacts how you'll feel afterward.",
        "You've now entered the important Refeeding phase. The transition back to eating requires thoughtful attention, especially after extended fasting. Begin with small, nutrient-dense foods that are gentle on your digestive system."
      ],
      middle: [
        "You're progressing well through the Refeeding process. Continue with modest portion sizes and nutrient-dense foods. Your digestive system is reactivating, and your insulin sensitivity is currently optimal for nutrient partitioning.",
        "Your refeeding is going well! At this stage, you can gradually increase portion sizes while maintaining focus on whole, nutrient-dense foods. Your body is particularly efficient at nutrient absorption and utilization right now."
      ],
      late: [
        "You're nearing the completion of your refeeding process. Your digestive system has reactivated, and you can transition to normal healthy eating patterns. The metabolic benefits from your fast can persist for days or even weeks.",
        "You've almost completed the refeeding transition! Your body has successfully readapted to processing food, and you're ready to resume normal eating patterns. Consider incorporating regular fasting into your lifestyle to maintain benefits."
      ]
    },
    commonQuestions: {
      "what_to_eat": [
        "The best foods to break your fast depend on the duration. For shorter fasts (<24h), most whole foods are fine. For longer fasts, begin with easily digestible options like bone broth, soft-cooked eggs, avocado, or well-cooked vegetables. Avoid processed foods, large meals, and high-carb options initially.",
        "Ideal foods for breaking your fast include protein-rich, easily digestible options: bone broth, scrambled eggs, steamed fish, avocado, or well-cooked low-carb vegetables. These provide essential nutrients without overwhelming your digestive system. Gradually increase complexity and portion sizes with subsequent meals."
      ],
      "overeating": [
        "Post-fast overeating is common but counterproductive! It can cause digestive distress and negate some fasting benefits. Use small plates, eat slowly, and pause between helpings. Remember that your stomach capacity temporarily decreases during fasting.",
        "To avoid post-fast overeating, pre-plan your break-fast meal, use smaller plates, eat very slowly, and wait 20 minutes before deciding on seconds. Your hunger and fullness signals may take time to normalize, so conscious eating is especially important during refeeding."
      ],
      "benefits": [
        "To maintain your fasting benefits, consider incorporating regular time-restricted eating (like 16:8) or occasional longer fasts into your routine. Focus on whole, nutrient-dense foods during eating windows, and minimize processed foods and refined carbohydrates.",
        "The benefits from your fast can be extended through ongoing intermittent fasting practices, prioritizing whole foods, adequate protein intake, and regular physical activity. Many people find that a consistent 16:8 or 18:6 eating pattern helps maintain the metabolic improvements gained from longer fasts."
      ]
    }
  }
];

// Get stage-specific response based on elapsed time within the stage
export function getAIResponse(stage: number, query: string, elapsedTimeInStage: number): string {
  const template = aiResponseTemplates.find(t => t.stage === stage);
  if (!template) return "I'm sorry, I don't have specific guidance for this stage yet.";
  
  // Determine if we're in the early, middle, or late part of the stage
  let timingKey: 'early' | 'middle' | 'late';
  if (elapsedTimeInStage < 0.3) {
    timingKey = 'early';
  } else if (elapsedTimeInStage < 0.7) {
    timingKey = 'middle';
  } else {
    timingKey = 'late';
  }
  
  // Check if query matches any common questions
  for (const [questionKey, responses] of Object.entries(template.commonQuestions)) {
    if (query.toLowerCase().includes(questionKey.toLowerCase())) {
      // Return a random response for this question type
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // If no specific question was matched, return a general stage response
  return template.timeBasedResponses[timingKey][Math.floor(Math.random() * template.timeBasedResponses[timingKey].length)];
}

// Pre-defined motivational messages
export const motivationalMessages = [
  "You're doing great! Remember why you started this journey.",
  "Every hour of fasting is benefiting your body at the cellular level.",
  "Stay strong! The hunger waves always pass.",
  "Your willpower is building with every moment of this fast.",
  "You've got this! Your body is thanking you for this reset.",
  "Remember, fasting gets easier with practice as your body adapts.",
  "You're not just abstaining from food - you're actively healing your body.",
  "Difficult roads often lead to beautiful destinations. Keep going!",
  "Your future self will thank you for the discipline you're showing now.",
  "Focus on how you'll feel when you complete this fast, not on temporary discomfort.",
  "Fasting is like a muscle - the more you use it, the stronger it gets.",
  "Each fasting hour is like a deposit in your health savings account.",
  "Hunger is often just a habit of eating at certain times, not true hunger.",
  "Your body has food - it's just eating your fat stores instead of a meal!",
  "What seems hard now will soon become your new normal. Persist!",
  "Fasting doesn't get easier - you get stronger.",
  "Small daily improvements lead to stunning results over time.",
  "Trust the process. Your body knows exactly what to do during a fast.",
  "The temporary discomfort of fasting leads to lasting metabolic health."
];

export function getRandomMotivationalMessage(): string {
  return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}