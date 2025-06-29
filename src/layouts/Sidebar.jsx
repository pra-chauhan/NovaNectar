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
import { HiMenuAlt3 } from "react-icons/hi";

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
      {/* Topbar for small screens */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b">
        <div className="text-xl font-bold text-blue-600">
          Nova<span className="text-black">Nectar</span>
        </div>
        <button onClick={onClose} className="text-2xl text-gray-700">
          {isOpen ? <IoMdClose /> : <HiMenuAlt3 />}
        </button>
      </div>

{/* Mobile Overlay */}
<div
  className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
    isOpen ? "block" : "hidden"
  }`}
  style={{
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)', 
  }}
  onClick={onClose}
/>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 h-full bg-white border-r border-gray-300 flex flex-col justify-between transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar content */}
        <div className="p-4">
          <div className="hidden md:block text-xl font-bold text-blue-600 mb-1">
            Nova<span className="text-black">Nectar</span>
          </div>
          <div className="hidden md:block text-xs text-gray-500 mb-6">
            Private Limited
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={onClose} // closes sidebar on nav click (for mobile)
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition">
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
