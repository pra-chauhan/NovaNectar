import React from "react";
import { Plus } from "lucide-react";

const events = [
  { title: "Team Meeting", time: "10:00 AM", description: "Zoom link in email" },
  { title: "Performance Review", time: "1:30 PM", description: "With HR" },
  { title: "Design Sync", time: "3:00 PM", description: "UI/UX feedback" },
];

const EventsMeetings = () => {
  return (
    <div className="w-full xl:w-[357px] h-auto border border-[#8D9096] rounded-2xl px-[26px] py-[24px] flex flex-col gap-[20px] bg-white shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Events & Meetings</h2>
        <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <Plus size={16} />
          Add Event
        </button>
      </div>

      <ul className="space-y-3">
        {events.map((event, index) => (
          <li key={index} className="p-3 bg-gray-50 rounded-lg border">
            <h3 className="font-medium text-sm">{event.title}</h3>
            <p className="text-xs text-gray-500">{event.time}</p>
            <p className="text-xs text-gray-600">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsMeetings;
