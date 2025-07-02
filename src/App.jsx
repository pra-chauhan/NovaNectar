// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layouts
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

// Pages
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeProfile from "./components/Employee/EmployeeProfileHR";
import PerformancePage from "./pages/PerformancePage";
import LoginPage from "./pages/LoginPage";
import Payroll from "./pages/Payroll";
import AttendancePage from "./pages/Attendance";
import EmployeeProfileEmployee from "./components/Employee/EmployeeProfileEmployee";
// Wrapper to handle conditional layout
function AppContent() {
  const location = useLocation();
  
  // Define routes where you do not want Sidebar and Topbar
  const hideLayoutRoutes = ["/login", "/"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {!hideLayout && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {!hideLayout && <Topbar />}
        <div className="flex-1">
          <Routes>
            <Route path="/employee/profile/:id" element={<EmployeeProfileEmployee />} />

            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/employee" element={<EmployeesPage />} />
            <Route path="/employees/:id" element={<EmployeeProfile />} />
            <Route path="/performance" element={<PerformancePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
