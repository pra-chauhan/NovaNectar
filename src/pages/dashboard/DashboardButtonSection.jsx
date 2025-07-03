import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const DashboardButtonSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4 gap-y-4 gap-x-6">
      
      {/* Left: Breadcrumb & Greeting */}
      <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-1 sm:gap-2 text-gray-800">
        <span className="text-2xl sm:text-[28px] md:text-[32px] font-bold font-Roboto text-[#111827]">
          Dashboard
        </span>
        <span className="text-2xl sm:text-[28px] md:text-[32px] text-[#111827]"> &gt; </span>
        <span className="text-lg sm:text-xl md:text-[24px] text-[#111827]">
          Welcome Back{" "}
          <span className="text-[#6366F1] font-semibold">"Sidhu"</span> 👋
        </span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
        
        {/* Date Picker */}
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm text-gray-700 bg-white w-full sm:w-auto">
          <FaCalendarAlt className="text-gray-500" />
          <select className="outline-none bg-transparent text-sm w-full sm:w-auto">
            <option value="july">1 Jul 2024 - 31 Jul 2024</option>
            <option value="june">1 Jun 2024 - 30 Jun 2024</option>
            <option value="may">1 May 2024 - 31 May 2024</option>
          </select>
        </div>

        {/* Share Button */}
        <button className="bg-[#5A5DDB] hover:bg-[#111827] text-white text-sm font-medium px-4 py-2 rounded-md transition w-full sm:w-auto">
          Share
        </button>
      </div>
    </div>
  );
};

export default DashboardButtonSection;
