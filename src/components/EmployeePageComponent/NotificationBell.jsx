// src/components/EmployeePageComponent/NotificationPopupModal.jsx

import React, { useState } from "react";
import { FiX, FiFileText } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const notifications = [
  {
    id: 1,
    type: "Leave Request Updates",
    description: "Your Casual Leave (20 June 2025) has been approved.",
    status: "Approved",
    from: "HR",
    time: "Today at 10:32 AM",
    icon: <AiOutlineCheckCircle className="text-red-500 text-xl" />,
  },
  {
    id: 2,
    type: "Document Edit Request Status",
    description: `Your request to edit “Resume.pdf” was approved by HR Priya Sharma.`,
    status: "Approved",
    from: "HR",
    time: "4 hours ago",
    icon: <FiFileText className="text-red-500 text-xl" />,
  },
  {
    id: 3,
    type: "Document Edit Request Status",
    description: `Your request to edit “AadharCard.pdf” was rejected by HR Rohan Mehta.`,
    status: "Rejected",
    from: "HR",
    time: "4 hours ago",
    icon: <FiFileText className="text-red-500 text-xl" />,
  },
];

const NotificationPopupModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("All");

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-16 mt-2 w-96 bg-white border border-gray-200 shadow-xl rounded-2xl z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-700 hover:text-blue-600">
            Mark as read
          </button>
          <button onClick={onClose} className="text-xl text-gray-500 hover:text-gray-700">
            <FiX />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 px-4 py-2">
        {[
          { label: "All", count: 8 },
          { label: "Unread", count: 7 },
          { label: "Requests", count: 3 },
          { label: "Alert", count: 3 },
        ].map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              activeTab === tab.label
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.label}{" "}
            <span className="ml-1 text-xs">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Notifications */}
      <div className="max-h-[70vh] overflow-y-auto divide-y divide-gray-200">
        {notifications.map((n) => (
          <div key={n.id} className="flex gap-3 p-4 hover:bg-gray-50 transition">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              {n.icon}
            </div>
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{n.type}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    n.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {n.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-0.5">{n.description}</p>
              <div className="text-xs text-gray-400 mt-1">
                from {n.from} • {n.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPopupModal;
