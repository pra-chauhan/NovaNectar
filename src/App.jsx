// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";



// Pages
import EmployeesPage from "./pages/HR & Admin pages/EmployeesPage";
import EmployeeProfile from "./components/Employee/EmployeeProfileHR";
import EmployeeProfileEmployee from "./pages/Employee Page/EmployeeProfileEmployee";
import PerformancePage from "./pages/HR & Admin pages/PerformancePage";
import LoginPage from "./pages/LoginPage";
import Payroll from "./pages/HR & Admin pages/Payroll";
import AttendancePage from "./pages/HR & Admin pages/Attendance";
import Settings from "./pages/HR & Admin pages/Settings";
import Dashboard from "./pages/HR & Admin pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from './context.jsx/ProtectedRout.jsx';
import PublicRoute from './context.jsx/PublicRoute.jsx';
import Unauthorized from './components/Unauthorized.jsx';







function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const hideLayout = ["/", "/login", "/employee/profile"].includes(location.pathname);




  return hideLayout ? (

    <Routes>
      <Route path="/" element={ <PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/employee/profile" element={  <ProtectedRoute allowedRoles={['Employee']}><EmployeeProfileEmployee /></ProtectedRoute>} />
        <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  ) : (

    <MainLayout>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><Dashboard /></ProtectedRoute> } />
        <Route path="/employee" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><EmployeesPage /></ProtectedRoute>} />
        <Route path="/employees/:id" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><EmployeeProfile /></ProtectedRoute>} />
        <Route path="/attendance" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><AttendancePage /></ProtectedRoute>} />
        <Route path="/performance" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><PerformancePage /></ProtectedRoute>} />
        <Route path="/payroll" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><Payroll /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute allowedRoles={['Admin', 'HR']}><Settings /></ProtectedRoute>} />
         <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
