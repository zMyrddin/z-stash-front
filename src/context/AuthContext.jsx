import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || null);

  const login = useCallback((jwt, user) => {
    setJwt(jwt);
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    setJwt(null);
    setUser(null);
    localStorage.removeItem('jwt');
  }, []);

  return (
    <AuthContext.Provider value={{ user, jwt, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
