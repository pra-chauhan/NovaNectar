import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Network,
  Calendar,
  EllipsisVertical
} from "lucide-react";

const EmployeeTable = ({ employees }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Manage Employees");

  const tabs = [
    { label: "Manage Employees", icon: <Users size={16} /> },
    { label: "Department", icon: <Network size={16} /> },
    { label: "Birthday/ Anniversary", icon: <Calendar size={16} /> }
  ];

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow w-full">
      {/* Tabs + Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-4">
        {/* Tabs with Icons */}
        <div className="flex flex-wrap gap-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-1 text-sm font-medium ${
                activeTab === tab.label
                  ? "text-[#7B61FF] underline underline-offset-4"
                  : "text-gray-600 hover:text-[#7B61FF]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Keywords...."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm w-full md:w-64 focus:ring-1 focus:ring-[#7B61FF] outline-none"
          />
          <button className="border border-gray-300 rounded-md px-3 py-1 text-sm hover:bg-gray-100 transition">
            Filter
          </button>
        </div>
      </div>

      {/* Section Heading */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Managing Employee</h2>

      {/* Table for Manage Employees */}
      {activeTab === "Manage Employees" ? (
        <>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left font-medium">
                    <input type="checkbox" className="mr-2" />
                    ID
                  </th>
                  <th className="p-3 text-left font-medium">Name</th>
                  <th className="p-3 text-left font-medium">Contact Number</th>
                  <th className="p-3 text-left font-medium">Job Role</th>
                  <th className="p-3 text-left font-medium">Attendance</th>
                  <th className="p-3 text-left font-medium">Type</th>
                  <th className="p-3 text-left font-medium">Status</th>
                  <th className="p-3 text-right font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-3 text-[#7B61FF] underline whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            navigate(`/employees/${emp.id}`, {
                              state: { employee: emp }
                            })
                          }
                        >
                          {emp.id}
                        </span>
                      </div>
                    </td>
<td className="p-3 whitespace-nowrap">{emp.fullName || emp.name || "-"}</td>
                    <td className="p-3 whitespace-nowrap">{emp.phone}</td>
                    <td className="p-3 whitespace-nowrap">{emp.position}</td>
                    <td className="p-3 font-semibold whitespace-nowrap">
                      {emp.attendance || "97%"}
                    </td>
                
                    <td className="p-3 whitespace-nowrap">{emp.type}
                      Work From Home
                    </td>
                    <td className="p-3 whitespace-nowrap">
                     <span
  className={`px-2 py-1 rounded-full text-xs font-medium ${
    (emp.status || "Active") === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-700"
  }`}
>
  {emp.status || "Active"}
</span>

                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <button
                        onClick={() =>
                         navigate(`/employees/${emp.id}`)

                        }
                      >
                        <EllipsisVertical
                          size={18}
                          className="text-gray-500 hover:text-gray-700"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 gap-2">
            <div>
              Showing 1 to {employees.length} of {employees.length} entries
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
                &lt;
              </button>
              <button className="bg-[#7B61FF] text-white px-3 py-1 rounded">1</button>
              <button className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
                2
              </button>
              <span>...</span>
              <button className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
                7
              </button>
              <button className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
                &gt;
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 py-10">
          {activeTab} content will be shown here.
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
