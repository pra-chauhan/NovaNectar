import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeProfile from "./components/Employee/EmployeeProfile";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/employees" replace />} />
                <Route path="/employees" element={<EmployeesPage />} />
                <Route path="/employees/:id" element={<EmployeeProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
