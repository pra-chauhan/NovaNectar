import React, { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import { getAccessToken, setAccessToken, setCurrentRole } from "./tokenService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      const role = localStorage.getItem("role");
      if (!role) {
        setLoading(false);
        return;
      }
      try {
        const res = await api.get(`/${role.toLowerCase()}/refresh`,);
        const { accessToken, user } = res.data;
        setAccessToken(accessToken);
        setCurrentRole(user.role);
        setUser(user);
      } catch {
        setAccessToken(null);
        setCurrentRole(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [getAccessToken(null)]);



  const clearAuthState = () => {
    setAccessToken(null);
    setCurrentRole(null);
    setUser(null);
    localStorage.removeItem("role");
  };

  const login = async (email, password, role) => {
    const roles = role.toLowerCase();
    const res = await api.post(`/${roles}/login`, { email, password, role });
    const { accessToken, user } = res.data;
    
   
    const userRole = user.role || user.user.role;
     const normalizedUser = user.user ? { ...user, ...user.user } : user;

    setAccessToken(accessToken);
    setCurrentRole(userRole);
    setUser(normalizedUser);
    localStorage.setItem("role", userRole);
  };

  const logout = async () => {
    const role = user?.role?.toLowerCase();
    if (role) {
      try {
        await api.post(`/${role}/logout`);
      } catch (err) {
        console.warn("Logout failed:", err);
      }
    }

    clearAuthState();
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading,   }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
