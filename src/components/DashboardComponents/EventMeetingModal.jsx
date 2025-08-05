import React, { useState, useEffect } from "react";
import api from "../../context.jsx/api";
import { useAuth } from "../../context.jsx/AuthContext";
import { getAccessToken } from "../../context.jsx/tokenService";

const EventMeetingModal = ({ isOpen, onClose, onAdd }) => {
  const { user } = useAuth();
  const role = user?.user?.role || user?.role;

  const [formData, setFormData] = useState({
    name: "",
    type: "Event",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) resetForm();
  }, [isOpen]);

  const resetForm = () => {
    setFormData({
      name: "",
      type: "Event",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
    });
    setError("");
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { name, type, date, startTime, endTime, description } = formData;

    if (!name.trim() || !date || !startTime || !endTime) {
      setError("Please fill in all required fields.");
      return;
    }

    if (startTime >= endTime) {
      setError("End time must be after start time.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        name: name.trim(),
        type,
        date,
        startTime,
        endTime,
        description: description || "",
      };

      const res = await api.post(`/${role}/Meeting`, payload, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
      });

      onAdd?.(res.data.meeting || res.data);
      resetForm();
      onClose();
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Something went wrong.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[500px] max-w-full rounded-xl shadow-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Add Event / Meeting</h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={loading}
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={loading}
          >
            <option value="Event">Event</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={loading}
          />
        </div>

        {/* Start Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Start Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={loading}
          />
        </div>

        {/* End Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            End Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={loading}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Add description..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
            disabled={loading}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            disabled={loading}
            className="px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventMeetingModal;
