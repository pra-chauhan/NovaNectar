import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const chartData = {
  Month: [
    { name: "Week 1", hours: 35 },
    { name: "Week 2", hours: 38 },
    { name: "Week 3", hours: 42 },
    { name: "Week 4", hours: 43 },
  ],
  Week: [
    { name: "Mon", hours: 8 },
    { name: "Tue", hours: 7.5 },
    { name: "Wed", hours: 8 },
    { name: "Thu", hours: 8 },
    { name: "Fri", hours: 7.5 },
  ],
  Day: [
    { name: "9 AM", hours: 1 },
    { name: "10 AM", hours: 1 },
    { name: "11 AM", hours: 1 },
    { name: "12 PM", hours: 1 },
    { name: "1 PM", hours: 1 },
    { name: "2 PM", hours: 1 },
    { name: "3 PM", hours: 1 },
    { name: "4 PM", hours: 0.5 },
  ],
};

const EmployeeWorkingHours = () => {
  const [viewMode, setViewMode] = useState("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleViewChange = (mode) => {
    setViewMode(mode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full rounded-[16px] border border-gray-300 bg-white shadow-md px-4 sm:px-6 md:px-8 py-4 flex flex-col gap-3">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 relative">
        <h2 className="text-[15px] sm:text-[16px] md:text-[20px] font-medium text-gray-900">
          Employee Working Hours
        </h2>
        <div className="flex items-center gap-2">
          <button
            className="text-[14px] font-medium text-gray-500 hover:text-gray-900"
            title="Info"
          >
            ⓘ
          </button>

          {/* View Mode Dropdown */}
          <div className="relative">
            <button
              className="border rounded-full px-3 py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 whitespace-nowrap"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>View by </span>
              <span className="text-indigo-600 font-medium">{viewMode}</span> →
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md bg-white border border-gray-200 shadow-lg z-10">
                {["Month", "Week", "Day"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => handleViewChange(mode)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      viewMode === mode
                        ? "bg-indigo-100 text-indigo-600 font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Total Time */}
      <div className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold flex flex-wrap items-baseline text-[#6366F1] mt-1">
        <span className="flex items-baseline">
          158
          <span className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-normal ml-1">h</span>
        </span>
        <span className="flex items-baseline ml-4">
          27
          <span className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-normal ml-1">m</span>
        </span>
      </div>

      {/* Chart Section */}
      <div className="mt-2 w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData[viewMode]}>
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#6366F1"
              fillOpacity={1}
              fill="url(#colorHours)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeWorkingHours;
