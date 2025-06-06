import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { FormData, FormErrors, ThemeClasses } from '../../../types';

interface StepOneProps {
  formData: FormData;
  errors: FormErrors;
  themeClasses: ThemeClasses;
  handleInputChange: (field: keyof FormData, value: string) => void;
}

export const StepOne: React.FC<StepOneProps> = ({ 
  formData, 
  errors, 
  themeClasses, 
  handleInputChange 
}) => {
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
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl mb-4 shadow-lg shadow-indigo-500/20 overflow-hidden relative"
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
            className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-700 opacity-80"
            animate={{ 
              background: [
                "linear-gradient(to bottom right, rgba(99, 102, 241, 0.8), rgba(126, 34, 206, 0.8))",
                "linear-gradient(to bottom right, rgba(79, 70, 229, 0.8), rgba(147, 51, 234, 0.8))",
                "linear-gradient(to bottom right, rgba(99, 102, 241, 0.8), rgba(126, 34, 206, 0.8))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <User className="w-10 h-10 text-white relative z-10" />
        </motion.div>
        
        <h2 className={`text-3xl font-bold ${themeClasses.text} mb-2 transition-colors duration-300`}>
          Welcome to the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">experience</span>
        </h2>
        <p className={`${themeClasses.textSecondary} transition-colors duration-300`}>
          Let's start with some basics about you
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-2 transition-colors duration-300`}>
            Full Name
          </label>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl ${themeClasses.input} ${themeClasses.inputFocus} focus:ring-2 focus:border-transparent transition-all duration-300 ${
                errors.name ? 'border-red-300 focus:ring-red-200' : ''
              }`}
              placeholder="Enter your full name"
            />
            <motion.span 
              className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
              animate={{ 
                boxShadow: errors.name 
                  ? '0 0 0 2px rgba(239, 68, 68, 0.2)' 
                  : formData.name 
                    ? '0 0 0 2px rgba(99, 102, 241, 0.2)' 
                    : '0 0 0 0 transparent'
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          {errors.name && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-2 transition-colors duration-300`}>
            Email Address
          </label>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl ${themeClasses.input} ${themeClasses.inputFocus} focus:ring-2 focus:border-transparent transition-all duration-300 ${
                errors.email ? 'border-red-300 focus:ring-red-200' : ''
              }`}
              placeholder="Enter your email address"
            />
            <motion.span 
              className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
              animate={{ 
                boxShadow: errors.email 
                  ? '0 0 0 2px rgba(239, 68, 68, 0.2)' 
                  : formData.email 
                    ? '0 0 0 2px rgba(99, 102, 241, 0.2)' 
                    : '0 0 0 0 transparent'
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          {errors.email && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};