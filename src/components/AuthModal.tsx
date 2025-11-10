

// ******************************** original *******************************************************
import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Brain } from 'lucide-react';
import HakaseLogo from "../assets/Hakase Logo Color_1750088056790.png";

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'signup';
  onClose: () => void;
  onSwitch: (mode: 'login' | 'signup') => void;
  onSuccess: () => void;
}

// const API_URL = import.meta.env.VITE_API_URL;

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, mode, onClose, onSwitch, onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
    
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     onSuccess();
  //   }, 2000);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const endpoint = mode === "login"
      ? "http://127.0.0.1:8000/login"
      : "http://127.0.0.1:8000/signup";

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // FastAPI sends {"detail": "..."} for errors
        alert(data.detail || "Authentication failed");
      } else {
        alert(data.message || "Success");
        onSuccess();
      }
    } catch (error: any) {
      console.error("Network or other error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-slate-400" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4"> */}
              {/* <Brain className="h-6 w-6 text-blue-600" /> */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <img
                src={HakaseLogo}
                alt="Hakase AI Logo"
                className="h-10 w-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-slate-600">
              {mode === 'login' 
                ? 'Sign in to access your Hakase AI dashboard' 
                : 'Join thousands of researchers using Hakase AI'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 p-1 hover:bg-slate-100 rounded transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-slate-400" />
                ) : (
                  <Eye className="h-4 w-4 text-slate-400" />
                )}
              </button>
            </div>

            {mode === 'signup' && (
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            )}

            {/* <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
                </div>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </button> */}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-miconbrandblue text-white py-3 rounded-lg font-semibold hover:from-sky-500 hover:to-sky-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
                </div>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              {/* <button
                onClick={() => onSwitch(mode === 'login' ? 'signup' : 'login')}
                className="ml-1 text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button> */}
              <button
                onClick={() => onSwitch(mode === 'login' ? 'signup' : 'login')}
                className="ml-1 text-sky-500 font-medium hover:text-sky-600 transition-colors"
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;