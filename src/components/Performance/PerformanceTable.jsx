import React from "react";

const PerformanceTable = ({ employees, onEvaluate }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-[rgba(207,212,223,1)] shadow-sm bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr className="text-left text-gray-700">
            <th className="p-3">Employee</th>
            <th className="p-3">Performance Score</th>
            <th className="p-3">Work Quality</th>
            <th className="p-3">Productivity</th>
            <th className="p-3">Reliability</th>
            <th className="p-3">Last Update</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-t border-[rgba(207,212,223,1)] hover:bg-gray-50"
              >
                <td className="p-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{emp.fullName}</span>
                    <span className="text-xs text-gray-500">
                      {emp.position || "N/A"}
                    </span>
                  </div>
                </td>
                <td className="p-3">
                  {emp.performance ? (
                    <span className="text-blue-600 font-semibold">
                      {emp.performance.score} ({emp.performance.grade})
                    </span>
                  ) : (
                    <span className="italic text-gray-400">N/A</span>
                  )}
                </td>
                <td className="p-3 text-center">
                  {emp.performance?.workQuality || "-"}
                </td>
                <td className="p-3 text-center">
                  {emp.performance?.productivity || "-"}
                </td>
                <td className="p-3 text-center">
                  {emp.performance?.reliability || "-"}
                </td>
                <td className="p-3 text-center">
                  {emp.performance?.lastUpdate || "-"}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => onEvaluate(emp)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded px-3 py-1 text-xs"
                  >
                    Evaluate
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
                            <td
                              colSpan="7"
                              className="p-4 text-center text-gray-500 italic text-sm"
                            >
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                );
              };
              
              export default PerformanceTable;
