import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { useOnboarding } from '../../hooks/useOnboarding';
import { ThemeToggle } from '../common/ThemeToggle';
import { ProgressIndicator } from '../common/ProgressIndicator';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import { StepNavigation } from './StepNavigation';
import { Dashboard } from '../dashboard/Dashboard';

export const OnboardingContainer: React.FC = () => {
  const { isDarkMode, toggleTheme, themeClasses } = useTheme();
  const { 
    currentStep, 
    isCompleted, 
    formData, 
    errors, 
    handleInputChange, 
    handleNext, 
    handleBack, 
    handleSubmit,
    totalSteps
  } = useOnboarding();

  // If onboarding is completed, show the Dashboard
  if (isCompleted) {
    return (
      <Dashboard 
        formData={formData} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        themeClasses={themeClasses}
       
      />
    );
  }

  // Otherwise, show the Onboarding Flow
  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses.background} flex items-center justify-center p-4 bg-noise-pattern`}>
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar */}
        <ProgressIndicator 
          currentStep={currentStep}
          totalSteps={totalSteps}
          themeClasses={themeClasses}
        />

        {/* Onboarding Card */}
        <div className={`${themeClasses.cardBg} rounded-3xl shadow-xl border ${themeClasses.border} overflow-hidden transition-all duration-300 backdrop-blur-lg`}>
          <div className="p-8">
            {/* Step Content */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <StepOne 
                  formData={formData} 
                  errors={errors} 
                  themeClasses={themeClasses} 
                  handleInputChange={handleInputChange} 
                />
              )}
              
              {currentStep === 2 && (
                <StepTwo 
                  formData={formData} 
                  errors={errors} 
                  themeClasses={themeClasses} 
                  handleInputChange={handleInputChange} 
                />
              )}
              
              {currentStep === 3 && (
                <StepThree 
                  formData={formData} 
                  themeClasses={themeClasses} 
                  handleInputChange={handleInputChange} 
                />
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <StepNavigation 
              currentStep={currentStep}
              totalSteps={totalSteps}
              handleBack={handleBack}
              handleNext={handleNext}
              handleSubmit={handleSubmit}
              themeClasses={themeClasses}
            />
          </div>
        </div>
      </div>

      {/* Add background noise pattern */}
      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          background-position: 0 0;
          background-size: 200px 200px;
        }
      `}</style>
    </div>
  );
};