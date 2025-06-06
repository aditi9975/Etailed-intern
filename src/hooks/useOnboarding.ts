import { useState, useEffect } from 'react';
import { FormData, FormErrors } from '../types';

export const useOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    size: '',
    theme: 'modern',
    layout: 'cards'
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Check if user has already completed onboarding
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    if (userData.isCompleted) {
      setIsCompleted(true);
      setFormData(userData);
    }
  }, []);

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
        return '';
      
      case 'company':
        if (!value.trim()) return 'Company name is required';
        if (value.trim().length < 2) return 'Company name must be at least 2 characters';
        return '';
      
      case 'industry':
        if (!value) return 'Please select an industry';
        return '';
      
      case 'size':
        if (!value) return 'Please select company size';
        return '';
      
      default:
        return '';
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    const error = validateField(field, value);
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      const nameError = validateField('name', formData.name);
      const emailError = validateField('email', formData.email);
      
      if (nameError) newErrors.name = nameError;
      if (emailError) newErrors.email = emailError;
    } else if (step === 2) {
      const companyError = validateField('company', formData.company);
      const industryError = validateField('industry', formData.industry);
      const sizeError = validateField('size', formData.size);
      
      if (companyError) newErrors.company = companyError;
      if (industryError) newErrors.industry = industryError;
      if (sizeError) newErrors.size = sizeError;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      const userData = { ...formData, isCompleted: true };
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsCompleted(true);
    }
  };

  const resetOnboarding = () => {
    localStorage.removeItem('userData');
    setIsCompleted(false);
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      company: '',
      industry: '',
      size: '',
      theme: 'modern',
      layout: 'cards'
    });
    setErrors({});
  };

  return {
    currentStep,
    isCompleted,
    formData,
    errors,
    handleInputChange,
    handleNext,
    handleBack,
    handleSubmit,
    resetOnboarding,
    totalSteps: 3
  };
};