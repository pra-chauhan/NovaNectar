import LeaveRequestSummaryModal from "./LeaveRequestSummaryModal";
import { useState } from "react";
import api from '../../context.jsx/api'; 
import { useAuth } from "../../context.jsx/AuthContext";
import { getAccessToken } from "../../context.jsx/tokenService";

const LeaveRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    comment: "",
  });

  const { user } = useAuth();
  const [showSummary, setShowSummary] = useState(false);


  const formatDateToDDMMYYYY = (isoDateStr) => {
    if (!isoDateStr) return "";
    const [yyyy, mm, dd] = isoDateStr.split("-");
    return `${dd}-${mm}-${yyyy}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const role = user?.role?.toLowerCase();

      if (!user?.role) {
        alert("User role is missing. Please log in again.");
        return;
      }

      // Format dates to dd-mm-yyyy before sending
      const payload = {
        ...formData,
        startDate: formatDateToDDMMYYYY(formData.startDate),
        endDate: formatDateToDDMMYYYY(formData.endDate),
      };

      const res = await api.post(`/${role}/createLeave`, payload, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log("✅ Leave submitted:", res.data);
      setShowSummary(true);
    } catch (error) {
      console.log("📤 Submitting leave request with data:", formData);
      console.error("❌ Failed to submit leave request:", error);
      const backendMessage = error.response?.data?.message;
      alert(backendMessage || "Bad request. Please check the form and try again.");
    }
  };

  const handleApprove = () => {
    console.log("✅ Approved:", formData);
    setShowSummary(false);
    onClose();
  };

  const handleReject = () => {
    console.log("❌ Rejected:", formData);
    setShowSummary(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Leave Request Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <div className="bg-white rounded-xl w-full max-w-lg p-5 sm:p-6 md:p-8 space-y-5 shadow-lg overflow-y-auto max-h-[90vh]">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center sm:text-left">
            📝 Create Leave Request
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Employee Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Leave Type*
              </label>
              <select
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border text-sm"
              >
                <option value="">Select Type</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Reason</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Comment
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>

            <div className="text-xs sm:text-sm text-gray-500">
              Add any relevant information from the email that might be useful
            </div>

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
                Submit & Next
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Summary Modal */}
      <LeaveRequestSummaryModal
        isOpen={showSummary}
        data={formData}
        onApprove={handleApprove}
        onReject={handleReject}
        onClose={() => setShowSummary(false)}
      />
    </>
  );
};

export default LeaveRequestModal;
