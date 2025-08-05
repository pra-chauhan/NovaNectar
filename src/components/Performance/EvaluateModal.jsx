import React, { useState, useEffect } from "react";

const PerformanceModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  employee,
  evaluatorId, // <-- evaluatorId must be passed from parent
}) => {
  const [performance, setPerformance] = useState({
    workQuality: 0,
    productivity: 0,
    reliability: 0,
    teamwork: 0,
    innovation: 0,
    notes: "",
  });

  useEffect(() => {
    if (initialData) {
      setPerformance({
        workQuality: initialData.workQuality ?? 0,
        productivity: initialData.productivity ?? 0,
        reliability: initialData.reliability ?? 0,
        teamwork: initialData.teamwork ?? 0,
        innovation: initialData.innovation ?? 0,
        notes: initialData.notes ?? "",
      });
    } else {
      setPerformance({
        workQuality: 0,
        productivity: 0,
        reliability: 0,
        teamwork: 0,
        innovation: 0,
        notes: "",
      });
    }
  }, [initialData, isOpen]);

  const handleSliderChange = (name, value) => {
    setPerformance((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee?.id) {
      console.error("No employee data provided.");
      return;
    }
    if (!evaluatorId) {
      console.error("No evaluator ID provided.");
      return;
    }

    const total =
      performance.workQuality +
      performance.productivity +
      performance.reliability +
      performance.teamwork +
      performance.innovation;

    const average = parseFloat((total / 5).toFixed(1));

    onSave(employee.id, {
      ...performance,
      average,
      evaluator: evaluatorId,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl max-h-[90vh] overflow-y-auto space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Evaluate {employee?.fullName || "Employee"}'s Performance
        </h2>
        <p className="text-sm text-gray-500 mb-2">Rate in each category (0-5)</p>

        {[
          { label: "Work Quality", name: "workQuality" },
          { label: "Productivity", name: "productivity" },
          { label: "Reliability", name: "reliability" },
          { label: "Teamwork", name: "teamwork" },
          { label: "Innovation", name: "innovation" },
        ].map(({ label, name }) => (
          <div key={name} className="space-y-1">
            <label className="block font-medium text-gray-700">
              {label}: <span className="text-[#7B61FF] font-medium">{performance[name]}/5</span>
            </label>
            <input
              type="range"
              min="0"
              max="5"
              value={performance[name]}
              onChange={(e) => handleSliderChange(name, e.target.value)}
              className="w-full accent-[#7B61FF] cursor-pointer"
            />
          </div>
        ))}

        <textarea
          name="notes"
          value={performance.notes}
          onChange={(e) =>
            setPerformance((prev) => ({ ...prev, notes: e.target.value }))
          }
          placeholder="Add notes about employee's performance..."
          rows={3}
          className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:ring-[#7B61FF]/50 text-sm"
        />

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-[#7B61FF] text-white text-sm hover:bg-[#5a44d8] transition"
          >
            Save Evaluation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceModal;
