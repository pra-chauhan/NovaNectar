import React, { useState } from "react";
import { useEmployee } from "../context.jsx/EmployeeContext";
import EvaluateModal from "../components/Performance/EvaluateModal";

const PerformancePage = () => {
  const { employees, setEmployees } = useEmployee();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSaveEvaluation = (id, data) => {
    const updated = employees.map((emp) =>
      emp.id === id
        ? {
            ...emp,
            performance: data,
            performanceScore:
              (
                (data.workQuality +
                  data.productivity +
                  data.reliability) /
                3
              ).toFixed(1),
          }
        : emp
    );
    setEmployees(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Employee Performance</h1>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Performance Score</th>
            <th>Work Quality</th>
            <th>Productivity</th>
            <th>Reliability</th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.fullName}</td>
              <td>{emp.performanceScore || "-"}</td>
              <td>{emp.performance?.workQuality || "-"}</td>
              <td>{emp.performance?.productivity || "-"}</td>
              <td>{emp.performance?.reliability || "-"}</td>
              <td>{emp.performance?.date || "-"}</td>
              <td>
                <button
                  onClick={() => setSelectedEmployee(emp)}
                  className="px-3 py-1 border rounded"
                >
                  Evaluate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEmployee && (
        <EvaluateModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onSave={handleSaveEvaluation}
        />
      )}
    </div>
  );
};

export default PerformancePage;
