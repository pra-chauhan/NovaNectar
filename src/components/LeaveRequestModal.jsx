import React, { useState } from "react";

const LeaveRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    startDate: "",
    endDate: "",
    locationType: "",
    notes1: "",
    notes2: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, string } = e.target;
    setFormData(prev => ({ ...prev, [name]: string }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Leave Request:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 space-y-4 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Create Leave Request</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Employee Name*</label>
            <input type="text" value={formData.name} disabled className="w-full px-4 py-2 rounded border bg-gray-100 text-sm"/>
          </div>

          <div>
            <label className="block text-sm mb-1">Leave Type*</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 rounded border text-sm">
              <option>Sick Leave</option>
              <option>WFH</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm mb-1">Start Date</label>
              <input name="startDate" type="date" onChange={handleChange} value={formData.startDate} className="w-full px-4 py-2 rounded border text-sm"/>
            </div>
            <div className="w-1/2">
              <label className="block text-sm mb-1">End Date</label>
              <input name="endDate" type="date" onChange={handleChange} value={formData.endDate} className="w-full px-4 py-2 rounded border text-sm"/>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Reason</label>
            <textarea
              name="notes"
              value={formData.notes1}
              onChange={handleChange}
              rows="3"
              placeholder="employee informed via email"
              className="w-full px-4 py-2 rounded border text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Additional Comment</label>
            <textarea
              name="notes"
              value={formData.notes2}
              onChange={handleChange}
              rows="3"
              placeholder="employee informed via email"
              className="w-full px-4 py-2 rounded border text-sm"
            />
          </div>

          <div className="text-sm text-white-100 mb-1">
            Add any relevant information from the email that might be useful
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border text-sm hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              Submit & Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestModal;
