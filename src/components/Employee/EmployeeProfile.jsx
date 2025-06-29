import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Download, Edit } from "lucide-react";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const emp = storedEmployees.find((e) => e.id.toString() === id);
    setEmployee(emp);
  }, [id]);

  const defaultAttendance = {
    present: 22,
    absent: 4,
    late: 3,
    wfh: 1,
    totalHours: 176,
  };

  const handleDownload = (fileObject, defaultName) => {
    if (!fileObject || !fileObject.dataUrl) {
      alert("File not available for download.");
      return;
    }

    const base64Data = fileObject.dataUrl.split(",")[1];
    const mimeType = fileObject.type || "application/octet-stream";
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileObject.name || `${defaultName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!employee) {
    return <div className="p-6">Loading employee data...</div>;
  }

  return (
    <div className="p-6 flex flex-col gap-6 bg-gray-50 min-h-screen">
      {/* Top section with Profile and Bio/Attendance/Performance */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Profile Card */}
        <div className="bg-white border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-6 w-full lg:w-1/3 shadow text-center text-sm">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
            {employee.documents?.employeeImage?.dataUrl ? (
              <img
                src={employee.documents.employeeImage.dataUrl}
                alt={employee.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="material-symbols-outlined text-gray-500 text-5xl">
                account_circle
              </span>
            )}
          </div>

          <p className="text-indigo-500 text-sm font-semibold mt-2">
            {employee.id}
          </p>
          <h2 className="text-lg font-bold mt-1">{employee.fullName}</h2>
          <div className="mt-2 bg-green-100 text-green-700 text-xs py-1 rounded-full w-fit px-4 mx-auto">
            Active
          </div>

          <div className="text-left mt-6 text-gray-700 space-y-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">badge</span>
              <span>{employee.position || "Not specified"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">mail</span>
              <span>{employee.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">call</span>
              <span>{employee.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">
                calendar_month
              </span>
              <span>Joined : {employee.joiningDate}</span>
            </div>

            <hr className="my-2 border-[rgba(207,212,223,1)]" />

            <div>
              <p className="text-sm font-medium">Emergency Contact:</p>
              <p className="text-gray-600">{employee.emergencyContact}</p>
            </div>

            <hr className="my-2 border-[rgba(207,212,223,1)]" />

            <div>
              <p className="text-sm font-medium">Address:</p>
              <p className="text-gray-600 flex items-start gap-2">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>{employee.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Bio, Attendance, Recent Performance */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Bio */}
          <div className="bg-white border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-2">Employee Bio</h2>
            <p className="text-gray-700 font-Inter">
              {employee.bio || "No bio provided for this employee."}
            </p>
          </div>

          {/* Attendance */}
          <div className="bg-white border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-6 shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Attendance Records</h2>
              <button className="bg-gray-100 px-3 py-1 text-sm rounded">
                This month ▾
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Present", value: defaultAttendance.present },
                { label: "Total Absent", value: defaultAttendance.absent },
                { label: "Late", value: defaultAttendance.late },
                { label: "Work From Home", value: defaultAttendance.wfh },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-4"
                >
                  <p className="text-gray-700 font-medium">{item.label}</p>
                  <p className="text-xl text-blue-500 font-bold mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center text-gray-600 text-sm">
              <span className="mr-2">🕒</span>
              Total Working Hours:{" "}
              <span className="text-blue-500 font-medium ml-1">
                {defaultAttendance.totalHours} hrs
              </span>
            </div>
          </div>

          {/* Recent Performance */}
          <div className="bg-white border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-6 shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Performance</h2>
              <button className="bg-gray-100 text-sm px-4 py-1 rounded">
                Evaluate
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm font-inter text-gray-700">
              {[
                "Excellent team player and consistently delivers high-quality work.",
                "Very reliable and excellent at fostering team collaboration.",
              ].map((desc, idx) => (
                <div
                  key={idx}
                  className="border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-4"
                >
                  <p>{desc}</p>
                  <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                    <span>
                      Last updated:{" "}
                      {idx === 0 ? "April 14, 2025" : "March 14, 2025"}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-black font-semibold">4.4/5</span>
                      <span className="text-white bg-indigo-500 px-2 py-0.5 rounded-full text-xs">
                        Excellent
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-[1px] border-[rgba(207,212,223,1)] rounded-xl p-6 shadow flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Left side - Leave stats */}
        <div className="grid grid-cols-2 gap-3 w-full md:w-1/2  ">
          {[
            { value: 1, label: "Current Month", color: "text-indigo-600" },
            { value: 2, label: "Carried Forward", color: "text-red-500" },
            { value: 3, label: "Total Usable", color: "text-green-600" },
            { value: 2, label: "Balance Left", color: "text-purple-500" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-3 text-center flex flex-col justify-center h-[60px]" // reduced height
            >
              <p className={`${item.color} font-semibold text-lg`}>
                {item.value}
              </p>
              <p className="text-gray-700 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Right side - Progress & Info */}
        <div className="border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-6 w-full md:w-1/2 flex flex-col justify-between h-32 ">
          <div className="flex flex-wrap justify-between items-center text-sm font-medium mb-4">
            <p>
              Leaves Taken This Month: <span className="text-red-500">1</span>
            </p>
            <p>
              Remaining Leaves: <span className="text-green-600">2</span>
            </p>
          </div>
          <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden mb-4">
            <div
              className="absolute top-0 left-0 h-3 bg-indigo-500 rounded-full"
              style={{ width: "33.33%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>1 Leave Taken</span>
            <span>3 Total</span>
          </div>
        </div>
      </div>

      {/* Document Section */}
      <div className="bg-white border-[1px] border-[rgba(207,212,223,1)] rounded-lg p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Employee Documents</h2>
        {employee.documents && Object.keys(employee.documents).length > 0 ? (
          <table className="min-w-full text-sm border-[1px] border-[rgba(207,212,223,1)]">
            <thead className="bg-gray-100 border-[1px] border-[rgba(207,212,223,1)]">
              <tr>
                <th className="p-2 text-left border-[1px] border-[rgba(207,212,223,1)]">
                  Document
                </th>
                <th className="p-2 text-left border-[1px] border-[rgba(207,212,223,1)]">
                  Type
                </th>
                <th className="p-2 text-left border-[1px] border-[rgba(207,212,223,1)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(employee.documents).map(
                ([key, fileDataUrl]) =>
                  fileDataUrl && (
                    <tr
                      key={key}
                      className="hover:bg-gray-50 border-[1px] border-[rgba(207,212,223,1)]"
                    >
                      <td className="p-2 capitalize border-[1px] border-[rgba(207,212,223,1)]">
                        {key.replace(/([A-Z])/g, " $1")}
                      </td>
                      <td className="p-2 border-[1px] border-[rgba(207,212,223,1)]">
                        Stored File
                      </td>
                      <td className="p-2 flex gap-2 border-[1px] border-[rgba(207,212,223,1)]">
                        <button
                          className="p-1 border rounded hover:bg-gray-100"
                          onClick={() => alert("Edit not implemented yet")}
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          className="p-1 border rounded hover:bg-gray-100"
                          onClick={() =>
                            handleDownload(
                              fileDataUrl,
                              `${key}-${employee.fullName}`
                            )
                          }
                        >
                          <Download size={16} />
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-sm mt-2">
            No documents available for this employee.
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeProfile;
