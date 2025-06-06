import React from 'react';
import { motion } from 'framer-motion';
import { ThemeClasses } from '../../types';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  themeClasses: ThemeClasses;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps,
  themeClasses
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${themeClasses.textSecondary} transition-colors duration-300`}>
          Step {currentStep} of {totalSteps}
        </span>
        <span className={`text-sm ${themeClasses.textSecondary} transition-colors duration-300`}>
          {Math.round((currentStep / totalSteps) * 100)}% Complete
        </span>
      </div>
      

      
      {/* Step labels */}
      <div className="flex justify-between w-full">
        {['Personal', 'Business', 'Preferences'].map((label, index) => (
          <motion.div 
  key={index}
  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
    index < currentStep ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : themeClasses.progressBg
  }`}
  animate={{ 
    scale: index + 1 === currentStep ? 1.05 : 1 
  }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
/>

        ))}
      </div>
    </div>
  );
};