import React, { createContext, useContext, useState, useEffect } from 'react';
import { Role, User } from '../mock/types';

interface AuthContextValue {
  user: User | null;
  loginAs: (role: Role, name?: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = 'sciquest_auth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const loginAs = (role: Role, name?: string) => {
    const mockUsers: Record<Role, User> = {
      public: { id: '', name: '', role: 'public' },
      parent: { id: 'parent-1', name: name || 'Parent User', role: 'parent' },
      child: { id: 'child-1', name: name || 'Child User', role: 'child' },
      teacher: { id: 'teacher-1', name: name || 'Teacher User', role: 'teacher' }
    };

    const newUser = mockUsers[role];
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, loginAs, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
