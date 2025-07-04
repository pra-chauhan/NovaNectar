import React, { useState } from "react";

const EmailPopupModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("Inbox");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">📧 Inbox</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-around border-b px-4">
          {["Inbox", "Sent", "Compose"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`py-2 px-4 font-medium ${
                tab === item
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        {tab !== "Compose" && (
          <div className="flex items-center justify-between p-4 gap-2">
            <input
              type="text"
              placeholder="Search Emails….."
              className="w-full px-4 py-2 border rounded-md"
            />
            <button className="px-4 py-0.2 border rounded-md text-sm">Unread only</button>
          </div>
        )}

        {/* Email Content */}
        <div className="p-4 space-y-4">
          {tab === "Inbox" &&
            [2, 3, 48].map((t, i) => (
              <div
                key={i}
                className="border p-3 rounded-lg hover:shadow transition"
              >
                <div className="text-sm text-gray-600">HR Team</div>
                <div className="font-semibold">Leave Request Update</div>
                <div className="text-gray-500 text-sm">
                  Your leave request for Dec 25-26 has been approved. Please check your leave balance in the dashboard.
                </div>
                <div className="text-right text-xs text-gray-400 mt-1">{t} hours ago</div>
              </div>
            ))}

          {tab === "Sent" && (
            <div className="text-gray-600 text-center">No sent emails.</div>
          )}

          {tab === "Compose" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="To"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Send Email
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPopupModal;