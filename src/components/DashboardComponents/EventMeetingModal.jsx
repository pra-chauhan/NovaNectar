import React, { useState, useEffect } from "react";

const EventMeetingModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Event",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        title: "",
        type: "Event",
        startDate: "",
        endDate: "",
        description: "",
      });
      setError("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { title, startDate, endDate } = formData;

    if (!title || !startDate || !endDate) {
      setError("Please fill in all required fields.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setError("End date/time must be after start date/time.");
      return;
    }

    onAdd(formData);
    onClose();
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
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Event">Event</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>

        {/* Start Date & Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Start Date & Time <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* End Date & Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            End Date & Time <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventMeetingModal;