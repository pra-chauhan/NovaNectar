import React, { useState } from "react";
import api from "../../context.jsx/api"; 
import { useAuth } from "../../context.jsx/AuthContext";
import { getAccessToken } from "../../context.jsx/tokenService";


const EditPermissionPopup = ({ isOpen, onClose, docId, documentName, userId, type }) => {
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const role = user?.user?.role || user?.role;

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!reason || !file) {
      alert("Please provide both reason and updated file.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("reason", reason);
      formData.append("type", type); 
      formData.append("empDocument", file); 

      await api.put(`/${role}/updateDocument/${userId}/${docId}`, formData, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("userId:", userId);
console.log("docId:", docId);

      alert("Edit request submitted for approval.");
      onClose();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-end justify-center sm:items-center px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
          Request Edit Permission
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Document: <strong>{documentName || "Selected Document"}</strong>
        </p>

        {/* Warning */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm rounded-md px-4 py-3 mb-4 flex items-start gap-2">
          <span className="text-xl pt-1">⚠</span>
          <span>
            <strong className="block mb-1">Editing documents requires HR approval</strong>
            To maintain authenticity and compliance, you cannot edit your documents directly.
          </span>
        </div>

        {/* Reason Textarea */}
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Why do you want to update this document?
        </label>
        <textarea
          rows="3"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Explain your reason..."
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />

        {/* Upload */}
        <label className="block text-sm font-medium mb-1 text-gray-700">Upload New File*</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border rounded-md px-3 py-2 text-sm mb-4"
        />

        {/* Info note */}
        <div className="flex items-start gap-2 bg-indigo-50 border border-indigo-200 rounded-md px-3 py-2 text-sm text-indigo-700 mb-4">
          <span className="text-lg pt-1">✉</span>
          <p>A request will be sent to HR. You'll be notified once access is granted.</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-md text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPermissionPopup;
