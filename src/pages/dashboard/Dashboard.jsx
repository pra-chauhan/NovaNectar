import React from "react";
import MainLayout from "../../layouts/MainLayout";
import EmployeeWorkingHours from "./EmployeeWorkingHours";
import TotalEmployees from "./TotalEmployees";
import EmployeeStatus from "./EmployeeStatus";
import EventsMeetings from "./EventsMeetings";
import DashboardButtonSection from "./DashboardButtonSection";
import PAORSection from "./PAORSection";

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
