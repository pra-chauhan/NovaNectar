import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiMail, FiBell } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import NotificationPopup from "../components/ui/NotificationPopup";

const Topbar = ({ onMenuClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  const togglePopup = () => setShowPopup((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-[70px] flex items-center justify-between px-4 md:px-8 border-b border-gray-300 bg-white sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <button className="text-2xl text-gray-700 md:hidden" onClick={onMenuClick}>
          <IoMdMenu />
        </button>
        <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 gap-2 flex-1 md:flex-none md:w-[280px] lg:w-[400px] xl:w-[500px]">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-sm focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative ml-4 md:ml-8">
        <button onClick={togglePopup} className="relative text-gray-600 hover:text-blue-600">
          <BsExclamationCircle className="text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <FiMail className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <FiBell className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm">U</div>

        {showPopup && (
          <div
            ref={popupRef}
            className="absolute top-[50px] right-0 md:right-12 z-50 bg-white shadow-lg rounded-lg"
          >
            <NotificationPopup onClose={() => setShowPopup(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
