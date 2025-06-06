import React from 'react';
import { motion } from 'framer-motion';
import { FormData, ThemeClasses } from '../../types';

interface ProfileCardProps {
  formData: FormData;
  themeClasses: ThemeClasses;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  formData, 
  themeClasses 
}) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"
        animate={{ 
          background: [
            "linear-gradient(to right, rgba(99, 102, 241, 0.9), rgba(126, 34, 206, 0.9))",
            "linear-gradient(to right, rgba(79, 70, 229, 0.9), rgba(147, 51, 234, 0.9))",
            "linear-gradient(to right, rgba(99, 102, 241, 0.9), rgba(126, 34, 206, 0.9))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-white opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-white opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="relative z-10 p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-2xl font-bold">
              {formData.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Your Profile</h2>
            <p className="text-white/70 text-sm">User details & preferences</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-6 text-sm">
          <motion.div 
            className="hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <p className="opacity-70 mb-1">Email</p>
            <p className="font-medium">{formData.email}</p>
          </motion.div>
          
          <motion.div 
            className="hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <p className="opacity-70 mb-1">Industry</p>
            <p className="font-medium">{formData.industry}</p>
          </motion.div>
          
          <motion.div 
            className="hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <p className="opacity-70 mb-1">Company Size</p>
            <p className="font-medium">{formData.size} employees</p>
          </motion.div>
          
          <motion.div 
            className="hover:bg-white/10 p-3 rounded-lg transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <p className="opacity-70 mb-1">Theme Preference</p>
            <p className="font-medium capitalize">{formData.theme}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};