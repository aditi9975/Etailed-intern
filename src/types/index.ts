// Form data type definition
export interface FormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  size: string;
  theme: string;
  layout: string;
  isCompleted?: boolean;
}

// Form errors type definition
export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  size?: string;
}

// Chart data type definition
export interface ChartDataPoint {
  day: string;
  progress: number;
}

// Theme class definitions
export interface ThemeClasses {
  background: string;
  headerBg: string;
  cardBg: string;
  cardHover: string;
  text: string;
  textSecondary: string;
  border: string;
  borderHover: string;
  input: string;
  inputFocus: string;
  buttonSecondary: string;
  progressBg: string;
  gradientStyle: string;
  buttonStyle: string;
}

// Stat card type definition
export interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  emoji: string;
  gradient: string;
  iconBg: string;
}