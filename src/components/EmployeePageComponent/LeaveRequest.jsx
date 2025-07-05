import React from 'react';

const LeaveRequestModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
      <div className="bg-white w-[450px] h-[520px] rounded-lg shadow-lg p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-2">Create Leave Request</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fill in the details to manually create a leave request based on received email
        </p>

        {/* Leave Type */}
        <label className="block mb-1 font-medium text-sm">Leave Type<span className="text-red-500">*</span></label>
        <select className="w-full border rounded px-3 py-2 mb-3 text-sm">
          <option>Select Leave Type</option>
        </select>

        {/* Dates */}
        <div className="flex gap-3 mb-3">
          <div className="w-1/2">
            <label className="block mb-1 font-medium text-sm">Start Date<span className="text-red-500">*</span></label>
            <input type="date" className="w-full border rounded px-2 py-1 text-sm" />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-medium text-sm">End Date<span className="text-red-500">*</span></label>
            <input type="date" className="w-full border rounded px-2 py-1 text-sm" />
          </div>
        </div>

        {/* Reason */}
        <label className="block mb-1 font-medium text-sm">Reason</label>
        <textarea
          className="w-full border rounded px-2 py-1 text-sm mb-3 resize-none"
          rows={2}
          placeholder="Reason for employee’s leave..."
        />

        {/* Additional Comment */}
        <label className="block mb-1 font-medium text-sm">Additional Comment</label>
        <textarea
          className="w-full border rounded px-2 py-1 text-sm mb-4 resize-y"
          rows={2}
          placeholder="Anything..."
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border text-sm hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
            Submit Leave Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestModal;
