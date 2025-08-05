import React, { useState } from "react";
import api from "../../context.jsx/api"; // Make sure this uses axios with credentials
import { useAuth } from "../../context.jsx/AuthContext";
import { getAccessToken } from "../../context.jsx/tokenService";

const NewDocumentPopup = ({ onClose }) => {
  const { user } = useAuth();
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const role = user?.role?.toLowerCase();

  const handleUpload = async () => {
    if (!type || !file) {
      alert("Please select both document type and file.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("type", type);
      formData.append("empDocument", file);

      const userId = user._id || user.user?._id;

      const res = await api.post(`/${role}/addDocument/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      console.log(res.data.documents);

      alert("Document uploaded successfully!");
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-end justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] mb-12">
        <h2 className="text-xl font-semibold mb-4">Upload New Document</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Document Type*
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none"
          >
            <option value="">Select Document Type</option>
            <option value="empIdProof">Aadhaar / ID Proof</option>
            <option value="empPhoto">Photograph</option>
            <option value="emp10PassCert">10th Certificate</option>
            <option value="emp12PassCert">12th Certificate</option>
            <option value="empGradCert">Graduation Certificate</option>
            <option value="empExpCert">Experience Certificate</option>
            <option value="empResume">Resume</option>
            <option value="empOfferLetter">Offer Letter</option>
            <option value="empOtherDoc">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select File*</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none"
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
        >
          {loading ? "Uploading..." : "Upload Document"}
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
