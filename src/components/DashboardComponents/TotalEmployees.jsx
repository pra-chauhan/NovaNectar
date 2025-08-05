import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getAccessToken } from "../../context.jsx/tokenService";
import api from "../../context.jsx/api";
import { useAuth } from "../../context.jsx/AuthContext";

const COLORS = ["#4648AB", "#5A5DDB", "#6366F1", "#9698F6", "#B7B9F9"];

const TotalEmployees = () => {
  const { user } = useAuth();
  const role = user?.user?.role || user?.role;
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`${role}/dashboard/employee-count`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });

        const responseData = res.data;

        const positions = responseData.positions || [];

        

        const transformed = positions.map((item) => ({
          name: item.position?.name || item.position || "Unknown",
          value: item.count,
        }));

        setData(transformed);
        setTotal(responseData.total || 0);
      } catch (error) {
        console.error("Failed to fetch employee position data:", error);
      }
    };

    fetchData();
  }, [role]);

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
