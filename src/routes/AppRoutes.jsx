import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;
