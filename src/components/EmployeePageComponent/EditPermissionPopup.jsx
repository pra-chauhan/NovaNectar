import React from "react";

const EditPermissionPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // <-- This prevents full-screen black background when modal is closed

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-end justify-center sm:items-center px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
          Request Edit Permission
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Document: <strong>Aadhar_Card.pdf</strong>
        </p>

        {/* Warning */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm rounded-md px-4 py-3 mb-4 flex items-start gap-2">
          <span className="text-xl pt-1">⚠</span>
          <span>
            <strong className="block mb-1">Editing documents requires HR approval</strong>
            To maintain authenticity and compliance, you cannot edit your documents directly.
          </span>
        </div>

        {/* Textarea */}
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Why do you want to update this document?
        </label>
        <textarea
          rows="3"
          placeholder="xxxxxxxx"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        ></textarea>

        {/* Info note */}
        <div className="flex items-start gap-2 bg-indigo-50 border border-indigo-200 rounded-md px-3 py-2 text-sm text-indigo-700 mb-4">
          <span className="text-lg pt-1">✉</span>
          <p>
            A request will be sent to HR. You'll be notified once access is granted.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm">
            Send Request
          </button>
          <button
            onClick={onClose} // <-- Now it works
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-md text-sm"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPermissionPopup;
