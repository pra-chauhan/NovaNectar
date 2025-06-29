import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard, MdOutlineSettings } from "react-icons/md";
import {
  FaUserTie,
  FaMoneyCheckAlt,
  FaChartLine,
  FaCalendarCheck,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const menuItems = [
  { label: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
  { label: "Employee", icon: <FaUserTie />, path: "/employee" },
  { label: "Attendance", icon: <FaCalendarCheck />, path: "/attendance" },
  { label: "Payroll", icon: <FaMoneyCheckAlt />, path: "/payroll" },
  { label: "Performance", icon: <FaChartLine />, path: "/performance" },
  { label: "Setting", icon: <MdOutlineSettings />, path: "/setting" },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 md:static z-50
          bg-white h-screen w-[259px]
          border-[2px] border-[#8D9096]
          pt-[16px] pb-[16px] px-[24px]
          flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:flex
        `}
      >
        {/* Header */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold text-blue-600">
              Nova<span className="text-black">Nectar</span>
            </div>
            <button className="md:hidden text-2xl" onClick={onClose}>
              <IoMdClose />
            </button>
          </div>

          <div className="text-xs text-gray-500 mb-6">Private Limited</div>

          {/* Nav */}
          <nav className="space-y-1">
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
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="pt-6">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition">
            <FiLogOut />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
