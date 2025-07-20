import React, { useState } from "react";
import { FiDownload, FiFilter, FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import LeaveRequestModal from "../../components/AttendancePageModals/LeaveRequestModal";
import EditAttendanceModal from "../../components/AttendancePageModals/EditAttendanceModal";

const AttendancePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("2025-05-03");
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const attendanceData = [
    { id: 2443, name: "Amit Rajmola", role: "Junior HR", checkIn: "09:00 am", checkOut: "06:00 pm", status: "Present" },
    { id: 2444, name: "Amit Rajmola", role: "Junior HR", checkIn: "09:00 am", checkOut: "06:00 pm", status: "Absent" },
    { id: 2445, name: "Amit Rajmola", role: "Junior HR", checkIn: "09:00 am", checkOut: "06:00 pm", status: "Present" },
    { id: 2446, name: "Amit Rajmola", role: "Junior HR", checkIn: "09:00 am", checkOut: "06:00 pm", status: "WFH" },
    { id: 2447, name: "Amit Rajmola", role: "Junior HR", checkIn: "", checkOut: "", status: "On leave" },
    { id: 2448, name: "Amit Rajmola", role: "Junior HR", checkIn: "", checkOut: "", status: "On leave" },
  ];

  const statusColors = {
    Present: "bg-green-100 text-green-700",
    Absent: "bg-red-100 text-red-700",
    "On leave": "bg-purple-100 text-purple-700",
    WFH: "bg-yellow-100 text-yellow-700",
  };

  const filteredData = attendanceData.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenEditModal = (employee) => {
    setSelectedEmployee(employee);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedEmployee(null);
    setEditModalOpen(false);
  };

  const exportCSV = () => {
    const headers = ["ID", "Name", "Role", "Check In", "Check Out", "Status"];
    const rows = filteredData.map(emp => [emp.id, emp.name, emp.role, emp.checkIn || "-", emp.checkOut || "-", emp.status]);
    let csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "attendance.csv";
    link.click();
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          📅 Attendance
        </h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportCSV} className="px-4 py-2 flex items-center gap-2 bg-white border rounded-md text-sm font-medium hover:bg-gray-100">
            <FiDownload /> Export CSV
          </button>
          <button
            onClick={() => setShowLeaveModal(true)}
            className="bg-[#6A5AE0] text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-[#5949d6]"
          >
            + Request Leave
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <StatCard label="Total Present" value="50/100" percent="50%" />
        <StatCard label="Absent Today" value="15" percent="15%" />
        <StatCard label="On Leave Today" value="10" percent="10%" />
        <StatCard label="Remote" value="10" percent="10%" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div className="flex flex-wrap gap-4">
          <button className="text-blue-600 font-medium border-b border-dotted border-blue-600 text-sm">
            Manage Attendance
          </button>
          <button className="relative text-red-600 font-medium border-b border-dotted border-red-600 text-sm">
            Leave <span className="absolute -top-2 -right-4 text-xs text-white bg-red-500 rounded-full px-1">3</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm w-full sm:w-auto"
          />
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search Keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md text-sm w-full"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button className="px-3 py-2 bg-white border rounded-md">
            <FiFilter />
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-auto rounded-lg border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Name</th>
              <th className="p-3 whitespace-nowrap">Role</th>
              <th className="p-3 whitespace-nowrap">Check In</th>
              <th className="p-3 whitespace-nowrap">Check Out</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((emp, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3 text-purple-600 font-medium">{emp.id}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.role}</td>
                <td className="p-3">{emp.checkIn || "------"}</td>
                <td className="p-3">{emp.checkOut || "------"}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs rounded ${statusColors[emp.status] || ""}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="p-3">
                  <button onClick={() => handleOpenEditModal(emp)}>
                    <HiOutlineDotsVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 gap-4">
        <span className="text-sm text-gray-600">Showing 1 to 7 of 20 entries</span>
        <div className="flex gap-2 items-center">
          <button className="px-2 border rounded hover:bg-gray-100">&lt;</button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white text-sm">1</button>
          <button className="px-3 py-1 rounded text-sm hover:bg-gray-100">2</button>
          <span className="text-sm">...</span>
          <button className="px-3 py-1 rounded text-sm hover:bg-gray-100">7</button>
          <button className="px-2 border rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>

      {/* Modals */}
      <LeaveRequestModal isOpen={showLeaveModal} onClose={() => setShowLeaveModal(false)} />
      {editModalOpen && selectedEmployee && (
        <EditAttendanceModal
          isOpen={editModalOpen}
          onClose={handleCloseEditModal}
          employee={selectedEmployee}
        />
      )}
    </div>
  );
};

const StatCard = ({ label, value, percent }) => (
  <div className="bg-white p-4 rounded shadow text-center border">
    <h4 className="text-sm font-medium text-gray-600">{label}</h4>
    <p className="text-xl font-bold text-blue-600">{value}</p>
    <p className="text-sm text-gray-500">{percent}</p>
  </div>
);

export default AttendancePage;
