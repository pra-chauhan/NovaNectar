import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
<Route
  path="/"
  element={
    <MainLayout>
      <Dashboard />
    </MainLayout>
  }
/>
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;
