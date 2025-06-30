import React, { useState } from 'react';
import AddEmployeeModal from '../components/Employee/AddEmployeeModal';
import EmployeeTable from '../components/Employee/EmployeeTable';
import { useEmployees } from '../context.jsx/EmployeeContext';

const EmployeesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
const { employees, addEmployee } = useEmployees(); // ✅ Use global context

// Handler to add a new employee
const handleAddEmployee = (employee) => {
    const newEmployee = {
        id: Date.now(),
        name: employee.fullName,
        fullName: employee.fullName,
        contact: employee.phone,
        phone: employee.phone,
        role: employee.position,
        position: employee.position,
        attendance: "97%",
        type: "Work from office",
        status: "Active", // ✅ Ensures status always exists
        email: employee.email,
        joiningDate: employee.joiningDate,
        emergencyContact: employee.emergencyContact,
        address: employee.address,
        bio: employee.bio,
        documents: employee.documents, // to store evaluated performance later
    };

    addEmployee(newEmployee); // ✅ Adds globally
    setIsModalOpen(false);
};

    const handleExport = () => {
        const dataStr = JSON.stringify(employees, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "employees.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="p-4 sm:p-6 md:p-8">
            {/* Heading and Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Employee</h1>
                <div className="flex gap-2 w-full sm:w-auto justify-end">
                    <button
                        onClick={handleExport}
                        className="w-full sm:w-auto border border-[#180b5a] text-[#401fe3] px-4 py-2 rounded hover:bg-[#7B61FF]/10 transition text-center"
                    >
                        Export
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-[#2a0fad] text-white px-4 py-2 rounded hover:bg-[#7B61FF]/90 transition text-center"
                    >
                        + Add Employee
                    </button>
                </div>
            </div>

            {/* Employee Table */}
            <EmployeeTable employees={employees} />

            {/* Add Employee Modal */}
            <AddEmployeeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddEmployee}
            />
        </div>
    );
};

export default EmployeesPage;
