import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Software Engineer", value: 30 },
  { name: "UI/UX Designer", value: 25 },
  { name: "Data Analyst", value: 15 },
  { name: "Project Manager", value: 13 },
  { name: "IT Sales", value: 8 },
];

const COLORS = ["#4648AB", "#5A5DDB", "#6366F1", "#9698F6", "#B7B9F9"];

const TotalEmployees = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full max-w-[262px] h-auto rounded-[16px] border border-gray-300 bg-white shadow px-5 py-4 flex flex-col gap-4 items-center">
      {/* Title */}
      <h2 className="text-[20px] font-semibold text-gray-800">Total Employee</h2>

      {/* Pie Chart */}
      <div className="relative">
        <PieChart width={130} height={130}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center text */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[18px] font-semibold text-black">
          {total}
        </div>
      </div>

      {/* Legend */}
      <div className="w-full space-y-2 mt-2">
        {data.map((entry, index) => (
          <div key={index} className="flex justify-between items-center text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>{entry.name}</span>
            </div>
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalEmployees;