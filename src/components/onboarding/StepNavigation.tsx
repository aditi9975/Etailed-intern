import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { ThemeClasses } from '../../types';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSubmit: () => void;
  themeClasses: ThemeClasses;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({ 
  currentStep, 
  totalSteps,
  handleBack,
  handleNext,
  handleSubmit,
  themeClasses
}) => {
  return (
    <div className={`flex justify-between mt-8 pt-6 border-t ${themeClasses.border} transition-all duration-300`}>
      <motion.button
        onClick={handleBack}
        disabled={currentStep === 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
          currentStep === 1
            ? `${themeClasses.textSecondary} cursor-not-allowed opacity-50`
            : `${themeClasses.buttonSecondary}`
        }`}
        whileHover={{ scale: currentStep === 1 ? 1 : 1.05 }}
        whileTap={{ scale: currentStep === 1 ? 1 : 0.95 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </motion.button>

      {currentStep < totalSteps ? (
        <motion.button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Next</span>
          <ArrowRight className="relative z-10 w-4 h-4" />
        </motion.button>
      ) : (
        <motion.button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-medium relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -4px rgba(16, 185, 129, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Complete Setup</span>
          <Check className="relative z-10 w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
};