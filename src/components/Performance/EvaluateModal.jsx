import React, { useState } from "react";

const EvaluateModal = ({ employee, onClose, onSave }) => {
  const [workQuality, setWorkQuality] = useState(0);
  const [productivity, setProductivity] = useState(0);
  const [reliability, setReliability] = useState(0);
  const [teamwork, setTeamwork] = useState(0);
  const [innovation, setInnovation] = useState(0);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const handleSave = () => {
    const data = {
      workQuality,
      productivity,
      reliability,
      teamwork,
      innovation,
      notes,
      date,
    };
    onSave(employee.id, data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Evaluate Performance</h2>
        <p className="text-sm mb-4">
          Rate {employee.fullName}'s performance in each category
        </p>

        {/* Sliders */}
        {[
          ["Work Quality", workQuality, setWorkQuality],
          ["Productivity", productivity, setProductivity],
          ["Reliability", reliability, setReliability],
          ["Teamwork", teamwork, setTeamwork],
          ["Innovation", innovation, setInnovation],
        ].map(([label, value, setter]) => (
          <div key={label} className="mb-4">
            <label className="font-medium">{label} {value}/5</label>
            <input
              type="range"
              min="0"
              max="5"
              value={value}
              onChange={(e) => setter(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        ))}

        {/* Notes */}
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes about performance..."
          className="w-full p-2 border rounded mb-4"
        />

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Save Evaluation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvaluateModal;
