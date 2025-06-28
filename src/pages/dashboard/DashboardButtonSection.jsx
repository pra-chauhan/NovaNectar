import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const DashboardButtonSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-3 gap-y-4">
      
      {/* Left: Breadcrumb & Greeting */}
      <div className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-800">
        <span className="text-[20px] font-semibold text-gray-900">Dashboard</span>
        <span className="mx-1 text-gray-400">{">"}</span>
        <span className="text-[14px]">
          Welcome Back <span className="text-indigo-600 font-semibold">"Sidhu"</span> 👋
        </span>
      </div>

      {/* Middle + Right Section Wrapper */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Date Picker */}
        <div className="flex items-center gap-2 border px-3 py-1.5 rounded-md text-sm text-gray-700 bg-white w-full md:w-auto">
          <FaCalendarAlt className="text-gray-500" />
          <select className="outline-none bg-transparent text-sm w-full md:w-auto">
            <option value="july">1 Jul 2024 - 31 Jul 2024</option>
            <option value="june">1 Jun 2024 - 30 Jun 2024</option>
            <option value="may">1 May 2024 - 31 May 2024</option>
          </select>
        </div>

        {/* Share Button */}
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md transition w-full md:w-auto">
          Share
        </button>
      </div>
    </div>
  );
};

export default DashboardButtonSection;
