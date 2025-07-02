import React from "react";
import EmployeeWorkingHours from "@/EmployeeWorkingHours";
import TotalEmployees from "@/TotalEmployees";

const WorkingHoursAndEmployees = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-6 py-4 max-w-[1120px] mx-auto">
      <EmployeeWorkingHours />
      <TotalEmployees />
    </div>
  );
};

export default WorkingHoursAndEmployees;