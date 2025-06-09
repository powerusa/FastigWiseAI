import React, { useState } from 'react';
import { AlertTriangle, BookOpen, Heart, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SafetyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is intermittent fasting?',
    answer: 'Intermittent fasting is an eating pattern that cycles between periods of fasting and eating. It doesn\'t specify which foods to eat, but rather when you should eat them. Common methods include daily 16-hour fasts (16:8 method), fasting for 24 hours twice per week (5:2 method), or alternate-day fasting.'
  },
  {
    question: 'Is fasting safe for everyone?',
    answer: 'No, fasting is not recommended for everyone. Those who should avoid fasting include pregnant or breastfeeding women, children and teenagers, people with a history of eating disorders, individuals with certain medical conditions (like diabetes), and those taking medications that require food intake. Always consult with a healthcare provider before starting any fasting regimen.'
  },
  {
    question: 'What can I consume during a fast?',
    answer: 'During a fast, you can consume water, black coffee, unsweetened tea, and sometimes electrolytes (depending on your fasting protocol). Anything with calories, including sugar substitutes, may break a fast. For longer fasts, electrolyte supplementation becomes more important to maintain mineral balance.'
  },
  {
    question: 'Will fasting cause muscle loss?',
    answer: 'Short-term fasting (less than 24-48 hours) is unlikely to cause significant muscle loss in most people. Your body preferentially burns stored glycogen and fat during these periods. For longer fasts, certain mechanisms like increased growth hormone help preserve muscle tissue. Regular resistance training and adequate protein intake during feeding periods further help maintain muscle mass.'
  },
  {
    question: 'How long does it take to see results from fasting?',
    answer: 'Most people begin to notice initial changes within 2-4 weeks of consistent fasting. Weight loss results vary based on overall diet quality, exercise habits, and fasting protocol. Metabolic benefits like improved insulin sensitivity can begin after just a few fasting sessions, though measurable changes in blood markers might take several weeks to months.'
  },
  {
    question: 'What are the stages of fasting?',
    answer: 'Fasting progresses through several metabolic stages: the Fed State (0-4 hours after eating) where insulin is elevated, Early Post-Absorptive (4-16 hours) where glycogen is being depleted, Metabolic Shift (16-24 hours) where ketone production begins, Gluconeogenic State (24-48 hours) where ketones increase significantly, Deep Ketosis (48-72 hours) with peak ketone levels, and Extended Starvation (>72 hours) with maximum autophagy activation.'
  },
  {
    question: 'How should I break a fast properly?',
    answer: 'For shorter fasts (<24 hours), you can break your fast with any nutritious meal. For longer fasts, it\'s important to ease back into eating with easily digestible foods like bone broth, soft-cooked eggs, or small portions of protein and vegetables. Avoid large meals, processed foods, and high-carb options initially, which can cause digestive discomfort or reactive hypoglycemia.'
  },
  {
    question: 'Can I exercise while fasting?',
    answer: 'Yes, many people exercise while fasting without issues. Light to moderate activity (walking, yoga, light resistance training) is generally well-tolerated at any stage of fasting. For higher-intensity workouts, some people prefer exercising at the end of their fast before eating, while others perform better by timing workouts during the fed state. Listen to your body and adjust accordingly.'
  }
];

const safetyItems: SafetyItem[] = [
  {
    title: 'Who Should Not Fast',
    description: 'Fasting is not recommended for pregnant or breastfeeding women, children and teenagers under 18, people with a history of eating disorders, individuals with type 1 diabetes, those who are underweight or malnourished, and people with certain medical conditions. Always consult your healthcare provider before starting.',
    icon: <AlertTriangle size={24} className="text-accent-500" />,
  },
  {
    title: 'Warning Signs to Stop Fasting',
    description: 'Break your fast immediately if you experience: severe lightheadedness that doesn\'t improve with salt intake, persistent nausea or vomiting, unusual heart palpitations, extreme weakness, feeling faint or passing out, persistent headache unrelieved by electrolytes, or feeling genuinely unwell beyond mild discomfort.',
    icon: <AlertTriangle size={24} className="text-accent-500" />,
  },
  {
    title: 'Medical Considerations',
    description: 'If you take medications, particularly for blood pressure or diabetes, consult your doctor before fasting as dosages may need adjustment. People with gout, gallstones, or certain metabolic disorders should get medical clearance before fasting. Remember that fasting is not appropriate for treating serious medical conditions without professional supervision.',
    icon: <Heart size={24} className="text-accent-500" />,
  },
];

const SafetyHub: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    if (expandedFAQ === index) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(index);
    }
  };
  
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="border-l-4 border-red-500 pl-4 py-4 bg-red-50 dark:bg-red-900/20 mb-6">
          <h3 className="font-semibold text-red-600 dark:text-red-400 mb-1">Medical Disclaimer</h3>
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            This app does not provide medical advice. Consult a healthcare professional before starting any fasting regimen. 
            Not for use by children, pregnant or breastfeeding individuals, or those with medical conditions.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2">Fasting Safety Guide</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Important information to ensure a safe and effective fasting experience.
        </p>
        
        <div className="space-y-6 mb-8">
          {safetyItems.map((item, index) => (
            <div key={index} className="flex space-x-4">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg mb-8">
          <div className="flex items-start space-x-3">
            <BookOpen size={20} className="text-primary-600 dark:text-primary-400 mt-1" />
            <div>
              <h3 className="font-medium text-primary-700 dark:text-primary-300">Beginner's Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                If you're new to fasting, start with a 12-hour overnight fast, then gradually extend to 16:8 (16 hours fasting, 8 hours eating). Begin with 2-3 days per week rather than daily. Stay hydrated, include electrolytes, and listen to your body's signals.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-4">
            <HelpCircle size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
            <h3 className="text-lg font-medium">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 dark:bg-gray-700"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="font-medium">{faq.question}</h4>
                  <div>
                    {expandedFAQ === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                
                {expandedFAQ === index && (
                  <div className="p-4 text-sm text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="font-medium mb-1">Medical Disclaimer</p>
          <p>
            The information provided in this app is for educational purposes only and is not intended as medical advice. 
            Consult your healthcare provider before starting any fasting regimen, especially if you have underlying health conditions 
            or take medications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyHub;