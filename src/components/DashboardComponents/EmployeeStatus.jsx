import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const EmployeeStatusCard = () => {
  const navigate = useNavigate();
  const filters = ["All", "Active", "On Leave", "Inactive"];
  const [selectedFilter, setSelectedFilter] = useState("All");

  const employees = [
    { id: "EMP001", name: "John Doe", role: "Software Engineer", status: "Active", attendance: "Present" },
    { id: "EMP002", name: "Jane Smith", role: "Product Manager", status: "On Leave", attendance: "N/A" },
    { id: "EMP003", name: "Rahul Kumar", role: "UI Designer", status: "Inactive", attendance: "Absent" },
    { id: "EMP004", name: "Sneha Sharma", role: "HR Executive", status: "Active", attendance: "Remote" },
  ];

  const filteredEmployees =
    selectedFilter === "All"
      ? employees
      : employees.filter((emp) => emp.status === selectedFilter);

  return (
    <div className="w-full rounded-2xl border border-gray-300 bg-white p-4 shadow-sm flex flex-col gap-6">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Employee Status</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={clsx(
                "px-3 py-1 rounded-full text-sm border transition-all duration-200",
                selectedFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Job Role</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Attendance</th>
              <th className="py-2 px-4 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4 text-blue-600 underline cursor-pointer">
                  {emp.id}
                </td>
                <td className="py-2 px-4">{emp.name}</td>
                <td className="py-2 px-4">{emp.role}</td>
                <td className="py-2 px-4">
                  <span
                    className={clsx(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : emp.status === "On Leave"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-700"
                    )}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="py-2 px-4">{emp.attendance}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => navigate(`/employee/${emp.id}`)}
                    className="text-gray-700 hover:text-black"
                    title="View Employee"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* More Info Button */}
      <div className="border-t pt-4 text-center">
        <button
          onClick={() => navigate("/employee")}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default EmployeeStatusCard;