import React, { useState } from "react";

const EditAttendanceModal = ({ isOpen, onClose, employee }) => {
  const [formData, setFormData] = useState({
    date: "2025-04-25",
    status: "Present",
    punchIn: "",
    punchOut: "",
    locationType: "",
    notes: "",
  });

  if (!isOpen || !employee) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl w-full max-w-lg p-5 sm:p-6 md:p-8 space-y-5 shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center sm:text-left">
          ✏️ Edit Attendance – <span className="text-blue-600">{employee.name}</span>
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">📅 Date</label>
            <input
              type="text"
              value={formData.date}
              disabled
              className="w-full px-4 py-2 rounded border bg-gray-100 text-sm"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Attendance Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border text-sm"
            >
              <option>Present</option>
              <option>Absent</option>
              <option>WFH</option>
              <option>On leave</option>
            </select>
          </div>

          {/* Punch Times */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Punch-In Time</label>
              <input
                type="time"
                name="punchIn"
                value={formData.punchIn}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Punch-Out Time</label>
              <input
                type="time"
                name="punchOut"
                value={formData.punchOut}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>
          </div>

          {/* Location Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Location Type</label>
            <select
              name="locationType"
              value={formData.locationType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border text-sm"
            >
              <option value="">Select Location Type</option>
              <option>Office</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="employee informed via email"
              className="w-full px-4 py-2 rounded border text-sm"
            />
          </div>

          {/* Info */}
          <div className="bg-blue-100 text-xs sm:text-sm px-3 py-2 rounded text-blue-800 text-center sm:text-left">
            Shift Time Reference: <strong>09:00 AM – 06:00 PM</strong>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border text-sm hover:bg-gray-50 w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 w-full sm:w-auto"
            >
              Update Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAttendanceModal;
