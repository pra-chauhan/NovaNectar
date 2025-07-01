// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

// Pages
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeProfile from "./components/Employee/EmployeeProfile";
import PerformancePage from "./pages/PerformancePage";
import LoginPage from "./pages/LoginPage";
import Payroll from "./pages/Payroll"; 

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <Routes>
            <Route path="/employee" element={<EmployeesPage />} />
            <Route path="/employees/:id" element={<EmployeeProfile />} />
            <Route path="/performance" element={<PerformancePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/payroll" element={<Payroll />} /> 
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
