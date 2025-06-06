import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { FormData, ThemeClasses } from '../../../types';

interface StepThreeProps {
  formData: FormData;
  themeClasses: ThemeClasses;
  handleInputChange: (field: keyof FormData, value: string) => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ 
  formData, 
  themeClasses, 
  handleInputChange 
}) => {
  const themes = [
    { value: 'modern', label: 'Modern', emoji: '🎨', description: 'Clean & bold design' },
    { value: 'classic', label: 'Classic', emoji: '📚', description: 'Timeless aesthetics' },
    { value: 'minimal', label: 'Minimal', emoji: '✨', description: 'Simple & focused' }
  ];

  const layouts = [
    { value: 'cards', label: 'Card Layout', emoji: '📊', description: 'Visual block design' },
    { value: 'list', label: 'List Layout', emoji: '📋', description: 'Compact information' }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl mb-4 shadow-lg shadow-purple-500/20 overflow-hidden relative"
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
            className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-80"
            animate={{ 
              background: [
                "linear-gradient(to bottom right, rgba(168, 85, 247, 0.8), rgba(219, 39, 119, 0.8))",
                "linear-gradient(to bottom right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))",
                "linear-gradient(to bottom right, rgba(168, 85, 247, 0.8), rgba(219, 39, 119, 0.8))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <Palette className="w-10 h-10 text-white relative z-10" />
        </motion.div>
        
        <h2 className={`text-3xl font-bold ${themeClasses.text} mb-2 transition-colors duration-300`}>
          Style Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">Experience</span>
        </h2>
        <p className={`${themeClasses.textSecondary} transition-colors duration-300`}>
          Customize how your dashboard looks and feels
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-3 transition-colors duration-300`}>
            Theme Preference
          </label>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {themes.map((theme) => (
              <motion.button
                key={theme.value}
                type="button"
                onClick={() => handleInputChange('theme', theme.value)}
                className={`group p-5 border rounded-xl text-center transition-all duration-300 relative overflow-hidden ${
                  formData.theme === theme.value
                    ? 'border-purple-400 shadow-lg'
                    : `border ${themeClasses.border} hover:${themeClasses.borderHover}`
                }`}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.97 }}
                variants={item}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    opacity: formData.theme === theme.value ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    className="text-4xl mb-2"
                    animate={{ 
                      scale: formData.theme === theme.value ? 1.2 : 1,
                      y: formData.theme === theme.value ? -5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {theme.emoji}
                  </motion.div>
                  
                  <motion.div 
                    className={`text-sm font-medium ${themeClasses.text} transition-colors duration-300 mb-1`}
                    animate={{ 
                      color: formData.theme === theme.value 
                        ? '#8b5cf6' // purple-500
                        : themeClasses.text === 'text-white' ? '#ffffff' : '#111827' // white or gray-900
                    }}
                  >
                    {theme.label}
                  </motion.div>
                  
                  <motion.div 
                    className={`text-xs ${themeClasses.textSecondary}`}
                  >
                    {theme.description}
                  </motion.div>
                </div>
                
                {formData.theme === theme.value && (
                  <motion.div 
                    className="absolute top-2 right-2 w-4 h-4 bg-purple-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div>
          <label className={`block text-sm font-medium ${themeClasses.text} mb-3 transition-colors duration-300`}>
            Default Dashboard Layout
          </label>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {layouts.map((layout) => (
              <motion.button
                key={layout.value}
                type="button"
                onClick={() => handleInputChange('layout', layout.value)}
                className={`group p-5 border rounded-xl text-center transition-all duration-300 relative overflow-hidden ${
                  formData.layout === layout.value
                    ? 'border-pink-400 shadow-lg'
                    : `border ${themeClasses.border} hover:${themeClasses.borderHover}`
                }`}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.97 }}
                variants={item}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    opacity: formData.layout === layout.value ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    className="text-4xl mb-2"
                    animate={{ 
                      scale: formData.layout === layout.value ? 1.2 : 1,
                      y: formData.layout === layout.value ? -5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {layout.emoji}
                  </motion.div>
                  
                  <motion.div 
                    className={`text-sm font-medium ${themeClasses.text} transition-colors duration-300 mb-1`}
                    animate={{ 
                      color: formData.layout === layout.value 
                        ? '#ec4899' // pink-500
                        : themeClasses.text === 'text-white' ? '#ffffff' : '#111827' // white or gray-900
                    }}
                  >
                    {layout.label}
                  </motion.div>
                  
                  <motion.div 
                    className={`text-xs ${themeClasses.textSecondary}`}
                  >
                    {layout.description}
                  </motion.div>
                </div>
                
                {formData.layout === layout.value && (
                  <motion.div 
                    className="absolute top-2 right-2 w-4 h-4 bg-pink-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};