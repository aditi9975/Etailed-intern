import React from 'react';
import { motion } from 'framer-motion';
import { StatCardProps, ThemeClasses } from '../../types';

interface Props extends StatCardProps {
  themeClasses: ThemeClasses;
  isDarkMode: boolean;
}

export const StatCard: React.FC<Props> = ({ 
  title, 
  value, 
  subtitle,
  icon, 
  emoji, 
  gradient, 
  iconBg,
  themeClasses,
  isDarkMode
}) => {
  return (
    <motion.div 
      className={`group relative overflow-hidden ${themeClasses.cardBg} rounded-2xl p-6 shadow-sm border ${themeClasses.border} ${themeClasses.cardHover} transition-all duration-300`}
      whileHover={{ 
        y: -8,
        boxShadow: isDarkMode 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
          : '0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 10px 10px -5px rgba(99, 102, 241, 0.1)'
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className={`absolute top-0 right-0 w-40 h-40 ${gradient} rounded-full -mr-10 -mt-10 opacity-20 transition-all duration-500`}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.15, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <motion.div 
            className={`p-3 ${iconBg} rounded-xl transition-all duration-300`}
            whileHover={{ 
              y: -3,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {icon}
          </motion.div>
          
          <motion.span 
            className="text-2xl"
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotateY: { duration: 6, repeat: Infinity, repeatDelay: 8 },
              scale: { duration: 0.5, repeat: Infinity, repeatDelay: 10 }
            }}
          >
            {emoji}
          </motion.span>
        </div>
        
        <h3 className={`${themeClasses.textSecondary} text-sm font-medium mb-1 transition-colors duration-300`}>
          {title}
        </h3>
        
        <p className={`text-3xl font-bold ${themeClasses.text} transition-colors duration-300`}>
          {value}
        </p>
        
        <p className="text-green-600 dark:text-green-400 text-sm mt-2 font-medium">
          {subtitle}
        </p>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
        style={{ width: '30%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};