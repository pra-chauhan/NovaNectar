// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layouts
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

// Pages
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeProfile from "./components/Employee/EmployeeProfileHR";
import EmployeeProfileEmployee from "./pages/EmployeeProfileEmployee";
import PerformancePage from "./pages/PerformancePage";
import LoginPage from "./pages/LoginPage";
import Payroll from "./pages/Payroll";
import AttendancePage from "./pages/Attendance";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
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
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
