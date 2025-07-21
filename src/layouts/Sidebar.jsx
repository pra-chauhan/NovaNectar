// Sidebar.jsx
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard, MdOutlineSettings } from "react-icons/md";
import {
  FaUserTie,
  FaMoneyCheckAlt,
  FaChartLine,
  FaCalendarCheck,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const menuItems = [
  { label: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
  { label: "Employee", icon: <FaUserTie />, path: "/employee" },
  { label: "Attendance", icon: <FaCalendarCheck />, path: "/attendance" },
  { label: "Payroll", icon: <FaMoneyCheckAlt />, path: "/payroll" },
  { label: "Performance", icon: <FaChartLine />, path: "/performance" },
  { label: "Setting", icon: <MdOutlineSettings />, path: "/settings" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* 🔳 Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
  
        />
      )}

      {/* 🧊 Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50 bg-white w-[260px] h-screen border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* 🔹 Brand Header */}
        <div className="pt-4 pb-2 px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            Nova<span className="text-gray-800">Nectar</span>
          </div>
          <button
            className="md:hidden text-2xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>

        <div className="px-4 text-xs text-gray-500 mb-4">Private Limited</div>

        {/* 🧭 Navigation */}
        <nav className="px-4 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
              onClick={onClose} // Close sidebar on link click (for mobile)
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 🔻 Logout */}
        <div className="absolute bottom-4 px-6 w-full">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
