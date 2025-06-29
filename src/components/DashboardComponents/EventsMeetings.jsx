import React, { useState, useEffect } from "react";
import { Plus, Calendar } from "lucide-react";


import EventMeetingModal from "./EventMeetingModal";
import EventDetailModal from "./EventDetailModal";

const EventsMeetings = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Auto delete expired events
  useEffect(() => {
    const now = new Date();
    setEvents((prev) =>
      prev.filter((event) => new Date(event.endDate) > now)
    );
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  const handleDeleteEvent = () => {
    setEvents((prev) => prev.filter((e) => e !== selectedEvent));
    setSelectedEvent(null);
  };

  return (
    <div className="w-full rounded-2xl border border-gray-300 bg-white p-4 shadow-sm flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Events and Meetings</h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-sm flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4 max-h-[260px] overflow-y-auto pr-1">
        {events.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer hover:bg-gray-50 p-2 rounded flex justify-between items-start border-t pt-4 first:pt-0 first:border-t-0"
          >
            <div className="flex gap-3">
              <div className="p-2 bg-gray-100 rounded-md">
                <Calendar className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{event.title}</span>
                <span className="text-xs text-gray-500">{event.type}</span>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-gray-900">
                {new Date(event.startDate).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(event.startDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {showModal && (
        <EventMeetingModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onAdd={handleAddEvent}
        />
      )}

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onDelete={handleDeleteEvent}
        />
      )}
    </div>
  );
};

export default EventsMeetings;

