import React from "react";

const KpiCard = ({ label, value, percentage, valueColor }) => {
  return (
    <div
      className="w-[260px] h-[94px] flex items-center gap-[14px] rounded-[15px] border border-[#8D9096] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] px-[22px] py-[16px] bg-white shrink-0"
    >
      {/* Circular Progress Bar */}
      <div className="relative w-[48px] h-[48px]">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke={valueColor}
            strokeWidth="4"
            strokeDasharray={2 * Math.PI * 20}
            strokeDashoffset={(1 - percentage / 100) * 2 * Math.PI * 20}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[12px] font-medium text-gray-900">
          {percentage}%
        </div>
      </div>

      {/* Label + Value */}
      <div className="flex flex-col justify-center">
        <span className="text-[14px] font-medium text-gray-700">{label}</span>
        <span className="text-[18px] font-semibold" style={{ color: valueColor }}>{value}</span>
      </div>
    </div>
  );
};

export default KpiCard;
