import React, { useState } from "react";
import clsx from "clsx";

const employeeData = [
  { name: "Rajesh Kumar", role: "Developer", status: "Active", joiningDate: "2022-01-15" },
  { name: "Anjali Verma", role: "HR Manager", status: "On Leave", joiningDate: "2021-08-12" },
  { name: "Pooja Sharma", role: "Designer", status: "Active", joiningDate: "2023-02-10" },
  { name: "Rohan Gupta", role: "Finance", status: "Inactive", joiningDate: "2020-04-22" },
];

const filters = ["All", "Active", "On Leave", "Inactive"];

const EmployeeStatus = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredEmployees =
    selectedFilter === "All"
      ? employeeData
      : employeeData.filter((emp) => emp.status === selectedFilter);

  return (
    <div className="w-full lg:w-[736px] h-auto lg:h-[357px] border border-[#8D9096] rounded-2xl p-6 flex flex-col gap-6 bg-white shadow">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Employee Status</h2>
        <div className="space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={clsx(
                "px-3 py-1 rounded-full text-sm border",
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

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{emp.name}</td>
                <td className="py-2 px-4">{emp.role}</td>
                <td className="py-2 px-4">{emp.status}</td>
                <td className="py-2 px-4">{emp.joiningDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeStatus;
