import React from "react";
import CircularProgressBar from "../../components/ui/CircularProgressBar";

const KpiCard = ({ label, value, percentage, className }) => {
  return (
    <div className={`${className} w-[248px] h-[94px] flex items-center gap-4`}>
      <div className="w-[48px] h-[48px]">
        <CircularProgressBar percentage={percentage} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-lg font-semibold text-[#111827]">{value}</span>
      </div>
    </div>
  );
};

export default KpiCard;
