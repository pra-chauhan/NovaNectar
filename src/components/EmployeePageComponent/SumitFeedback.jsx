import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; // npm install @heroicons/react(*ye install kr lena)


const SubmitFeedbackModal = ({ isOpen, onClose }) => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setAttachment(file);
    } else {
      alert('File too large. Max size is 5MB.');
    }
  };

  const handleSubmit = () => {
    if (!type || !title) {
      alert('Please fill in all required fields.');
      return;
    }
    // Submit logic here
    console.log({ type, title, description, attachment });
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
      <div className="bg-white w-[500px] p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Submit Feedback</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Type */}
        <div className="mb-3">
          <label className="text-sm font-medium block mb-1">Type<span className="text-red-500">*</span></label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">Select type</option>
            <option>Bug</option>
            <option>Feature Request</option>
            <option>UI Issue</option>
            <option>Other</option>
          </select>
        </div>

        {/* Title */}
        <div className="mb-3">
          <label className="text-sm font-medium block mb-1">Title<span className="text-red-500">*</span></label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title of your feedback"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="text-sm font-medium block mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Detail description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-indigo-500 focus:outline-none resize-none"
          />
        </div>

        {/* Attachments */}
 <div className="mb-5">
  <label className="text-sm font-medium block mb-1">Attachments (Optional)</label>
  <label className="relative border-2 border-dashed border-gray-300 rounded-md px-4 py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-indigo-400 block">
    <input
      type="file"
      accept=".pdf,.doc,.docx,image/*"
      onChange={handleFileChange}
      className="hidden"
    />
    {attachment ? (
      <span className="text-gray-700">{attachment.name}</span>
    ) : (
      <span>Click to upload files (PDF, DOC, image)<br />max 5MB per file</span>
    )}
  </label>
</div>


        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
          >
            Save & Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitFeedbackModal;
