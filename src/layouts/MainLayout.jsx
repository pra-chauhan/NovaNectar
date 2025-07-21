import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <div className="flex flex-col flex-1 h-full w-full overflow-hidden">
          {/* Topbar */}
          <Topbar
         
            onMenuClick={() =>{    console.log("Menu clicked");
            setIsSidebarOpen(prev => !prev)}
          }/>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto bg-[#F9FAFB] p-4 md:p-6">
            <div className="max-w-[1440px] mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
