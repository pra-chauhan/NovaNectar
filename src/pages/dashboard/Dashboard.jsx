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
    <MainLayout>
      <div className="p-4 md:p-6 space-y-6">
        <DashboardButtonSection />
        <PAORSection />

        {/* Working Hours + Total Employees - Responsive grid */}
        <div className="flex flex-col lg:flex-row gap-4">
          <EmployeeWorkingHours />
          <TotalEmployees />
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
        <EmployeeStatus />
        <EventsMeetings />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
