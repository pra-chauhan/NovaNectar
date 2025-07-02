
import React from "react";
import { useParams } from "react-router-dom";

export default function EmployeeProfileEmployee() {
  const { id } = useParams();

  // Fetch employee data here if needed, or pass as props
  const employee = {
    fullName: "Rishubh Rawat",
    position: "UI/UX Designer",
    department: "Design",
    email: "rr889985@gmail.com",
    contact: "7896513233",
    joiningDate: "April 10th, 2025",
    emergencyContact: "7896513233",
    currentAddress: "Balupur chowk, Dehradun, Uttarakhand-249201",
    permanentAddress: "Khand Gaon, Near Bhandari Palace, Rishikesh, Uttarakhand-249201",
    employeeId: "2443",
  };

  return (
    <div className="p-4 md:p-6 space-y-4 bg-gray-50 min-h-screen">
      <GreetingBanner name={employee.fullName} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: Profile */}
        <div className="md:col-span-1">
          <ProfileCard employee={employee} />
        </div>

        {/* Middle: Attendance and Salary */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <AttendanceSummary employeeId={id} />
          <SalaryInformationCard employeeId={id} />
        </div>

        {/* Right: Leave balance and Meetings */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <LeaveBalanceCard employeeId={id} />
          <UpcomingMeetingsCard employeeId={id} />
        </div>
      </div>

      {/* Documents Table */}
      <EmployeeDocumentsTable employeeId={id} />
    </div>
  );
}
