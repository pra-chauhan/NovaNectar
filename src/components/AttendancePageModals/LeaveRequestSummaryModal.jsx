import React from "react";

const LeaveRequestSummaryModal = ({ data, isOpen, onApprove, onReject }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl w-full max-w-lg p-5 sm:p-6 md:p-8 shadow-lg space-y-4 overflow-y-auto max-h-[90vh]">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center sm:text-left">
          Leave Request Summary
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-gray-500 mb-2 text-center sm:text-left">
          Review the details and decide whether to approve or reject this request
        </p>

        {/* Summary Details */}
        <div className="text-sm sm:text-base space-y-2">
          <p>
            <strong>Employee Name:</strong> {data.name}
          </p>
          <p>
            <strong>Leave Type:</strong> {data.type}
          </p>
          <p>
            <strong>Period:</strong> {data.startDate} to {data.endDate}
          </p>
          <p>
            <strong>Reason:</strong> {data.notes1}
          </p>
          <p>
            <strong>Comment:</strong> {data.notes2}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            onClick={onReject}
            className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 text-sm w-full sm:w-auto"
          >
            Reject
          </button>
          <button
            onClick={onApprove}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm w-full sm:w-auto"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestSummaryModal;
