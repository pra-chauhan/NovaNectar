import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context.jsx/AuthContext';

export default function PublicRoute({ children }) {
  const { user } = useAuth();

  if (user?.role === "Employee") return <Navigate to="/employee/profile" replace />;
  if (user?.role === "Admin" || user?.role === "HR") return <Navigate to="/dashboard" replace />;

  return children;

}