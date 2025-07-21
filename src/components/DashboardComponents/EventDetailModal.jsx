import React from "react";

const EventDetailModal = ({ event, onClose, onDelete }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Type:</strong> {event.type}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Start:</strong> {new Date(event.startDate).toLocaleString()}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>End:</strong> {new Date(event.endDate).toLocaleString()}
        </p>
        {event.description && (
          <p className="text-sm text-gray-600 mb-4">
            <strong>Description:</strong> {event.description}
          </p>
        )}

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
          >
            Close
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;