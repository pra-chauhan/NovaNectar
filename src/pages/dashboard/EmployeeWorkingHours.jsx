import React from "react";

const EmployeeWorkingHours = () => {
  return (
    <div
      className="w-full md:w-[831px] h-auto gap-[6px] rounded-[16px] border border-[#8D9096] bg-white shadow-[0px_1px_6px_0px_rgba(0,0,0,0.25)] px-4 md:px-[26px] py-3 md:py-[12px] flex flex-col mx-auto"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <h2 className="text-[15px] md:text-[14px] font-medium text-gray-900">
          Employee Working hours
        </h2>
        <div className="flex items-center gap-2">
          <button className="text-[12px] font-medium text-gray-500 hover:text-gray-900">
            ⓘ
          </button>
          <div className="border rounded-full px-3 py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 whitespace-nowrap">
            <span>View by </span>
            <span className="text-indigo-600 font-medium">Month</span> →
          </div>
        </div>
      </div>

      {/* Total Time */}
      <div className="text-[28px] md:text-[32px] font-semibold flex items-baseline text-[#6366F1] mt-2">
        <span className="flex items-baseline">
          158
          <span className="text-[#000000] text-[28px] md:text-[32px] font-normal ml-1">h</span>
        </span>
        <span className="flex items-baseline ml-3">
          27
          <span className="text-[#000000] text-[28px] md:text-[32px] font-normal ml-1">m</span>
        </span>
      </div>

      {/* Chart Placeholder */}
      <div className="flex-1 mt-2">
        <img
          src="/your-chart.png"
          alt="Employee working hours chart"
          className="w-full h-[180px] object-contain"
        />
      </div>
    </div>
  );
};

export default EmployeeWorkingHours;
