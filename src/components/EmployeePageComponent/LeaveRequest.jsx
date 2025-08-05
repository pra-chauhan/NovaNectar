import React, { useState } from "react";
import api from "../../context.jsx/api"; // Your axios or API client instance
import { useAuth } from "../../context.jsx/AuthContext";
import { getAccessToken } from "../../context.jsx/tokenService";

const LeaveRequestModal = ({ isOpen, onClose }) => {
  // Form state
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const { user } = useAuth();

  const role = user?.role?.toLowerCase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!leaveType || !startDate || !endDate || !reason) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post(`/${role}/createLeave`, {
        leaveType,
        startDate,
        endDate,
        reason,
        comment,
      },
    {
          headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
        withCredentials: true,
    
           });

      console.log(res);
      console.log(res.data);

      alert(res.data.message || "Leave request submitted!");
      onClose();
      setLeaveType("");
      setStartDate("");
      setEndDate("");
      setReason("");
      setComment("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit leave request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[450px] h-[520px] rounded-lg shadow-lg p-6 overflow-y-auto flex flex-col"
      >
        <h2 className="text-xl font-semibold mb-2">Create Leave Request</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fill in the details to manually create a leave request based on
          received email
        </p>

        {/* Leave Type */}
        <label className="block mb-1 font-medium text-sm">
          Leave Type
          <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border rounded px-3 py-2 mb-3 text-sm"
           value={leaveType}
  onChange={(e) => setLeaveType(e.target.value)}
          required
        >
           <option value="">Select Leave Type</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Earned Leave">Earned Leave</option>
          <option value="Maternity Leave">Maternity Leave</option>
          <option value="Other">Other</option>
          {/* Add more leave types as needed */}
        </select>

        {/* Dates */}
        <div className="flex gap-3 mb-3">
          <div className="w-1/2">
            <label className="block mb-1 font-medium text-sm">
              Start Date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border rounded px-2 py-1 text-sm"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-medium text-sm">
              End Date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border rounded px-2 py-1 text-sm"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Reason */}
        <label className="block mb-1 font-medium text-sm">Reason</label>
        <textarea
          className="w-full border rounded px-2 py-1 text-sm mb-3 resize-none"
          rows={2}
          placeholder="Reason for employee’s leave..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />

        {/* Additional Comment */}
        <label className="block mb-1 font-medium text-sm">
          Additional Comment
        </label>
        <textarea
          className="w-full border rounded px-2 py-1 text-sm mb-4 resize-y"
          rows={2}
          placeholder="Anything..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-auto">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border text-sm hover:bg-gray-100 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Leave Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveRequestModal;
