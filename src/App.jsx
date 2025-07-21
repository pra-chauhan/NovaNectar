// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layouts
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

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

function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout = ["/", "/login", "/employee/profile"].includes(location.pathname);

  return hideLayout ? (
    children
  ) : (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/employee/profile" element={<EmployeeProfileEmployee />} />
          <Route path="/employee" element={<EmployeesPage />} />
          <Route path="/employees/:id" element={<EmployeeProfile />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path ="/settings" element={<Settings />} />
          <Route path ="/dashboard" element={<Dashboard />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
