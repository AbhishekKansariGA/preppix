
'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    username: string;
    mobile: string;
    password?: string; // Optional for security reasons, don't want to expose it everywhere
    dob?: string;
    preparingExam?: string;
    qualifications?: string;
    category?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isAuthInitialized: boolean;
  isProfileComplete: boolean;
  user: User | null;
  login: (username: string, password: string, mobile: string, preparingExam: string) => void;
  logout: () => void;
  updateUser: (data: Partial<Omit<User, 'username' | 'mobile'>>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const router = useRouter();

  const checkAuth = useCallback(() => {
    try {
      const storedUser = localStorage.getItem('examPrepUser');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        // Check if profile is complete
        if (parsedUser.dob && parsedUser.qualifications && parsedUser.category) {
            setIsProfileComplete(true);
        } else {
            setIsProfileComplete(false);
        }
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    } finally {
        setIsAuthInitialized(true);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = (username: string, password: string, mobile: string, preparingExam: string) => {
    const userData: User = { username, password, mobile, preparingExam };
    localStorage.setItem('examPrepUser', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    setIsProfileComplete(false); // New user profile is incomplete
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('examPrepUser');
    setUser(null);
    setIsAuthenticated(false);
    setIsProfileComplete(false);
    router.push('/login');
  };

  const updateUser = (data: Partial<Omit<User, 'username' | 'mobile'>>) => {
    if (user) {
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        localStorage.setItem('examPrepUser', JSON.stringify(updatedUser));
        // Re-check profile completeness
        if (updatedUser.dob && updatedUser.qualifications && updatedUser.category) {
            setIsProfileComplete(true);
        }
    }
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isAuthInitialized, updateUser, isProfileComplete }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
