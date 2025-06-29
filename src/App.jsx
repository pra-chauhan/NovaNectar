// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EmployeesPage from './pages/EmployeesPage';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /dashboard */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/employee"
          element={
            <MainLayout>
              <EmployeesPage />
            </MainLayout>
          }
        />

        {/* Optional: 404 Page */}
        <Route
          path="*"
          element={
            <MainLayout>
              <div className="text-center text-red-500 text-xl p-10">404 - Page Not Found</div>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
