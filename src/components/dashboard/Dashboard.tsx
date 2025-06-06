import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, FolderOpen, Bell, TrendingUp } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { StatCard } from './StatCard';
import { ProgressChart } from './ProgressChart';
import { ProfileCard } from './ProfileCard';
import { FormData, ThemeClasses, ChartDataPoint } from '../../types';


interface DashboardProps {
  formData: FormData;
  isDarkMode: boolean;
  toggleTheme: () => void;
  themeClasses: ThemeClasses;
 
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  formData, 
  isDarkMode, 
  toggleTheme, 
  themeClasses,
  
}) => {
  // Mock data for the chart
  const chartData: ChartDataPoint[] = [
    { day: 'Mon', progress: 20 },
    { day: 'Tue', progress: 45 },
    { day: 'Wed', progress: 30 },
    { day: 'Thu', progress: 70 },
    { day: 'Fri', progress: 85 },
    { day: 'Sat', progress: 60 },
    { day: 'Sun', progress: 90 }
  ];

  // Stats data
  const stats = [
    {
      title: "Team Members",
      value: 24,
      subtitle: "+3 this month",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      emoji: "👥",
      gradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
      iconBg: isDarkMode ? "bg-blue-500/20" : "bg-blue-500/10"
    },
    {
      title: "Active Projects",
      value: 12,
      subtitle: "8 in progress",
      icon: <FolderOpen className="w-6 h-6 text-green-600" />,
      emoji: "📊",
      gradient: "bg-gradient-to-br from-green-500/20 to-green-600/20",
      iconBg: isDarkMode ? "bg-green-500/20" : "bg-green-500/10"
    },
    {
      title: "Notifications",
      value: 7,
      subtitle: "2 urgent",
      icon: <Bell className="w-6 h-6 text-purple-600" />,
      emoji: "🔔",
      gradient: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
      iconBg: isDarkMode ? "bg-purple-500/20" : "bg-purple-500/10"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses.background}`}>
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Header */}
      <header className={`${themeClasses.headerBg} border-b sticky top-0 z-10 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300">
                Welcome back, {formData.name}!
              </h1>
              <p className={`${themeClasses.textSecondary} mt-1 transition-colors duration-300`}>
                {formData.company} Dashboard
              </p>
            </motion.div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              
              
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnimatePresence>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <StatCard 
                  {...stat}
                  themeClasses={themeClasses}
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Chart Section */}
        <ProgressChart 
          data={chartData} 
          themeClasses={themeClasses}
          isDarkMode={isDarkMode}
        />

        {/* User Info Card */}
        <ProfileCard 
          formData={formData}
          themeClasses={themeClasses}
        />
      </main>
    </div>
  );
};