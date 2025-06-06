import { useState, useEffect } from 'react';
import { ThemeClasses } from '../types';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeStyle, setThemeStyle] = useState<'modern' | 'classic' | 'minimal'>('modern');

  // Check for saved theme preferences
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode') === 'true';
    const savedThemeStyle = localStorage.getItem('themeStyle') as 'modern' | 'classic' | 'minimal' || 'modern';
    
    setIsDarkMode(savedDarkMode);
    setThemeStyle(savedThemeStyle);
  }, []);

  // Save theme preferences to localStorage
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode.toString());
    localStorage.setItem('themeStyle', themeStyle);
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode, themeStyle]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const updateThemeStyle = (style: 'modern' | 'classic' | 'minimal') => {
    setThemeStyle(style);
  };

  // Theme-specific styles
  const getThemeSpecificStyles = () => {
    switch (themeStyle) {
      case 'modern':
        return {
          cardBg: isDarkMode ? 'bg-gray-800/90' : 'bg-white/90',
          cardHover: isDarkMode ? 'hover:bg-gray-700/90' : 'hover:shadow-xl hover:shadow-indigo-100/50',
          inputStyle: 'rounded-xl',
          buttonStyle: 'rounded-xl',
          gradientStyle: 'bg-gradient-to-r from-indigo-500 to-purple-600'
        };
      
      case 'classic':
        return {
          cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
          cardHover: isDarkMode ? 'hover:bg-gray-700' : 'hover:shadow-md',
          inputStyle: 'rounded-lg',
          buttonStyle: 'rounded-lg',
          gradientStyle: 'bg-gradient-to-r from-blue-600 to-blue-800'
        };
      
      case 'minimal':
        return {
          cardBg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
          cardHover: isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white',
          inputStyle: 'rounded',
          buttonStyle: 'rounded',
          gradientStyle: 'bg-gradient-to-r from-gray-800 to-gray-900'
        };
      
      default:
        return {
          cardBg: isDarkMode ? 'bg-gray-800/90' : 'bg-white/90',
          cardHover: isDarkMode ? 'hover:bg-gray-700/90' : 'hover:shadow-xl',
          inputStyle: 'rounded-xl',
          buttonStyle: 'rounded-xl',
          gradientStyle: 'bg-gradient-to-r from-indigo-500 to-purple-600'
        };
    }
  };

  const themeSpecific = getThemeSpecificStyles();

  // Theme classes
  const themeClasses: ThemeClasses = {
    background: isDarkMode 
      ? 'bg-[#0E1117] bg-noise-pattern' 
      : themeStyle === 'minimal'
        ? 'bg-gray-100 bg-noise-pattern'
        : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50 bg-noise-pattern',
    headerBg: isDarkMode 
      ? 'bg-gray-800/80 backdrop-blur-lg border-gray-700' 
      : 'bg-white/80 backdrop-blur-lg border-gray-200',
    cardBg: themeSpecific.cardBg,
    cardHover: themeSpecific.cardHover,
    text: isDarkMode 
      ? 'text-white' 
      : 'text-gray-900',
    textSecondary: isDarkMode 
      ? 'text-gray-300' 
      : 'text-gray-600',
    border: isDarkMode 
      ? 'border-gray-700' 
      : themeStyle === 'minimal'
        ? 'border-gray-200'
        : 'border-gray-100',
    borderHover: isDarkMode 
      ? 'border-gray-600' 
      : 'border-gray-400',
    input: `${themeSpecific.inputStyle} ${
      isDarkMode 
        ? 'bg-gray-700/70 border-gray-600 text-white placeholder-gray-400' 
        : 'bg-white/70 border-gray-300 text-gray-900 placeholder-gray-500'
    }`,
    inputFocus: isDarkMode 
      ? 'focus:ring-indigo-400 focus:border-indigo-400' 
      : 'focus:ring-indigo-500 focus:border-indigo-500',
    buttonSecondary: isDarkMode 
      ? 'text-gray-300 hover:bg-gray-700/50' 
      : 'text-gray-600 hover:bg-gray-50/80',
    progressBg: isDarkMode 
      ? 'bg-gray-700/50' 
      : 'bg-gray-200/70',
    gradientStyle: themeSpecific.gradientStyle,
    buttonStyle: themeSpecific.buttonStyle
  };

  return { 
    isDarkMode, 
    toggleTheme, 
    themeClasses,
    themeStyle,
    updateThemeStyle
  };
};