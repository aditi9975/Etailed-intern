import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';
import { FormData, FormErrors, ThemeClasses } from '../../../types';

interface StepTwoProps {
  formData: FormData;
  errors: FormErrors;
  themeClasses: ThemeClasses;
  handleInputChange: (field: keyof FormData, value: string) => void;
}

export const StepTwo: React.FC<StepTwoProps> = ({ 
  formData, 
  errors, 
  themeClasses, 
  handleInputChange 
}) => {
  const companySizes = ['1-10', '11-50', '51-200', '200+'];
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 
    'Retail', 'Manufacturing', 'Other'
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl mb-4 shadow-lg shadow-blue-500/20 overflow-hidden relative"
          initial={{ borderRadius: "12px" }}
          animate={{ 
            borderRadius: ["12px", "30% 70% 70% 30% / 30% 30% 70% 70%", "12px"],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-600 opacity-80"
            animate={{ 
              background: [
                "linear-gradient(to bottom right, rgba(52, 211, 153, 0.8), rgba(37, 99, 235, 0.8))",
                "linear-gradient(to bottom right, rgba(5, 150, 105, 0.8), rgba(59, 130, 246, 0.8))",
                "linear-gradient(to bottom right, rgba(52, 211, 153, 0.8), rgba(37, 99, 235, 0.8))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <Building className="w-10 h-10 text-white relative z-10" />
        </motion.div>
        
        <h2 className={`text-3xl font-bold ${themeClasses.text} mb-2 transition-colors duration-300`}>
          About Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600">Business</span>
        </h2>
        <p className={`${themeClasses.textSecondary} transition-colors duration-300`}>
          Tell us more about your company
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-2 transition-colors duration-300`}>
            Company Name
          </label>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl ${themeClasses.input} ${themeClasses.inputFocus} focus:ring-2 focus:border-transparent transition-all duration-300 ${
                errors.company ? 'border-red-300 focus:ring-red-200' : ''
              }`}
              placeholder="Enter your company name"
            />
            <motion.span 
              className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
              animate={{ 
                boxShadow: errors.company 
                  ? '0 0 0 2px rgba(239, 68, 68, 0.2)' 
                  : formData.company 
                    ? '0 0 0 2px rgba(16, 185, 129, 0.2)' 
                    : '0 0 0 0 transparent'
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          {errors.company && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.company}
            </motion.p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-2 transition-colors duration-300`}>
            Industry
          </label>
          <div className="relative">
            <motion.select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl appearance-none ${themeClasses.input} ${themeClasses.inputFocus} focus:ring-2 focus:border-transparent transition-all duration-300 ${
                errors.industry ? 'border-red-300 focus:ring-red-200' : ''
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <option value="">Select your industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </motion.select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <motion.span 
              className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
              animate={{ 
                boxShadow: errors.industry 
                  ? '0 0 0 2px rgba(239, 68, 68, 0.2)' 
                  : formData.industry 
                    ? '0 0 0 2px rgba(16, 185, 129, 0.2)' 
                    : '0 0 0 0 transparent'
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
          {errors.industry && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.industry}
            </motion.p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-3 transition-colors duration-300`}>
            Company Size
          </label>
          <div className="grid grid-cols-2 gap-3">
            {companySizes.map((size) => (
              <motion.button
                key={size}
                type="button"
                onClick={() => handleInputChange('size', size)}
                className={`group p-3 border rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden relative ${
                  formData.size === size
                    ? 'border-emerald-400 text-emerald-700'
                    : `border ${themeClasses.border} ${themeClasses.text} hover:${themeClasses.borderHover}`
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-emerald-400/10 opacity-0"
                  animate={{ 
                    opacity: formData.size === size ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.span 
                  className="relative z-10"
                  animate={{ 
                    color: formData.size === size 
                      ? '#047857' // emerald-800
                      : themeClasses.text === 'text-white' ? '#ffffff' : '#111827' // white or gray-900
                  }}
                >
                  {size} employees
                </motion.span>
              </motion.button>
            ))}
          </div>
          {errors.size && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.size}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};