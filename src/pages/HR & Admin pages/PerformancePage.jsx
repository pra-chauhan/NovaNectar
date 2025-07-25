import React, { useState } from "react";
import { BarChart2, List } from "lucide-react";
import { useEmployee } from "../../context.jsx/EmployeeContext";
import PerformanceTable from "../../components/Performance/PerformanceTable";
import PerformanceCardView from "../../components/Performance/EmployeePerformanceCards";
import PerformanceModal from "../../components/Performance/EvaluateModal";

const PerformancePage = () => {
  const { employees, updateEmployeePerformance } = useEmployee();
  const [showTable, setShowTable] = useState(false);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("highest");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEvaluate = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleSavePerformance = (employeeId, performanceData) => {
    updateEmployeePerformance(employeeId, {
      ...performanceData,
    });
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees
    .filter(emp =>
      emp.fullName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!a.performance?.average) return 1;
      if (!b.performance?.average) return -1;
      return sort === "highest"
        ? b.performance.average - a.performance.average
        : a.performance.average - b.performance.average;
    });

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen w-full">
      {/* Main Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 underline underline-offset-4 decoration-[#7B61FF] mb-4">
        Performance
      </h1>

      {/* Toggle Table Button */}
      <div className="w-full flex justify-start mb-4">
        <button
          onClick={() => setShowTable(!showTable)}
          className="flex items-center gap-2 text-sm px-4 py-2 rounded text-[#7B61FF] underline underline-offset-4 decoration-[#7B61FF] hover:text-[#5a44d8] transition"
        >
          <BarChart2 size={18} />
          Evaluate Performance
        </button>
      </div>

      {/* Sub-heading and Controls */}
      {showTable && (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            Employees Performance
          </h2>

          <div className="flex flex-wrap gap-2 items-center justify-start sm:justify-end">
            <button
              onClick={() => setView("table")}
              className={`p-2 rounded border ${
                view === "table"
                  ? "bg-[#7B61FF] text-white"
                  : "hover:bg-gray-100 text-gray-600"
              } transition`}
            >
              <BarChart2 size={18} />
            </button>
            <button
              onClick={() => setView("card")}
              className={`p-2 rounded border ${
                view === "card"
                  ? "bg-[#7B61FF] text-white"
                  : "hover:bg-gray-100 text-gray-600"
              } transition`}
            >
              <List size={18} />
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-1 focus:ring-[#7B61FF] outline-none"
            >
              <option value="highest">Highest rated</option>
              <option value="lowest">Lowest rated</option>
            </select>
          </div>
        </div>
      )}

      {/* Search Bar */}
      {showTable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-80 focus:ring-1 focus:ring-[#7B61FF] outline-none text-sm"
          />
        </div>
      )}

      {/* Table or Card View */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showTable ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {view === "table" ? (
          <div className="w-full overflow-auto">
            <PerformanceTable
              employees={filteredEmployees}
              onEvaluate={handleEvaluate}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEmployees.map((emp) => (
              <PerformanceCardView
                key={emp.id || emp.employeeId || emp.email}
                employees={emp}
                onEvaluate={handleEvaluate}
              />
            ))}
          </div>
        )}
      </div>

      {/* Performance Modal */}
      <PerformanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePerformance}
        initialData={selectedEmployee?.performance || null}
        employee={selectedEmployee}
      />
    </div>
  );
};

export default PerformancePage;
