import LeaveRequestSummaryModal from "./LeaveRequestSummaryModal";
import { useState } from "react";

const LeaveRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    startDate: "",
    endDate: "",
    notes1: "",
    notes2: "",
  });

  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
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
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center sm:text-left">
            📝 Create Leave Request
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Employee Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Employee Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>

            {/* Leave Type */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Leave Type*
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border text-sm"
              >
                <option value="">Select Type</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="WFH">WFH</option>
              </select>
            </div>

            {/* Dates */}
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

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium mb-1">Reason</label>
              <textarea
                name="notes1"
                value={formData.notes1}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>

            {/* Additional Comment */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Comment
              </label>
              <textarea
                name="notes2"
                value={formData.notes2}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 rounded border text-sm"
              />
            </div>

            {/* Info */}
            <div className="text-xs sm:text-sm text-gray-500">
              Add any relevant information from the email that might be useful
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
