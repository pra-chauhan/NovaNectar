import React from "react";
import KpiCard from "../../components/DashboardComponents/KpiCard";

const PAORSection = () => {
  const totalEmployees = 30;

  const kpis = [
    { label: "Total Present", value: 24, percentage: (24 / totalEmployees) * 100, color: "#6366F1" },
    { label: "Absent", value: 3, percentage: (3 / totalEmployees) * 100, color: "#EF4444" },
    { label: "On Leave", value: 2, percentage: (2 / totalEmployees) * 100, color: "#F59E0B" },
    { label: "Remote", value: 1, percentage: (1 / totalEmployees) * 100, color: "#10B981" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between gap-4 min-w-[920px]">
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
    </div>
  );
};

export default PAORSection;
