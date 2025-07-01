import React from "react";

const PerformanceCard = ({ employees, onEvaluate }) => {
    const { fullName, position, performance } = employees;

    const grade =
        performance?.average >= 4
            ? "Excellent"
            : performance?.average >= 3
            ? "Good"
            : performance?.average
            ? "Needs Improvement"
            : "Not Evaluated";

    return (
        <div className="bg-white rounded-xl shadow p-4 w-full max-w-xs flex flex-col justify-between border hover:shadow-md transition">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                    {fullName?.charAt(0)}
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">{fullName}</h3>
                    <p className="text-xs text-gray-500">{position || "Position not specified"}</p>
                </div>
            </div>

            {/* Performance Score */}
            <div className="mb-2">
                <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-medium text-gray-700">Performance Score</span>
                    <span className="text-xs bg-blue-100 text-blue-600 rounded px-2 py-0.5">
                        {grade}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                        className="bg-[#7B61FF] h-1.5 rounded-full"
                        style={{ width: `${(performance?.average / 5) * 100 || 0}%` }}
                    ></div>
                </div>
                <div className="text-right text-sm font-semibold text-gray-800 mt-1">
                    {performance?.average?.toFixed(1) || "-"}
                    <span className="text-gray-500 text-xs">/5.0</span>
                </div>
            </div>

            {/* Category Ratings */}
            <div className="text-sm text-gray-700 space-y-1 mb-2">
                <div className="flex justify-between">
                    <span>Work Quality</span>
                    <span>{performance?.workQuality || "-"}/5</span>
                </div>
                <div className="flex justify-between">
                    <span>Productivity</span>
                    <span>{performance?.productivity || "-"}/5</span>
                </div>
                <div className="flex justify-between">
                    <span>Reliability</span>
                    <span>{performance?.reliability || "-"}/5</span>
                </div>
            </div>

            {/* Notes */}
            <p className="text-xs text-gray-500 mb-2 line-clamp-3">
                {performance?.notes || "No performance notes available."}
            </p>

            {/* Last Update */}
            <p className="text-xs text-gray-400 mb-2">
                Last updated:{" "}
                {performance?.lastUpdated
                    ? new Date(performance.lastUpdated).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                      })
                    : "N/A"}
            </p>

            {/* Evaluate Button */}
            <button
                onClick={() => onEvaluate(employees)}
                className="w-full py-1.5 rounded bg-[#7B61FF] text-white text-sm hover:bg-[#644bd4] transition"
            >
                {performance ? "Re-Evaluate" : "Evaluate"}
            </button>
        </div>
    );
};

export default PerformanceCard;
