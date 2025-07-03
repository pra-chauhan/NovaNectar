import React from 'react';

const employees = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    profilePic: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'HR Manager',
    department: 'Human Resources',
    profilePic: 'https://via.placeholder.com/50',
  },
  // Add more mock employees here
];

export default function EmployeesSection() {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Employees</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Add Employee
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-4 border-b">Profile</th>
              <th className="text-left py-2 px-4 border-b">Name</th>
              <th className="text-left py-2 px-4 border-b">Position</th>
              <th className="text-left py-2 px-4 border-b">Department</th>
              <th className="text-left py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">
                  <img src={emp.profilePic} alt={emp.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 border-b">{emp.name}</td>
                <td className="py-2 px-4 border-b">{emp.position}</td>
                <td className="py-2 px-4 border-b">{emp.department}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-600 hover:underline">View Profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
