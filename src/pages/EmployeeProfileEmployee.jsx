// src/pages/EmployeeProfileEmployee.jsx

import React from "react";
import { Download, Edit, Plus, ChevronDown, Calendar } from "lucide-react";
import TopbarEmployee from "../components/TopbarEmployee";


const GreetingBanner = ({ name }) => {
  const currentTime = new Date();
  const hours = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const date = currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white rounded-2xl p-4 px-6 flex justify-between items-center shadow-md mb-4">
      {/* Left Side: Greeting */}
      <div>
        <h1 className="text-lg sm:text-xl font-semibold">Good Morning, {name}!</h1>
        <p className="text-sm text-white/80">Welcome to your personal dashboard</p>
      </div>
      {/* Right Side: Time + Date */}
      <div className="text-right">
        <p className="text-lg font-medium">{hours}</p>
        <p className="text-sm text-white/80">{date}</p>
      </div>
    </div>
  );
};

const EmployeeProfileEmployee = () => {
  const employee = {
    id: "2443",
    fullName: "Rishubh Rawat",
    position: "UI/UX Designer",
    department: "Design",
    email: "rr89985@gmail.com",
    phone: "7896513233",
    joiningDate: "April 10th, 2025",
    emergencyContact: "7896513233 (Rishu)",
    currentAddress: "Balupur chowk, Dehradun, Uttarakhand-249201",
    permanentAddress: "Khand Gaon, Rishikesh, Uttarakhand-249201",
    documents: [
      {
        name: "Rishubh Rawat Resume",
        type: "PDF",
        uploadDate: "May 1st, 2021",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        name: "Offer Letter",
        type: "PDF",
        uploadDate: "May 1st, 2021",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  };

  const meetings = [
    {
      title: "Marketing Meeting",
      subtitle: "Meeting",
      time: "9:30 am",
      date: "07/04/2025"
    },
    {
      title: "Marketing Meeting",
      subtitle: "Client Meeting",
      time: "4:30 pm",
      date: "07/04/2025"
    },
    {
      title: "Rohit Interview",
      subtitle: "Job Interview",
      time: "12:30 pm",
      date: "08/04/2025"
    },
    {
      title: "Marketing Meeting",
      subtitle: "Meeting",
      time: "4:30 pm",
      date: "08/04/2025"
    }
  ];

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    link.click();
  };
  // Download all files
  const handleDownloadAll = (documents) => {
    documents.forEach((doc) => {
      handleDownload(doc.url, doc.name);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full" >
      <TopbarEmployee />
      <GreetingBanner name={employee.fullName} />
  


      {/* Main Content */}
      <div className="flex-grow p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1.3fr] gap-4 w-full max-w-[1440px] mx-auto">
       {/* Profile */}
<div className="bg-white rounded-xl border-{#8D9096} p-6 shadow-md flex flex-col items-center col-span-1">
  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-5xl text-gray-500 mb-4">
    👤
  </div>
  <p className="text-blue-600 font-medium text-sm mb-1">{employee.id}</p>
  <h2 className="text-xl font-semibold mb-2">{employee.fullName}</h2>
  <div className="bg-green-100 text-green-800 text-xs px-4 py-1 rounded-full mb-4">Active</div>

  <div className="text-sm text-gray-700 w-full space-y-2">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-gray-500 text-base">badge</span>
      <span>{employee.position}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-gray-500 text-base">work</span>
      <span>{employee.department}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-gray-500 text-base">mail</span>
      <span>{employee.email}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-gray-500 text-base">call</span>
      <span>{employee.phone}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-gray-500 text-base">event</span>
      <span>Joined : {employee.joiningDate}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-gray-500 text-base">person</span>
      <span>Father Name: Sitab Singh Rawat</span>
    </div>
  </div>

  <hr className="w-full my-4 border-gray-200" />

  <div className="text-sm text-gray-900 w-full">
    <p className="font-semibold">Emergency Contact:</p>
    <p className="text-gray-700 mb-3">{employee.emergencyContact}</p>

    <p className="font-semibold">Current Address:</p>
    <p className="text-gray-700 mb-3">{employee.currentAddress}</p>

    <p className="font-semibold">Permanent Address:</p>
    <p className="text-gray-700">{employee.permanentAddress}</p>
  </div>
</div>

      {/* My Attendance */}
<div className="bg-white rounded-2xl border-{#8D9096} p-4 shadow-sm col-span-1">
  <div className="flex justify-between items-center mb-3">
    <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
      My Attendance <span className="text-gray-400 cursor-pointer">ℹ️</span>
    </h2>
    <p className="text-sm text-gray-800">Total Working Hours Today <span className="text-indigo-600 font-semibold">00</span></p>
  </div>

  <div className="grid grid-cols-2 gap-2 mb-3">
    <div>
      <p className="text-sm text-gray-700">Today's Status</p>
      <span className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-full">Not Punched In</span>
    </div>
    <div>
      <p className="text-sm text-gray-700">Punch In</p>
      <span className="text-sm text-gray-600">-- : --</span>
    </div>
  </div>

  <div className="bg-green-100 text-green-900 text-sm font-medium text-center py-2 rounded-lg mb-3">
    You are currently PUNCHED IN
  </div>

  <div className="flex items-center text-sm text-green-700 font-medium gap-2 mb-3">
    <span className="text-green-600">🟢</span> Biometric Connected
    <span className="text-gray-400 cursor-pointer">ℹ️</span>
  </div>

  <hr className="my-2 border-gray-200" />

  <p className="text-sm text-gray-600 mb-2 font-semibold">Last 7 Days</p>
  <div className="overflow-x-auto border rounded-md">
    <table className="min-w-full text-sm text-gray-800">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="py-2 px-3 font-medium">Day</th>
          <th className="py-2 px-3 font-medium">Punch In</th>
          <th className="py-2 px-3 font-medium">Punch Out</th>
          <th className="py-2 px-3 font-medium">Hours</th>
          <th className="py-2 px-3 font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { day: "Mon", in: "09:00 AM", out: "06:00 PM", hrs: "9", status: "✅" },
          { day: "Tue", in: "09:10 AM", out: "06:00 PM", hrs: "8.5", status: "✅" },
          { day: "Wed", in: "--", out: "--", hrs: "-", status: "❌" },
          { day: "Thu", in: "09:00 AM", out: "01:00 PM", hrs: "4", status: "⚠️" },
          { day: "Fri", in: "09:05 AM", out: "06:05 PM", hrs: "9", status: "✅" },
          { day: "Sat", in: "--", out: "--", hrs: "-", status: "❌" },
          { day: "Sun", in: "--", out: "--", hrs: "-", status: "❌" },
        ].map((row, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-50">
            <td className="px-3 py-2">{row.day}</td>
            <td className="px-3 py-2">{row.in}</td>
            <td className="px-3 py-2">{row.out}</td>
            <td className="px-3 py-2">{row.hrs}</td>
            <td className="px-3 py-2 text-lg">
              {row.status === "✅" && <span className="text-green-600">✅</span>}
              {row.status === "❌" && <span className="text-red-500">❌</span>}
              {row.status === "⚠️" && <span className="text-yellow-500">⚠️</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="text-xs text-center text-gray-500 bg-gray-100 mt-3 py-2 rounded">
    Attendance is recorded automatically via fingerprint scanner at the office.
  </p>
</div>


      {/* Right Side: Attendance Records + Leave Balance */}
<div className="flex flex-col gap-4 col-span-1">

  {/* Attendance Records */}
  <div className="bg-white rounded-2xl border-{#8D9096} p-4 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-base font-semibold flex items-center gap-1">
        Attendance Records <span className="text-gray-400 cursor-pointer">ℹ️</span>
      </h2>
      <button className="text-sm text-gray-600 border border-gray-300 rounded px-2 py-1 flex items-center gap-1">
        This month <ChevronDown size={16} />
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div className="border rounded-xl p-3 text-center">
        <p className="text-indigo-600 font-bold text-lg">22</p>
        <p className="text-sm text-gray-600">Present</p>
      </div>
      <div className="border rounded-xl p-3 text-center">
        <p className="text-blue-600 font-bold text-lg">3</p>
        <p className="text-sm text-gray-600">Late</p>
      </div>
      <div className="border rounded-xl p-3 text-center">
        <p className="text-purple-600 font-bold text-lg">4</p>
        <p className="text-sm text-gray-600">Total Absent</p>
      </div>
      <div className="border rounded-xl p-3 text-center">
        <p className="text-green-600 font-bold text-lg">1</p>
        <p className="text-sm text-gray-600">Work From Home</p>
      </div>
    </div>
    <p className="text-sm text-gray-600 flex items-center gap-1">
      <span className="text-gray-500">⏱</span> Total Working Hours: <span className="text-indigo-600 font-medium ml-1">176 hrs</span>
    </p>
  </div>

  {/* Leave Balance */}
  <div className="bg-white rounded-3xl border-{#8D9096} p-4 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-base font-semibold flex items-center gap-4">
        Leave Balance This Month <span className="text-gray-400 cursor-pointer">ℹ️</span>
      </h2>
      <button className="text-white bg-indigo-500 hover:bg-indigo-600 text-xs px-3 py-1 rounded flex items-center gap-1">
        <Plus size={14} /> Add Leave
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div className="border rounded-xl p-3 text-center">
        <p className="text-blue-600 font-bold text-lg">1</p>
        <p className="text-sm text-gray-600">Current Month</p>
      </div>
      <div className="border rounded-xl p-3 text-center">
        <p className="text-red-500 font-bold text-lg">2</p>
        <p className="text-sm text-gray-600">Carried Forward</p>
      </div>
      <div className="border rounded-xl p-3 text-center">
        <p className="text-green-600 font-bold text-lg">3</p>
        <p className="text-sm text-gray-600">Total Usable</p>
      </div>
      <div className="border rounded-xl p-3 text-center">
        <p className="text-purple-600 font-bold text-lg">2</p>
        <p className="text-sm text-gray-600">Balance Left</p>
      </div>
    </div>
    <div className="text-sm text-gray-700 mb-2 text-center">
      Leaves Taken This Month: <span className="text-red-500 font-semibold">1</span> | Remaining: <span className="text-green-600 font-semibold">2</span>
    </div>
    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-1">
      <div className="bg-indigo-500 h-full w-1/3"></div>
    </div>
    <div className="text-xs flex justify-between text-gray-600">
      <span>1 Leave Taken</span>
    </div>
  </div>
</div>

{/* Salary Information and Upcoming Events & Meetings */}
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
  <div className="bg-white rounded-lg border-{#8D9096} p-4 shadow flex flex-col justify-center items-center text-gray-500 text-sm">
    Salary Information (to integrate)
  </div>

  <div className="bg-white rounded-2xl border-{#8D9096} p-4 shadow-sm w-full">
    <h2 className="text-base font-semibold text-gray-800 mb-3">Upcoming Events & Meetings</h2>
    <div className="divide-y">
      {meetings.map((meeting, index) => (
        <div key={index} className="flex justify-between items-center py-3">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{meeting.title}</p>
              <p className="text-xs text-gray-500">{meeting.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">{meeting.time}</p>
            <p className="text-xs text-gray-500">{meeting.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Documents Section */}
<div className="bg-white rounded-lg border border-[#8D9096] p-4 shadow lg:col-span-3 mt-4">
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-lg font-semibold">Employee Documents</h2>

    {/* Button group */}
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleDownloadAll(employee.documents)}
        className="flex items-center text-blue-600 border border-blue-600 text-sm rounded px-2 py-1 hover:bg-blue-50"
      >
        <Download size={16} className="mr-1" /> Download All
      </button>
      <button
        className="flex items-center text-white bg-blue-600 text-sm rounded px-2 py-1 hover:bg-blue-700"
      >
        <Plus size={16} className="mr-1" /> Add Document
      </button>
    </div>
  </div>

  <table className="min-w-full text-sm border">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 text-left">Document</th>
        <th className="p-2 text-left">Type</th>
        <th className="p-2 text-left">Upload Date</th>
        <th className="p-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {employee.documents.map((doc, idx) => (
        <tr key={idx} className="hover:bg-gray-50 border-b">
          <td className="p-2">{doc.name}</td>
          <td className="p-2">{doc.type}</td>
          <td className="p-2">{doc.uploadDate}</td>
          <td className="p-2 flex gap-2">
            <button
              onClick={() => alert("Edit modal will be implemented")}
              className="p-1 border rounded hover:bg-gray-100"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => handleDownload(doc.url, doc.name)}
              className="p-1 border rounded hover:bg-gray-100"
            >
              <Download size={16} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>
</div>
  );
};

export default EmployeeProfileEmployee;
