import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-xl transition-all duration-300 overflow-hidden ${
        isDarkMode 
          ? 'bg-gray-700/70 hover:bg-gray-600/70 text-yellow-400' 
          : 'bg-white/80 hover:bg-gray-100/80 text-indigo-600'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: isDarkMode 
            ? 'radial-gradient(circle at center, rgba(253, 224, 71, 0.3) 0%, rgba(0, 0, 0, 0) 70%)' 
            : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, rgba(0, 0, 0, 0) 70%)' 
        }}
        transition={{ duration: 0.8 }}
      />
      
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDarkMode ? 0 : 180,
          opacity: isDarkMode ? 1 : 0,
          scale: isDarkMode ? 1 : 0.5,
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%'
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Moon className="w-5 h-5" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDarkMode ? -180 : 0,
          opacity: isDarkMode ? 0 : 1,
          scale: isDarkMode ? 0.5 : 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%'
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Sun className="w-5 h-5" />
      </motion.div>
      
      <div className="w-5 h-5 opacity-0">
        {/* Placeholder to maintain button size */}
      </div>
    </motion.button>
  );
};