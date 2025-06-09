import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { useFastingStore } from '../../store/fastingStore';

interface SafetyDisclaimerModalProps {
  onClose?: () => void;
}

const SafetyDisclaimerModal: React.FC<SafetyDisclaimerModalProps> = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { updateUserPreferences } = useFastingStore();

  const handleAcknowledge = () => {
    if (isChecked) {
      updateUserPreferences({ safetyDisclaimerAcknowledged: true });
      if (onClose) onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <AlertTriangle size={24} className="text-red-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Medical Disclaimer</h2>
            </div>
            {onClose && (
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2 mb-6 bg-red-50 dark:bg-red-900/20">
            <p className="text-gray-800 dark:text-white text-sm font-medium mb-1">Important Safety Notice:</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              This app does not provide medical advice. Consult a healthcare professional before starting any fasting regimen. Not for use by children, pregnant or breastfeeding individuals, or those with medical conditions.
            </p>
          </div>

          <div className="space-y-4 mb-6 text-sm text-gray-700 dark:text-gray-300">
            <p>FastWise AI is designed as an educational and supportive tool for intermittent fasting.</p>
            
            <p>
              <strong>However, please understand that:</strong>
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>The information provided is for educational purposes only and is not intended as medical advice.</li>
              <li>Fasting may not be appropriate for everyone, especially those with certain medical conditions.</li>
              <li>Children, pregnant or breastfeeding individuals, individuals with diabetes or other metabolic disorders, and those with a history of eating disorders should not fast without specific medical supervision.</li>
              <li>The app's recommendations are general in nature and not tailored to your specific health situation.</li>
            </ul>
            
            <p className="font-medium mt-4">
              Before starting any fasting protocol, we strongly advise consulting with a qualified healthcare provider to ensure it's appropriate for your individual health circumstances.
            </p>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="acknowledge"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
              />
            </div>
            <label htmlFor="acknowledge" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              I acknowledge that this app is not a substitute for medical advice, and I agree to consult my doctor before starting a fasting plan.
            </label>
          </div>

          <button
            onClick={handleAcknowledge}
            disabled={!isChecked}
            className={`w-full py-2.5 px-5 ${
              isChecked
                ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500'
                : 'bg-gray-300 cursor-not-allowed dark:bg-gray-700'
            } text-white font-medium rounded-lg text-sm focus:outline-none focus:ring-4`}
          >
            I Understand and Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyDisclaimerModal;
