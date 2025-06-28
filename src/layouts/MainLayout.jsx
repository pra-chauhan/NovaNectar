import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { IoMdMenu } from "react-icons/io";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white border-r-2 border-[#8D9096] transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Topbar for mobile */}
        <div className="p-4 bg-white shadow md:hidden flex justify-between items-center">
          <button
            className="text-2xl text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <IoMdMenu />
          </button>
          <span className="text-lg font-semibold text-blue-600">Dashboard</span>
        </div>

        {/* Topbar for desktop */}
        <div className="hidden md:block">
          <Topbar />
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-[#F9FAFB] p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
