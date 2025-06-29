import React from "react";

const EmployeeWorkingHours = () => {
  return (
    <div
      className="w-full max-w-[831px] mx-auto rounded-[16px] border border-[#8D9096] bg-white shadow-[0px_1px_6px_0px_rgba(0,0,0,0.25)] 
      px-4 sm:px-6 md:px-[26px] py-3 sm:py-4 md:py-[12px] flex flex-col gap-[6px]"
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h2 className="text-[15px] sm:text-[16px] md:text-[20px] font-medium text-gray-900">
          Employee Working Hours
        </h2>
        <div className="flex items-center gap-2">
          <button
            className="text-[14px] font-medium text-gray-500 hover:text-gray-900"
            title="Info"
          >
            ⓘ
          </button>
          <div className="border rounded-full px-3 py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 whitespace-nowrap">
            <span>View by </span>
            <span className="text-indigo-600 font-medium">Month</span> →
          </div>
        </div>
      </div>

      {/* Total Time */}
      <div className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold flex items-baseline text-[#6366F1] mt-2">
        <span className="flex items-baseline">
          158
          <span className="text-[#000000] text-[24px] sm:text-[28px] md:text-[32px] font-normal ml-1">h</span>
        </span>
        <span className="flex items-baseline ml-3">
          27
          <span className="text-[#000000] text-[24px] sm:text-[28px] md:text-[32px] font-normal ml-1">m</span>
        </span>
      </div>

      {/* Chart or Graph Section */}
      <div className="mt-2 w-full h-[180px]">
        <img
          src="/your-chart.png"
          alt="Employee working hours chart"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default EmployeeWorkingHours;
