// src/components/NewDocumentPopup.jsx

import React from "react";

const NewDocumentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-end justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] mb-12">
        <h2 className="text-xl font-semibold mb-4">Upload New document</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Document Type*</label>
          <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Adhaar Card</option>
            <option>PAN Card</option>
            <option>Driving License</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select File*</label>
          <input
            type="file"
            className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none"
          />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md">
          Upload Document
        </button>

        <button
          className="w-full mt-3 text-sm text-gray-600 hover:underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewDocumentPopup;