import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import EmployeesPage from "./pages/EmployeesPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Topbar from "./layouts/Topbar";
import EmployeeProfile from "./components/Employee/EmployeeProfile";
import PerformancePage from "./pages/PerformancePage";
// import other pages similarly

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
            <Topbar/>
          <Routes>
            <Route path="/employee" element={<EmployeesPage />} />
            <Route path="/Dashboard" element={<Dashboard/>}/>
       <Route path="/employees/:id" element={<EmployeeProfile />} />
        <Route path="/performance" element={<PerformancePage/>} />
            {/* Add other routes similarly */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
