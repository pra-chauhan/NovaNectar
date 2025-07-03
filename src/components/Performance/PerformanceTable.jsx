import React from "react";
import { Star } from "lucide-react";

const PerformanceTable = ({ employees = [], onEvaluate, searchTerm = "", sortOption = "" }) => {
    // Filter employees based on search term
    const filteredEmployees = employees.filter(emp =>
        emp.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.position?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort employees based on sortOption
    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
        if (sortOption === "Highest rated") {
            return (b.performance?.average || 0) - (a.performance?.average || 0);
        } else if (sortOption === "Lowest rated") {
            return (a.performance?.average || 0) - (b.performance?.average || 0);
        } else {
            return 0; // default, no sort
        }
    });

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
                     {sortedEmployees.length > 0 ? (
        sortedEmployees.map((emp) => (
            <tr
                key={emp.id || emp.employeeId || emp.email || emp.phone}
                className="border-t border-[rgba(207,212,223,1)] hover:bg-gray-50"
            >
                                <td className="p-3">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{emp.fullName || "N/A"}</span>
                                        <span className="text-xs text-gray-500">
                                            {emp.position || "N/A"}
                                        </span>
                                    </div>
                                </td>
                                <td className="p-3">
                                    {emp.performance ? (
                                        <span className="text-blue-600 font-semibold flex items-center gap-1">
                                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                            {emp.performance.average}
                                        </span>
                                    ) : (
                                        <span className="italic text-gray-400">N/A</span>
                                    )}
                                </td>
                                <td className="p-3 text-center">
                                    ⭐ {emp.performance?.workQuality ?? "-"}
                                </td>
                                <td className="p-3 text-center">
                                    ⭐ {emp.performance?.productivity ?? "-"}
                                </td>
                                <td className="p-3 text-center">
                                    ⭐ {emp.performance?.reliability ?? "-"}
                                </td>
                                <td className="p-3 text-center text-xs text-gray-500">
                                    {emp.performance?.lastUpdated
                                        ? new Date(emp.performance.lastUpdated).toLocaleDateString()
                                        : "-"}
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
                            <td colSpan="7" className="p-4 text-center text-gray-500 italic text-sm">
                                No employees found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PerformanceTable;
