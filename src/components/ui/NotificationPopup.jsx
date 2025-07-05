// src/components/ui/NotificationPopup.jsx
import { useState } from "react";
import { X, Bell, CheckCircle, AlertCircle } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    type: "alert",
    priority: "High",
    title: "Late Punch-In Alert",
    content: "Mike Johnson punched in at 10:30 AM, 1.5 hours late",
    from: "System",
    time: "2 hours ago",
    status: "unread",
  },
  {
    id: 2,
    type: "request",
    priority: "Medium",
    title: "Document Edit Request",
    content: "John Doe requested to edit their employment contract document.",
    from: "John",
    time: "4 hours ago",
    status: "unread",
  },
  {
    id: 3,
    type: "request",
    priority: "Medium",
    title: "Document Edit Request",
    content: "Rishubh requested to edit their employment contract document.",
    from: "Rishubh Rawat",
    time: "4 hours ago",
    status: "unread",
  },
];

export default function NotificationPopup({ onClose }) {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState(mockNotifications);

  const filtered = notifications.filter(n => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return n.status === "unread";
    return n.type === activeTab;
  });

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, status: "read" }));
    setNotifications(updated);
  };

  return (
    <div className="absolute top-14 right-6 w-[360px] bg-white shadow-xl rounded-xl border p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button
          onClick={markAllAsRead}
          className="text-sm text-blue-600 hover:underline"
        >
          Mark as read
        </button>
        <button onClick={onClose} className="ml-2">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "unread", "request", "alert"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeTab === tab
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <span className="ml-1 text-xs font-semibold">
              {
                notifications.filter(n =>
                  tab === "all"
                    ? true
                    : tab === "unread"
                    ? n.status === "unread"
                    : n.type === tab
                ).length
              }
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1">
        {filtered.map(n => (
          <div key={n.id} className="border-b pb-3">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="text-red-500 w-4 h-4" />
              <h3 className="font-medium text-sm">{n.title}</h3>
              <span
                className={`ml-auto px-2 py-0.5 text-xs rounded-full ${
                  n.priority === "High"
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {n.priority}
              </span>
            </div>
            <p className="text-sm text-gray-700">{n.content}</p>
            <p className="text-xs text-gray-500 mt-1">
              from {n.from} • {n.time}
            </p>
            {n.type === "request" && (
              <div className="flex gap-2 mt-2">
                <button className="flex-1 text-green-600 border border-green-600 px-2 py-1 rounded hover:bg-green-50">
                  Approve
                </button>
                <button className="flex-1 text-red-600 border border-red-600 px-2 py-1 rounded hover:bg-red-50">
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-500">No notifications.</p>
        )}
      </div>
    </div>
  );
}
