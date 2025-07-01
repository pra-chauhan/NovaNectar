import React, { useState } from "react";
import { FiSearch, FiMail, FiBell } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import NotificationPopup from "../components/ui/NotificationPopup"; // 👈 Import the popup

const Topbar = ({ onMenuClick }) => {
  const [showPopup, setShowPopup] = useState(false); // 👈 Popup visibility state

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  return (
    <div className="w-full h-[76px] flex items-center justify-between px-4 md:px-8 border-b-2 border-[#8D9096] bg-white sticky top-0 z-50">
      {/* Left: Menu Icon (visible only on mobile) and Search */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button (Mobile only) */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={onMenuClick}
        >
          <IoMdMenu />
        </button>

        {/* Search */}
        <div className="flex items-center border border-[#8D9096] rounded-[16px] px-5 py-[10px] gap-2 w-[150px] sm:w-[300px] md:w-[300px] lg:w-[500px] xl:w-[600px] 2xl:w-[916px] h-[44px]">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-sm focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 relative">
        {/* Notification Trigger Icon */}
        <button
          onClick={togglePopup}
          className="relative text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <BsExclamationCircle className="text-xl" />
          {/* Optional red dot indicator */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <FiMail className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <FiBell className="text-gray-600 hover:text-blue-600 cursor-pointer" />

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm">
          U
        </div>

        {/* Notification Popup Render */}
        {showPopup && (
          <div className="absolute top-[60px] right-12 z-50">
            <NotificationPopup onClose={() => setShowPopup(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
