import React from "react";
import KpiCard from "./KpiCard";

const PAORSection = () => {
  const totalEmployees = 30;

  const kpis = [
    { label: "Total Present", value: 24, percentage: (24 / totalEmployees) * 100, color: "text-[#6366F1]" },
    { label: "Absent", value: 3, percentage: (3 / totalEmployees) * 100, color: "text-[#EF4444]" },
    { label: "On Leave", value: 2, percentage: (2 / totalEmployees) * 100, color: "text-[#F59E0B]" },
    { label: "Remote", value: 1, percentage: (1 / totalEmployees) * 100, color: "text-[#10B981]" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      {kpis.map((kpi, index) => (
        <KpiCard
          key={index}
          label={kpi.label}
          value={kpi.value}
          percentage={Math.round(kpi.percentage)}
          valueColor={kpi.color}
        />
      ))}
    </div>
  );
};

export default PAORSection;
