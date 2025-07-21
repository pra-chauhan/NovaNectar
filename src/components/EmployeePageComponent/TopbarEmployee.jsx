import React, { useState } from "react";
import { FiSearch, FiMail, FiBell, FiSettings } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import logo from "../../assets/logoo.png";
import EmailPopupModal from "../EmployeePageComponent/EmailPopupModal";
import NotificationPopupModal from "../EmployeePageComponent/NotificationBell"; 
// import SettingsPopupModal from "../EmployeePageComponent/EmployeeSettingsModal";

const TopbarEmployee = ({ onMenuClick }) => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  // const [showSettingsPopup, setShowSettingsPopup] = useState(false);

  const toggleEmailPopup = () => {
    setShowEmailPopup((prev) => !prev);
  };

  const toggleNotificationPopup = () => {
    setShowNotificationPopup((prev) => !prev);
  };

  // const toggleSettingsPopup = () => {
  //   setShowSettingsPopup((prev) => !prev);
  //   };

  return (
    <div className="w-full h-[76px] flex items-center justify-between px-4 md:px-8 border-b-2 border-[#8D9096] bg-white sticky top-0 z-50">
      {/* Left: Logo + Menu + Search */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Company Logo" className="h-10 w-auto object-contain" />

        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={onMenuClick}
        >
          <IoMdMenu />
        </button>

        {/* Search Box */}
        <div className="hidden sm:flex items-center border border-[#8D9096] rounded-[16px] px-5 py-[10px] gap-2 w-[200px] sm:w-[600px] md:w-[650px] lg:w-[1000px] xl:w-[1050px] h-[44px]">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-sm focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 relative">
        {/* Exclamation Icon */}
        <button
          onClick={() => alert("Exclamation icon clicked")}
          className="relative text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <BsExclamationCircle className="text-xl" />
        </button>

        {/* Mail Icon */}
        <button
          onClick={toggleEmailPopup}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <FiMail className="text-xl" />
        </button>

        {/* Notification Bell */}
        <button
          onClick={toggleNotificationPopup}
          className="text-gray-600 hover:text-blue-600 focus:outline-none relative"
        >
          <FiBell className="text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        {/* <button
          onClick={toggleSettingsPopup}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <FiSettings className="text-xl" />
          
        </button> */}

        {/* Profile Circle */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm">
          U
        </div>

        {/* EmailPopupModal */}
        <EmailPopupModal
          isOpen={showEmailPopup}
          onClose={() => setShowEmailPopup(false)}
        />

        {/* NotificationPopupModal */}
        <NotificationPopupModal
          isOpen={showNotificationPopup}
          onClose={() => setShowNotificationPopup(false)}
        />

        {/* Setttings */}
        {/* <SettingsPopupModal
        isOpen={showSettingsPopup}
        onClose={() => setShowSettingsPopup(false)}
        /> */}
      </div>
    </div>
  );
};

export default TopbarEmployee;
