import React from "react";
import { Plus, Calendar } from "lucide-react";

const events = [
  {
    title: "Marketing Meeting",
    subtitle: "Meeting",
    time: "9:30 am",
    date: "07/04/2025",
  },
  {
    title: "Marketing Meeting",
    subtitle: "Client Meeting",
    time: "4:30 pm",
    date: "07/04/2025",
  },
  {
    title: "Rohit Interview",
    subtitle: "Job Interview",
    time: "12:30 pm",
    date: "08/04/2025",
  },
  {
    title: "Marketing Meeting",
    subtitle: "Meeting",
    time: "4:30 pm",
    date: "08/04/2025",
  },
];

const EventsMeetings = () => {
  return (
    <div className="w-[357px] h-[357px] rounded-[16px] border border-[#8D9096] bg-white px-[26px] py-[24px] flex flex-col gap-[20px] shadow-[0px_1px_6px_0px_#00000040]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-black">Events and Meetings</h2>
        <button className="text-sm flex items-center gap-1 px-3 py-1 bg-[#E0F5EF] text-[#10B981] rounded hover:opacity-90">
          <Plus size={16} />
           Add
        </button>
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-4 overflow-y-auto pr-1">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-t pt-4 first:border-t-0 first:pt-0"
          >
            {/* Left Icon & Details */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#F2F4F7] rounded-md">
                <Calendar className="w-5 h-5 text-[#8D9096]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-black">{event.title}</span>
                <span className="text-xs text-[#6B7280]">{event.subtitle}</span>
              </div>
            </div>

            {/* Time & Date */}
            <div className="flex flex-col items-end text-right">
              <span className="text-sm font-medium text-black">{event.time}</span>
              <span className="text-xs text-[#6B7280]">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsMeetings;
