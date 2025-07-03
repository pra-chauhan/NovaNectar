import React from "react";
import MainLayout from "../layouts/MainLayout";
import EmployeeWorkingHours from "../components/DashboardComponents/EmployeeWorkingHours";
import TotalEmployees from "../components/DashboardComponents/TotalEmployees";
import EmployeeStatus from "../components/DashboardComponents/EmployeeStatus";
import EventsMeetings from "../components/DashboardComponents/EventsMeetings";
import DashboardButtonSection from "../components/DashboardComponents/DashboardButtonSection";
import PAORSection from "../components/DashboardComponents/PAORSection";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <DashboardButtonSection />
      <PAORSection />
      <div className="flex flex-col lg:flex-row gap-4">
        <EmployeeWorkingHours />
        <TotalEmployees />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <EmployeeStatus />
        <EventsMeetings />
      </div>
    </div>
  );
};

export default Dashboard;
