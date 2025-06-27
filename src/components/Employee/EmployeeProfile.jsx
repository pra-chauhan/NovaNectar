import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Download, Edit } from "lucide-react";

const EmployeeProfile = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const emp = storedEmployees.find(e => e.id.toString() === id);
        setEmployee(emp);
    }, [id]);

    const defaultAttendance = {
        present: 22,
        absent: 4,
        late: 3,
        wfh: 1,
        totalHours: 176
    };

    const handleDownload = (file, name) => {
        if (!file) return;
        const url = URL.createObjectURL(file);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        a.click();
        URL.revokeObjectURL(url);
    };

    if (!employee) return <div className="p-6">Loading employee data...</div>;
    return (
        <div className="p-6 flex flex-col gap-6 bg-gray-50 min-h-screen">
            {/* Profile and Basic Info */}
<div className="flex flex-col lg:flex-row gap-4">
                {/* Profile Card */}
                <div className="bg-white border rounded-lg p-6 w-full md:w-1/3 shadow">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-3xl">
                            📷
                        </div>
                        <p className="text-xl font-semibold mt-3">{employee.fullName}</p>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs mt-1 inline-block">
                            Active
                        </span>
                    </div>
                    <div className="mt-4 text-sm space-y-1 text-gray-700">
                        <p>👔 Position: {employee.position || "Position not set"}</p>
                        <p>📧  Email:{employee.email}</p>
                        <p>📱 Phone no: {employee.phone}</p>
                        <p>📅 Joined: {employee.joiningDate}</p>
                        <p>📞 Emergency: {employee.emergencyContact}</p>
                        <p>🏠 {employee.address}</p>
                    </div>
                </div>

                {/* Bio and Attendance */}
                <div className="bg-white border rounded-lg p-6 flex-1 shadow">
                    <h2 className="text-lg font-semibold mb-2">Employee Bio</h2>
                    <p className="text-gray-700">
                        {employee.bio || "No bio provided for this employee."}
                    </p>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Attendance Records</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: "Present", value: defaultAttendance.present },
                            { label: "Absent", value: defaultAttendance.absent },
                            { label: "Late", value: defaultAttendance.late },
                            { label: "WFH", value: defaultAttendance.wfh },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-100 rounded p-3">
                                {item.label}
                                <br />
                                <span className="text-lg font-bold">{item.value}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-700">
                        Total Hours: <span className="font-semibold">{defaultAttendance.totalHours} hrs</span>
                    </p>
                </div>
            </div>

            {/* Document Section */}
            <div className="bg-white border rounded-lg p-6 shadow">
                <h2 className="text-lg font-semibold mb-4">Employee Documents</h2>
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 text-left">Document</th>
                            <th className="p-2 text-left">Type</th>
                            <th className="p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.documents && Object.entries(employee.documents).map(([key, file]) => (
                            file && (
                                <tr key={key} className="border-t hover:bg-gray-50">
                                    <td className="p-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
                                    <td className="p-2">{file.type || "Unknown"}</td>
                                    <td className="p-2 flex gap-2">
                                        <button
                                            className="p-1 border rounded hover:bg-gray-100"
                                            onClick={() => alert('Edit not implemented yet')}
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            className="p-1 border rounded hover:bg-gray-100"
                                            onClick={() => handleDownload(file, `${key}-${employee.fullName}`)}
                                        >
                                            <Download size={16} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
                {!employee.documents && (
                    <p className="text-gray-500 text-sm mt-2">No documents available for this employee.</p>
                )}
            </div>
        </div>
    );
};

export default EmployeeProfile;
