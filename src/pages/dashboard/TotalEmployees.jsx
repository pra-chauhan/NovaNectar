import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "HR", value: 6 },
  { name: "Tech", value: 12 },
  { name: "Finance", value: 4 },
  { name: "Marketing", value: 8 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const TotalEmployees = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-full md:w-[262px] h-auto md:h-[340px] rounded-[16px] border border-[#8D9096] bg-white shadow-[0px_1px_6px_rgba(0,0,0,0.25)] px-4 md:px-[26px] py-3 md:py-[12px] flex flex-col gap-[20px]">
      <h2 className="text-[15px] md:text-[14px] font-medium text-gray-900">
        Total Employees
      </h2>

      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            innerRadius={40}
            outerRadius={55}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div className="mt-3 md:mt-0 md:ml-4 space-y-2 text-sm">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-gray-800 font-medium">
                {entry.name}: {entry.value}
              </span>
            </div>
          ))}
          <div className="mt-2 font-semibold text-gray-700">Total: {total}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalEmployees;
