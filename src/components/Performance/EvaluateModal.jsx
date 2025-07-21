import React, { useState, useEffect } from 'react';

const PerformanceModal = ({ isOpen, onClose, onSave, initialData, employee }) => {
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
                workQuality: initialData.workQuality || 0,
                productivity: initialData.productivity || 0,
                reliability: initialData.reliability || 0,
                teamwork: initialData.teamwork || 0,
                innovation: initialData.innovation || 0,
                notes: initialData.notes || "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerformance((prev) => ({ ...prev, [name]: value }));
    };

    const handleSliderChange = (name, value) => {
        setPerformance((prev) => ({ ...prev, [name]: Number(value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!employee || !employee.id) {
            console.error("No employee data provided for evaluation.");
            return;
        }

        const total =
            Number(performance.workQuality) +
            Number(performance.productivity) +
            Number(performance.reliability) +
            Number(performance.teamwork) +
            Number(performance.innovation);

        const average = parseFloat((total / 5).toFixed(1));

        onSave(employee.id, { ...performance, average });
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
                    { label: "Work Quality", name: "workQuality", description: "Quality of work delivered and attention to detail" },
                    { label: "Productivity", name: "productivity", description: "Volume of work completed and efficiency" },
                    { label: "Reliability", name: "reliability", description: "Dependability, meeting deadlines, and consistency" },
                    { label: "Teamwork", name: "teamwork", description: "Collaboration, communication, and support of team members" },
                    { label: "Innovation", name: "innovation", description: "Creative thinking and problem-solving abilities" },
                ].map((item) => (
                    <div key={item.name} className="space-y-1">
                        <label className="block font-medium text-gray-700">
                            {item.label}: <span className="text-[#7B61FF] font-medium">{performance[item.name]}/5</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="5"
                            value={performance[item.name]}
                            onChange={(e) => handleSliderChange(item.name, e.target.value)}
                            className="w-full accent-[#7B61FF] cursor-pointer"
                        />
                        <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                ))}

                <textarea
                    name="notes"
                    value={performance.notes}
                    onChange={handleChange}
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
