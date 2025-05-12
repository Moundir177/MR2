'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  wishlist: number[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addToWishlist: (courseId: number) => void;
  removeFromWishlist: (courseId: number) => void;
  isInWishlist: (courseId: number) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would check session/token validity here
    const checkAuth = async () => {
      // For demo purposes, we'll simulate a login check with localStorage
      const savedUser = localStorage.getItem('mira_user');
      const savedWishlist = localStorage.getItem('mira_wishlist');
      
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('mira_wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // In a real app, you would make an API call here
      // This is a mock implementation for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful login for a test user
      if (email === 'student@miraacademy.com' && password === 'password') {
        const userData: User = {
          id: '1',
          name: 'Sarah Johnson',
          email: 'student@miraacademy.com',
          role: 'student'
        };
        
        setUser(userData);
        localStorage.setItem('mira_user', JSON.stringify(userData));
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mira_user');
    // We keep the wishlist even when logged out
  };

  const addToWishlist = (courseId: number) => {
    if (!wishlist.includes(courseId)) {
      setWishlist([...wishlist, courseId]);
    }
  };

  const removeFromWishlist = (courseId: number) => {
    setWishlist(wishlist.filter(id => id !== courseId));
  };

  const isInWishlist = (courseId: number) => {
    return wishlist.includes(courseId);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    wishlist,
    login,
    logout,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 