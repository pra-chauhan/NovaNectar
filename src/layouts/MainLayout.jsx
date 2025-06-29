import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <div
          className={`
            fixed z-40 inset-y-0 left-0 w-[259px] bg-white border-r-2 border-[#8D9096] 
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 md:relative md:flex-shrink-0
          `}
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
        <div className="flex flex-col flex-1 h-full w-full overflow-hidden">
          {/* Topbar for all screens */}
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

          {/* Main Scrollable Content */}
          <main className="flex-1 overflow-y-auto bg-[#F9FAFB] p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
