import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { ChartDataPoint, ThemeClasses } from '../../types';

interface ProgressChartProps {
  data: ChartDataPoint[];
  themeClasses: ThemeClasses;
  isDarkMode: boolean;
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ 
  data, 
  themeClasses,
  isDarkMode
}) => {
  return (
    <motion.div 
      className={`${themeClasses.cardBg} rounded-2xl p-6 shadow-sm border ${themeClasses.border} mb-8 transition-all duration-300 relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? 'bg-indigo-500' : 'bg-indigo-300'
          }`}
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div 
              className={`p-2 ${
                isDarkMode 
                  ? 'bg-indigo-500/20' 
                  : 'bg-indigo-500/10'
              } rounded-lg transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </motion.div>
            <h2 className={`text-xl font-semibold ${themeClasses.text} transition-colors duration-300`}>
              Weekly Progress
            </h2>
          </div>
          
          <motion.div 
            className="flex items-center gap-2 text-sm text-indigo-600"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded-md">
              +28% growth
            </span>
          </motion.div>
        </div>
        
        <div className="h-64 relative">
          {/* Decorative grid lines */}
          <div className="absolute inset-0 grid grid-cols-7 gap-0 pointer-events-none">
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={i} 
                className={`border-r ${themeClasses.border} last:border-r-0 transition-colors duration-300`}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 grid grid-rows-4 gap-0 pointer-events-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <div 
                key={i} 
                className={`border-t ${themeClasses.border} last:border-t-0 transition-colors duration-300`}
              />
            ))}
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: isDarkMode ? '#9CA3AF' : '#6B7280' }}
              />
              <YAxis hide />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#6366f1" floodOpacity="0.3" />
                </filter>
              </defs>
              <Line 
                type="monotone" 
                dataKey="progress" 
                stroke="url(#gradient)" 
                strokeWidth={4}
                dot={{ 
                  fill: '#6366f1', 
                  strokeWidth: 2, 
                  r: 6,
                  filter: 'url(#shadow)'
                }}
                activeDot={{ 
                  r: 8, 
                  fill: '#8b5cf6',
                  stroke: '#6366f1', 
                  strokeWidth: 2 
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};