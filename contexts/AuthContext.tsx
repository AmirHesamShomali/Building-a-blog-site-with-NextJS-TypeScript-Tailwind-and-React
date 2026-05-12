'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { UserInfo } from '@/types/auth';
import { getUserInfoService } from '@/services/auth';

interface AuthContextType {
  user: UserInfo | null;
  isLoading: boolean;
  login: (token: string, user: UserInfo) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (token: string, userData: UserInfo) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    
    // ذخیره توکن در cookie برای middleware
    document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 روز
    
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // پاک کردن cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    
    setUser(null);
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoading(false);
        return;
      }

      // بررسی اعتبار توکن با سرور
      const userData = await getUserInfoService();
      setUser(userData);
    } catch {
      // در صورت خطا، توکن را پاک کنیم
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, checkAuth }}>
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