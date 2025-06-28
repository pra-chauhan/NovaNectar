import React from "react";
import { FiSearch, FiCalendar, FiBell, FiUser } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 shadow-sm sticky top-0 z-10">
      {/* Left: Search Bar */}
      <div className="flex items-center w-1/2 max-w-md">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-500 py-1"
        />
      </div>

      {/* Right: Calendar, Bell, User */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
          <FiCalendar />
          <span className="text-sm hidden sm:inline">June 2025</span> {/* This can be dynamic */}
        </button>

        <button className="text-gray-600 hover:text-blue-600 transition">
          <FiBell />
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm">
          <FiUser />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
