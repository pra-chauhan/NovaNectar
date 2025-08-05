import React, { useState, useEffect } from "react";
import { Plus, Calendar } from "lucide-react";
import EventMeetingModal from "./EventMeetingModal";
import EventDetailModal from "./EventDetailModal";
import { useAuth } from "../../context.jsx/AuthContext";
import api from "../../context.jsx/api";
import { getAccessToken } from "../../context.jsx/tokenService";

const EventsMeetings = () => {


  const { user } = useAuth();


   const role = user?.user?.role || user?.role;

  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);



    useEffect(() => {
  if (!role) return;

    const fetchEvents = async () => {
      try {
        
      const res = await api.get(`/${role}/allMeetings`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
      });

      
        const data = res.data?.meetings || res.data || [];
        setEvents(data)
      } catch (error) {
        console.error("Failed to fetch meetings:", error);
      }
    };

    fetchEvents();
  }, [showModal]);

  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  // const handleDeleteEvent = () => {
  //   setEvents((prev) => prev.filter((e) => e !== selectedEvent));
  //   setSelectedEvent(null);
  // };
  
const handleDeleteEvent = async () => {
  if (!selectedEvent) return;

  try {
    await api.delete(`${role}/deleteMeting/${selectedEvent._id}`);

    setEvents((prev) => prev.filter((e) => e._id !== selectedEvent._id));
    setSelectedEvent(null);
  } catch (error) {
    console.error("Failed to delete event:", error);
    alert("Error deleting the meeting. Please try again.");
  }
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
                <span className="text-sm font-medium text-gray-900">{event.name}</span>
                <span className="text-xs text-gray-500">{event.type?.name || event.type}</span>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-gray-900">
                {event.startTime} - {event.endTime}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(event.date).toLocaleDateString()}
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
