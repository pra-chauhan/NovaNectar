import React, { useState } from "react";
import Toggle from "../componant/Toggle";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Settings() {
  const [eventTypes, setEventTypes] = useState([
    { id: 1, name: "Team Meeting", notify: false, visible: false },
    { id: 2, name: "1:1 Meeting", notify: false, visible: false },
    { id: 3, name: "Training Session", notify: false, visible: false },
    { id: 4, name: "External Event", notify: false, visible: false },
  ]);


  const [showModal, setShowModal] = useState(false);

  const [newType, setNewType] = useState({
    name: '',
    carryForward: false,
    requireApproval: false
  });

  const toggleField = (id, field) => {
    setEventTypes((prev) =>
      prev.map((e) => (e.id === id ? { ...e, [field]: !e[field] } : e))
    );
  };

  const deleteType = (id) => {
    if (confirm("Are you sure to delete this event type?")) {
      setEventTypes((prev) => prev.filter((e) => e.id !== id));
    }
  };


   const handleAddType = () => {
    if (!newType.name.trim()) return alert("Please enter a name");

    const newEvent = {
      id: Date.now(),
      name: newType.name,
      notify: newType.carryForward,
      visible: newType.requireApproval
    };
    setEventTypes(prev => [...prev, newEvent]);
    setNewType({ name: '', carryForward: false, requireApproval: false });
    setShowModal(false);
  };

  const performance = [
    "Task Completion Rate",
    "Quality Score",
    "Attendance Rate",
    "Goal Achievement",
    "Team Collaboration",
    "Innovation & Creativity",
  ];
  const [openModal, setOpenModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      role: "Super Admin",
      description: "Full access",
    },
    {
      role: "HR Manager",
      description: "Employee and payroll management",
    },
    {
      role: "Department Manager",
      description: "Team management and reporting",
    },
    {
      role: "Employee",
      description: "Self-service access only",
    },
  ];

  const handleConfigureClick = (role) => {
    setSelectedRole(role);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedRole(null);
  };

  const [activeTab, setActiveTab] = useState("General");
  const [emailOn, setEmailOn] = useState(true);
  const [smsOn, setSmsOn] = useState(true);
  const [iDs, setIDs] = useState(false);
  const [allow, setAllow] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [weeks, setWeeks] = useState(false);
  const [autoPayslip, setAutPayslip] = useState(false);
  const [emailPayslip, setEmailPayslip] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const [companyName, setCompanyName] = useState("Novanectar Pvt Limited");
  const [companyEmail, setCompanyEmail] = useState("hr@novanectar.com");
  const [companyAddress, setCompanyAddress] = useState(
    "123 Business District, Tech City"
  );
  const [gpsTracking, setGpsTracking] = useState(false);
  const [locationRestrict, setLocationRestrict] = useState(false);
  const [autoAbsent, setAutoAbsent] = useState(false);
  const [autoCheckout, setAutoCheckout] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [selfReview, setSelfReview] = useState(false);
  const [autoReview, setAutoReview] = useState(false);
  const [newDepartment, setNewDepartment] = useState("");

  const [activeDays, setActiveDays] = useState({
    Sunday: true,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: true,
  });

  const [activeBank, setActiveBank] = useState({
    "Bank Transfer (NEFT/RTGS)": false,
    "Cheque Payment": false,
    "UPI Payment": false,
    "Cash Payment": false,
  });

  const [leaveTypes, setLeaveTypes] = useState([
    {
      name: "Annual Leave",
      paid: true,
      total: 12,
      frequency: "Annually",
      carryForward: true,
      requireApproval: true,
      color: "bg-red-500",
    },
    {
      name: "Casual Leave",
      paid: true,
      total: 12,
      frequency: "Annually",
      carryForward: false,
      requireApproval: true,
      color: "bg-yellow-400",
    },
    {
      name: "Sick Leave",
      paid: true,
      total: 12,
      frequency: "Annually",
      carryForward: true,
      requireApproval: true,
      color: "bg-blue-500",
    },
    {
      name: "Maternity Leave",
      paid: true,
      total: 12,
      frequency: "Annually",
      carryForward: false,
      requireApproval: true,
      color: "bg-green-500",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    paid: true,
    total: 12,
    frequency: "Annually",
    carryForward: false,
    requireApproval: false,
    color: "bg-blue-500",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const openAddModal = () => {
    setFormData({
      name: "",
      paid: true,
      total: 12,
      frequency: "Annually",
      carryForward: false,
      requireApproval: false,
      color: "bg-blue-500",
    });
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setFormData(leaveTypes[index]);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    if (!formData.name) return alert("Leave name is required");

    if (editingIndex !== null) {
      const updated = [...leaveTypes];
      updated[editingIndex] = formData;
      setLeaveTypes(updated);
    } else {
      setLeaveTypes([...leaveTypes, formData]);
    }

    setIsModalOpen(false);
  };

  const toggleDay = (day) => {
    setActiveDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const togglBank = (bank) => {
    setActiveBank((prev) => ({
      ...prev,
      [bank]: !prev[bank],
    }));
  };

  const initialPerformanceState = performance.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});

  const [activePerformance, setActivePerformance] = useState(
    initialPerformanceState
  );

  const togglePerformance = (performanceKey) => {
    setActivePerformance((prev) => ({
      ...prev,
      [performanceKey]: !prev[performanceKey],
    }));
  };

  const [jobRoles, setJobRoles] = useState([
    "Web Developers",
    "HR Manager",
    "Data Analyst",
    "UI/UX Designer",
    "Graphic Designer",
    "SEO",
  ]);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const Bank = [
    "Bank Transfer (NEFT/RTGS)",
    "Cheque Payment",
    "UPI Payment",
    "Cash Payment",
  ];

  const [departments, setDepartments] = useState([
    "Developers",
    "HR",
    "Sales",
    "Designer",
    "Intern",
  ]);

  const addJobRole = () => {
    if (newRole.trim() !== "" && !jobRoles.includes(newRole)) {
      setJobRoles([...jobRoles, newRole.trim()]);
      setNewRole("");
    }
  };

  const addDepartment = () => {
    if (newDepartment.trim() !== "" && !departments.includes(newDepartment)) {
      setDepartments([...departments, newDepartment.trim()]);
      setNewDepartment("");
    }
  };

  const removeRole = (role) => {
    setJobRoles(jobRoles.filter((r) => r !== role));
  };

  const removeDepartment = (dep) => {
    setDepartments(departments.filter((d) => d !== dep));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        {/* Page Heading */}
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
          <span className="text-purple-500">⚙</span> Settings
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            "General",
            "Employees",
            "Attendance",
            "Leave",
            "Performance",
            "Payroll",
            "Security",
            "Meetings",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                activeTab === tab
                  ? "bg-purple-100 text-purple-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Company Info + System Defaults */}
        {activeTab === "General" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Company Information */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-gray-800 text-lg mb-1">
                  Company Information
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Basic company details and branding
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company Email
                    </label>
                    <input
                      type="email"
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company Address
                    </label>
                    <input
                      type="text"
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* System Defaults */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-gray-800 text-lg mb-1">
                  System Defaults
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Default settings for system-wide behavior
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Default Time Zone
                    </label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm">
                      <option>Asian/IST</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Default Currency
                    </label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm">
                      <option>Rupees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Fiscal Year Start
                    </label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm">
                      <option>April</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Salary Cycle
                    </label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm">
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white p-5 rounded-xl border mb-6">
              <h2 className="font-semibold text-gray-800 text-xl mb-1">
                Preferences
              </h2>

              <div className="flex  justify-between items-center mt-5">
                <div>
                  <label className="block text-lg font-medium text-black mb-1">
                    Appearance
                  </label>
                  <p className="text-sm text-gray-500 mb-4">
                    Customize how the platform looks
                  </p>
                </div>
                <div>
                  <select className="w-full px-3 py-2 border rounded-md text-sm">
                    <option>Bright</option>
                  </select>
                </div>
              </div>

              <div className="  border-t">
                <h3 className="text-xl font-medium mt-5 text-gray-700 mb-2">
                  Notification Preferences
                </h3>

                <div className="flex items-center justify-between py-2">
                  <span>Email Notifications</span>
                  <div
                    className={`w-10 h-5 flex items-center bg-${
                      emailOn ? "indigo-500" : "gray-400"
                    } rounded-full p-1 duration-300`}
                    onClick={() => setEmailOn(!emailOn)}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        emailOn ? "translate-x-5" : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between  py-2">
                  <span>SMS Notifications</span>
                  <div
                    className={`w-10 h-5 flex items-center bg-${
                      smsOn ? "indigo-500" : "gray-400"
                    } rounded-full p-1 duration-300`}
                    onClick={() => setSmsOn(!smsOn)}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        smsOn ? "translate-x-5" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700">
                Save General Setting
              </button>
            </div>
            {/* End of General Tab Content */}
          </>
        )}

        {activeTab === "Employees" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Employee ID Configuration */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-gray-800 text-lg mb-1">
                  Employee ID Configuration
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Settings for employee identification
                </p>

                <div className="flex justify-between items-center mb-4 ">
                  <span className="text-sm font-medium">
                    Auto-generate Employee IDs
                  </span>
                  <div
                    className={`w-10 h-5 flex items-center bg-${
                      iDs ? "indigo-500" : "gray-400"
                    } rounded-full p-0.5 duration-300`}
                    onClick={() => setIDs(!iDs)}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        iDs ? "translate-x-5" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ID Prefix
                    </label>
                    <input
                      type="text"
                      value="NN-24"
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ID Number Length
                    </label>
                    <input
                      type="number"
                      value="4"
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Default Working Hours */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-gray-800 text-lg mb-1">
                  Default Working Hours
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Set standard working hours and shift patterns
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Work Start Time
                    </label>
                    <input
                      type="time"
                      value="09:00"
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Work End Time
                    </label>
                    <input
                      type="time"
                      value="18:00"
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Break Duration (minutes)
                    </label>
                    <input
                      type="number"
                      value="45"
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Weekly Working Hours
                    </label>
                    <input
                      type="number"
                      value="40"
                      className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Job Roles and Departments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Job Roles */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-gray-800 text-lg mb-1">
                  Job Roles
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Manage available job roles
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="Add a new job role"
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                  <button
                    onClick={addJobRole}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md text-sm"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  {jobRoles.map((role) => (
                    <span
                      key={role}
                      className="bg-gray-200 px-2 py-1 rounded-full flex items-center"
                    >
                      {role}
                      <button
                        onClick={() => removeRole(role)}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-gray-800 text-lg mb-1">
                  Departments
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Manage organizational departments
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="text"
                    value={newDepartment}
                    onChange={(e) => setNewDepartment(e.target.value)}
                    placeholder="Add a new department"
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                  <button
                    onClick={addDepartment}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md text-sm"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  {departments.map((dep) => (
                    <span
                      key={dep}
                      className="bg-gray-200 px-2 py-1 rounded-full flex items-center"
                    >
                      {dep}
                      <button
                        onClick={() => removeDepartment(dep)}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700">
                Save Employees Setting
              </button>
            </div>
          </>
        )}

        {activeTab === "Attendance" && (
          <div className=" md:p-6 space-y-6 text-sm text-gray-700 font-sans">
            {/* Top Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Check-in/Check-out Rules */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Check-in/Check-out Rules
                </h2>
                <p className=" md:mb-10 mb-5">
                  Configure timing rules for attendance
                </p>
                <div className="grid grid-cols-2 gap-5">
                  <div className=" w-full">
                    <label className="text-md  font-medium">
                      Check-in Buffer Time (minutes)
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="20"
                    />
                    <p className="text-xs text-gray-400">
                      Grace period before marking late
                    </p>
                  </div>
                  <div className="w-full ">
                    <label className="text-md  font-medium">
                      Check-out Buffer Time (minutes)
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="20"
                    />
                    <p className="text-xs text-gray-400">
                      Early checkout allowance
                    </p>
                  </div>
                  <div className="w-full ">
                    <label className="text-md  font-medium">
                      Late Mark Threshold (minutes)
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="60"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-md  font-medium">
                      Half-Day Threshold (hours)
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg   border px-1"
                      defaultValue="4"
                    />
                  </div>
                </div>
              </div>

              {/* Weekend Settings */}
              <div className="bg-white md:p-5 p-2 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Weekend & Holiday Settings
                </h2>
                <p className=" mb-4 ">Configure non-working days</p>
                <div className="md:p-6">
                  <div className="border-2 border-gray-400 rounded-lg p-4">
                    <h3 className="text-md font-medium text-gray-700 mb-3">
                      Weekend Days
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {days.map((day) => (
                        <div key={day} className="flex items-center gap-1  ">
                          <Toggle
                            onToggle={() => toggleDay(day)}
                            isOn={activeDays[day]}
                          />
                          <span className="text-md  font-medium">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* GPS Settings */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Location & GPS Settings
                </h2>
                <p className=" mb-4">
                  Configure location-based attendance tracking
                </p>

                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="font-semibold text-lg ">
                      Enable GPS Tracking
                    </span>
                    <p>Track employee location during check-in</p>
                  </div>
                  <Toggle
                    isOn={gpsTracking}
                    onToggle={() => setGpsTracking(!gpsTracking)}
                  />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="font-semibold text-lg ">
                      Restrict Check-in by Location
                    </span>
                    <p>Only allow check-in from office premises</p>
                  </div>
                  <Toggle
                    isOn={locationRestrict}
                    onToggle={() => setLocationRestrict(!locationRestrict)}
                  />
                </div>
                <div className="mb-2">
                  <label className="font-semibold text-lg ">
                    Allowed Location Radius (meters)
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="100"
                  />
                </div>
              </div>

              {/* Automatic Rules */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-lg mb-1">Automatic Rules</h2>
                <p className="text-gray-500 mb-4">
                  Automated attendance processing rules
                </p>

                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="font-semibold text-lg ">
                      Auto-mark Absent
                    </span>
                    <p className="text-gray-500 mb-4">
                      Automatically mark absent if no check-in
                    </p>
                  </div>

                  <Toggle
                    onToggle={() => setAutoAbsent(!autoAbsent)}
                    isOn={autoAbsent}
                  />
                </div>

                <div className="mb-3">
                  <label className="font-semibold text-lg ">
                    Auto-absent After (hours)
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="2"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-lg ">
                      Auto Check-out
                    </span>
                    <p className="text-gray-500 mb-4">
                      Automatically check-out at end of day
                    </p>
                  </div>

                  <Toggle
                    isOn={autoCheckout}
                    onToggle={() => setAutoCheckout(!autoCheckout)}
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm">
                Save Attendance Setting
              </button>
            </div>
          </div>
        )}

        {activeTab === "Leave" && (
          <div className=" md:p-6 space-y-6 text-sm text-gray-700 font-sans">
            {/* Top Grid */}
            <div className="grid   gap-6">
              {/* Review Cycles */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Leave Types & Quotas
                </h2>
                <p className=" mb-4">
                  Manage different types of leave and their annual quotas
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leaveTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white border rounded-xl px-4 py-3"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800 flex items-center gap-2">
                          <span
                            className={`w-3 h-3 rounded-full ${type.color}`}
                          ></span>
                          {type.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {type.total} days per year •{" "}
                          {type.carryForward
                            ? "Carry Forward: Yes"
                            : "No Carry Forward"}{" "}
                          •{" "}
                          {type.requireApproval
                            ? "Requires Approval"
                            : "No Approval Needed"}
                        </p>
                      </div>
                      <button
                        onClick={() => openEditModal(index)}
                        className="border border-gray-400 text-sm px-4 py-1.5 rounded hover:bg-gray-100"
                      >
                        Edit
                      </button>
                    </div>
                  ))}

                  {/* Add Button */}
                  <div
                    className="flex items-center justify-center  bg-white border rounded-xl px-4 py-5 "
                    onClick={openAddModal}
                  >
                    <p className="text-black font-medium text-sm ">
                      + Add New Leave Type
                    </p>
                  </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-[90%] max-w-lg p-6 shadow-lg">
                      <h2 className="font-semibold text-lg mb-2">
                        {editingIndex !== null
                          ? "Edit Leave Type"
                          : "Add New Leave Type"}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Configure leave type settings including quotas, carry
                        forward rules, and applicability.
                      </p>

                      {/* Leave Name */}
                      <p className="text-md font-semibold py-1">
                        Leave Type Name
                      </p>
                      <input
                        type="text"
                        placeholder="e.g. casual leave, sick leave etc"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border px-3 py-2 text-sm rounded mb-4"
                      />

                      {/* Paid/Unpaid */}
                      <div className="  mb-4 text-sm">
                        <p className="text-md font-semibold py-1">
                          Leave Type Name
                        </p>
                        <div className="flex gap-4 ">
                          <label className="flex items-center gap-1">
                            <input
                              type="radio"
                              checked={formData.paid === true}
                              onChange={() =>
                                setFormData({ ...formData, paid: true })
                              }
                            />
                            Paid
                          </label>
                          <label className="flex items-center gap-1">
                            <input
                              type="radio"
                              checked={formData.paid === false}
                              onChange={() =>
                                setFormData({ ...formData, paid: false })
                              }
                            />
                            Unpaid
                          </label>
                        </div>
                      </div>

                      {/* Total + Frequency */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-md font-semibold  mb-1">
                            Total Leave
                          </label>
                          <input
                            type="number"
                            value={formData.total}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                total: parseInt(e.target.value),
                              })
                            }
                            className="w-full border px-3 py-2 text-sm rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-md font-semibold  mb-1">
                            Frequency
                          </label>
                          <select
                            value={formData.frequency}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                frequency: e.target.value,
                              })
                            }
                            className="w-full border px-3 py-2 text-sm rounded"
                          >
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                          </select>
                        </div>
                      </div>

                      {/* Toggles */}
                      <div className="flex justify-between items-center text-sm mb-2">
                        <label className="text-md font-semibold ">
                          Carry Forward Allowed
                        </label>
                        <Toggle
                          isOn={formData.carryForward}
                          onToggle={() =>
                            setFormData({
                              ...formData,
                              carryForward: !formData.carryForward,
                            })
                          }
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm mb-4">
                        <label className="text-md font-semibold ">
                          Require Approval
                        </label>
                        <Toggle
                          isOn={formData.requireApproval}
                          onToggle={() =>
                            setFormData({
                              ...formData,
                              requireApproval: !formData.requireApproval,
                            })
                          }
                        />
                      </div>

                      {/* Color Picker */}
                      <label className="block text-md font-semibold  mb-1">
                        Color Tag
                      </label>
                      <div className="flex gap-2 mb-6">
                        {[
                          "bg-red-500",
                          "bg-yellow-400",
                          "bg-purple-500",
                          "bg-blue-500",
                          "bg-amber-700",
                          "bg-gray-400",
                          "bg-green-500",
                        ].map((clr) => (
                          <div
                            key={clr}
                            onClick={() =>
                              setFormData({ ...formData, color: clr })
                            }
                            className={`w-5 h-5 rounded-full cursor-pointer ${clr} ${
                              formData.color === clr ? "ring-2 ring-black" : ""
                            }`}
                          ></div>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex justify-between">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleModalSubmit}
                          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                          {editingIndex !== null
                            ? "Update Leave Type"
                            : "Add Leave Type"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Carry Forward Rules
                </h2>
                <p className=" mb-4">Configure how unused leaves are handled</p>
                <div className="grid  gap-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg ">
                        Allow Carry Forward
                      </span>
                      <p className="text-gray-500 mb-4">
                        Allow unused leaves to carry forward to next year
                      </p>
                    </div>

                    <Toggle isOn={allow} onToggle={() => setAllow(!allow)} />
                  </div>
                  <div className=" w-full">
                    <label className="text-md  font-medium">
                      Maximum Carry Forward Days
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="1"
                    />
                  </div>
                  <div className="w-full ">
                    <label className="text-md  font-medium">
                      Validity of Carried Leaves
                    </label>
                    <div className="flex gap-4">
                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="month"
                      />
                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="1"
                      />
                    </div>
                  </div>
                  <div className=" w-full">
                    <label className="text-md  font-medium">Cycle Reset</label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="Annually"
                    />
                  </div>
                </div>
              </div>

              {/* Weekend Settings */}
              <div className="bg-white md:p-5 p-2 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Leave Rules & Restrictions
                </h2>
                <p className=" mb-4 ">
                  Configure leave application rules and restrictions
                </p>
                <div>
                  <div className=" w-full my-6">
                    <label className="text-md  font-medium">
                      Maximum Carry Forward Days
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="1"
                    />
                  </div>

                  <div className="w-full my-6 ">
                    <label className="text-md  font-medium ">
                      Maximum Consecutive Days
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1   border"
                      defaultValue="4"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg ">
                        Block Weekend Applications
                      </span>
                      <p className="text-gray-500 mb-4">
                        Don't allow leave applications for weekends
                      </p>
                    </div>

                    <Toggle isOn={weeks} onToggle={() => setWeeks(!weeks)} />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg ">
                        Block Holiday Applications
                      </span>
                      <p className="text-gray-500 mb-4">
                        Don't allow leave applications for holidays
                      </p>
                    </div>

                    <Toggle
                      isOn={holiday}
                      onToggle={() => setHoliday(!holiday)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm">
                Save leave Setting
              </button>
            </div>
          </div>
        )}

        {activeTab === "Performance" && (
          <div className=" md:p-6 space-y-6 text-sm text-gray-700 font-sans">
            {/* Top Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Review Cycles */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">Review Cycles</h2>
                <p className=" mb-4">Configure performance review schedules</p>
                <div className="grid  gap-5">
                  <div className=" w-full">
                    <label className="text-md  font-medium">
                      Review Frequency
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="monthly"
                    />
                  </div>
                  <div className="w-full ">
                    <label className="text-md  font-medium">
                      Review Day of Month
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="last working days"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg ">
                        Auto Check-out
                      </span>
                      <p className="text-gray-500 mb-4">
                        Automatically check-out at end of day
                      </p>
                    </div>

                    <Toggle
                      isOn={selfReview}
                      onToggle={() => setSelfReview(!selfReview)}
                    />
                  </div>
                </div>
              </div>

              {/* Weekend Settings */}
              <div className="bg-white md:p-5 p-2 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Task Scoring System
                </h2>
                <p className=" mb-4 ">
                  Configure daily task evaluation parameters
                </p>
                <div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className=" w-full">
                      <label className="text-md  font-medium">
                        Minimum Score
                      </label>
                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="2"
                      />
                    </div>
                    <div className="w-full g ">
                      <label className="text-md  font-medium ">
                        Maximum Score
                      </label>
                      <input
                        className="input w-full h-10 rounded-lg px-1   border"
                        defaultValue="4"
                      />
                    </div>
                  </div>
                  <div className="grid gap-7 my-6">
                    <div className="w-full  ">
                      <label className="text-md  font-medium">
                        Default Scoring Criteria
                      </label>
                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="work of quality"
                      />
                    </div>
                    <div className="flex justify-between items-center ">
                      <span className="font-semibold text-lg ">
                        Enable Employee Self-Review
                      </span>

                      <Toggle
                        isOn={autoReview}
                        onToggle={() => setAutoReview(!autoReview)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="bg-white md:p-5 p-2 rounded-xl border">
              <h2 className="font-semibold text-2xl mb-1">
                Performance Metrics
              </h2>
              <p className=" mb-4 ">Configure key performance indicators</p>
              <div className="md:p-6">
                <div className="border-2 border-gray-400 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-3 gap-x-20">
                    {performance.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between"
                      >
                        <span className="text-lg font-medium">{item}</span>
                        <Toggle
                          onToggle={() => togglePerformance(item)}
                          isOn={!!activePerformance[item]} // fallback in case state is undefined
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm">
                Save Performances Setting
              </button>
            </div>
          </div>
        )}

        {activeTab === "Payroll" && (
          <div className=" md:p-6 space-y-6 text-sm text-gray-700 font-sans">
            {/* Top Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Check-in/Check-out Rules */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Default Salary Structure
                </h2>
                <p className=" md:mb-10 mb-6">
                  Configure default salary components
                </p>
                <div className="grid grid-cols-2 gap-5">
                  <div className=" w-full">
                    <label className="text-md  font-medium">Basic Salary</label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="20"
                    />
                  </div>
                  <div className="w-full ">
                    <label className="text-md  font-medium">
                      Deduction (%)
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="20"
                    />
                  </div>
                </div>
                <div className="w-full my-6 ">
                  <label className="text-md  font-medium">
                    Transport Allowance(%)
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="no"
                  />
                </div>
              </div>

              {/* Weekend Settings */}
              <div className="bg-white md:p-5 p-2 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">Payment Methods</h2>
                <p className=" mb-4 ">Configure supported payment methods</p>
                <div className="md:p-6">
                  <div className="border-2 border-gray-400 rounded-lg p-4">
                    <div className="grid  gap-3">
                      {Bank.map((Bank) => (
                        <div
                          key={Bank}
                          className=" flex items-center justify-between"
                        >
                          <span className="text-md  font-medium">{Bank}</span>

                          <Toggle
                            onToggle={() => togglBank(Bank)}
                            isOn={activeBank[Bank]}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Weekend Settings */}
              <div className="bg-white md:p-5 p-2 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Payroll Processing
                </h2>
                <p className=" mb-4 ">
                  Configure payroll cycle and processing rule
                </p>
                <div>
                  <div className=" w-full my-6">
                    <label className="text-md  font-medium">
                      Payroll Lock Date
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="1"
                    />
                  </div>

                  <div className="w-full my-6 ">
                    <label className="text-md  font-medium ">
                      Salary Payment Date
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1   border"
                      defaultValue="4"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg ">
                        Auto-generate Payslips
                      </span>
                      <p className="text-gray-500 mb-4">
                        Automatically create review forms for each cycle
                      </p>
                    </div>

                    <Toggle
                      isOn={autoPayslip}
                      onToggle={() => setAutPayslip(!autoPayslip)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-lg ">
                        Tax & Contribution Settings
                      </span>
                      <p className="text-gray-500 mb-4">
                        Automatically email payslips to employees
                      </p>
                    </div>

                    <Toggle
                      isOn={emailPayslip}
                      onToggle={() => setEmailPayslip(!emailPayslip)}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Tax & Contribution Settings
                </h2>
                <p className=" mb-4">PF Employer Contribution (%)</p>
                <div className="grid  gap-5">
                  <div className="w-full flex gap-5 ">
                    <div>
                      <label className="text-md  font-medium">
                        PF Employee Contribution (%)
                      </label>

                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="month"
                      />
                    </div>
                    <div>
                      <label className="text-md  font-medium">
                        PF Employer Contribution (%)
                      </label>
                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="1"
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-5 ">
                    <div>
                      <label className="text-md  font-medium">
                        ESI Employee Contribution (%)
                      </label>

                      <input
                        className="input w-full h-10 rounded-lg px-1  border"
                        defaultValue="month"
                      />
                    </div>
                    <div>
                      <label className="text-md  font-medium">
                        Maximum Score
                      </label>
                      <input
                        className="input min-w-full h-10 rounded-lg px-1  border"
                        defaultValue="1"
                      />
                    </div>
                  </div>

                  <div className=" w-full">
                    <label className="text-md  font-medium">
                      Professional Tax (Monthly)
                    </label>
                    <input
                      className="input w-full h-10 rounded-lg px-1  border"
                      defaultValue="200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm">
                Save payroll Setting
              </button>
            </div>
          </div>
        )}

        {activeTab === "Security" && (
          <div className=" md:p-6 space-y-6 text-sm text-gray-700 font-sans">
            {/* Top Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* authontication*/}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">
                  Authentication Settings
                </h2>
                <p className="  mb-6">
                  Configure login and authentication requirements
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-lg ">
                      Two-Factor Authentication
                    </span>
                    <p className="text-gray-500 mb-4">
                      Require 2FA for all user accounts
                    </p>
                  </div>

                  <Toggle
                    isOn={twoFactor}
                    onToggle={() => setTwoFactor(!twoFactor)}
                  />
                </div>

                <div className="w-full mb-6 ">
                  <label className="text-md  font-medium">
                    Session Timeout (minutes)
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="30 min"
                  />
                </div>

                <div className="w-full my-6 ">
                  <label className="text-md  font-medium">
                    Maximum Login Attempts
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="no"
                  />
                </div>
                <div className="w-full my-6 ">
                  <label className="text-md  font-medium">
                    Account Lockout Duration (minutes)
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="no"
                  />
                </div>
              </div>

              {/*  password */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-xl mb-1">Password Policy</h2>
                <p className="  mb-6">
                  Configure password requirements and reset policies
                </p>

                <div className="w-full my-6 ">
                  <label className="text-md  font-medium">
                    Minimum Password Length
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="30 min"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-lg ">
                      Require Uppercase Letters
                    </span>
                    <p className="text-gray-500 mb-4">
                      Password must contain uppercase letters
                    </p>
                  </div>

                  <Toggle
                    isOn={twoFactor}
                    onToggle={() => setTwoFactor(!twoFactor)}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-lg ">
                      Require Numbers
                    </span>
                    <p className="text-gray-500 mb-4">
                      Password must contain numbers
                    </p>
                  </div>

                  <Toggle
                    isOn={twoFactor}
                    onToggle={() => setTwoFactor(!twoFactor)}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-lg ">
                      Require Special Characters
                    </span>
                    <p className="text-gray-500 mb-4">
                      Password must contain special characters
                    </p>
                  </div>

                  <Toggle
                    isOn={twoFactor}
                    onToggle={() => setTwoFactor(!twoFactor)}
                  />
                </div>

                <div className="w-full mb-6 ">
                  <label className="text-md  font-medium">
                    Password Expiry (days)
                  </label>
                  <input
                    className="input w-full h-10 rounded-lg px-1  border"
                    defaultValue="never"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className=" mx-auto">
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  Leave Types & Quotas
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Manage different types of leave and their annual quotas
                </p>

                <div className="space-y-3">
                  {roles.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 border rounded-md hover:shadow-sm"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {item.role}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleConfigureClick(item.role)}
                        className="border border-gray-300 rounded px-4 py-1 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Configure
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal */}
              {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                  <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Configure Access - {selectedRole}
                      </h3>
                      <button
                        onClick={handleClose}
                        className="text-gray-500 text-xl"
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      You can define access levels and leave rules for the role:{" "}
                      <strong>{selectedRole}</strong>
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-2 px-4 py-2 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Save Button */}
            <div className="text-right">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm">
                Save payroll Setting
              </button>
            </div>
          </div>
        )}

        {activeTab === "Meetings" && (
          <div className=" mx-auto p-6 border rounded-2xl">
            <div className="flex items-start justify-between ">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  Meeting & Event Settings
                </h2>
                <p className="text-md  mb-4">
                  Manage meeting and event types, notifications, and visibility
                  settings
                </p>
              </div>

              <button 
              onClick={() => setShowModal(true)}
               className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-md text-sm">
                + Add Type
              </button>
            </div>

            <div className="bg-white rounded-xl border p-5">
              <div className=" items-center mb-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Meeting & Event Types
                </h3>
                <p>
                  Configure different types of meetings and events, their
                  notification settings, and visibility on employee dashboards.
                </p>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-gray-600 text-left">
                    <th className="py-2">Event/Meeting Name</th>
                    <th className="py-2">Send Notifications</th>
                    <th className="py-2">Visible on Dashboard</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {eventTypes.map((event) => (
                    <tr key={event.id} className="border-b">
                      <td className="py-3">{event.name}</td>
                      <td>
                        <label className="inline-flex items-center cursor-pointer">
                          <Toggle
                        
                            isOn={event.notify}
                            onToggle={() => toggleField(event.id, "notify")}
                          />
                          
                        </label>
                      </td>
                      <td>
                        <label className="inline-flex items-center cursor-pointer">
                          <Toggle
                            
                            isOn={event.visible}
                            onToggle={() => toggleField(event.id, "visible")}
                          />
                        
                        </label>
                      </td>
                      <td className="space-x-2">
                        <button className="text-black hover:text-blue-800 text-2xl">
                          <FaRegEdit />
                        </button>
                        <button
                          onClick={() => deleteType(event.id)}
                          className="text-red-600 hover:text-red-800 text-2xl"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {eventTypes.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-gray-400 py-4"
                      >
                        No event types available.
                      </td>
                    </tr>

                    
                  )}
                </tbody>
              </table>
              
            </div>
              {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Add New Meeting/Event Type</h3>
            <p className="text-sm text-gray-500 mb-4">Create a new type of meeting or event for your organization.</p>

            <div className="mb-4">
              <label className="block text-sm mb-1">Leave Type Name</label>
              <input
                type="text"
                placeholder="eg. Team Meeting, Sick Leave etc"
                className="w-full border rounded px-3 py-2"
                value={newType.name}
                onChange={(e) => setNewType({ ...newType, name: e.target.value })}
              />
            </div>

            <div className="flex justify-between items-center mb-3">
              <span>Carry Forward Allowed</span>
              <label className="inline-flex items-center cursor-pointer">
                <Toggle
                  type="checkbox"
                  className="sr-only peer"
                  isOn={newType.carryForward}
                  onToggle={() =>
                    setNewType(prev => ({ ...prev, carryForward: !prev.carryForward }))
                  }
                />
                
              </label>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span>Require Approval</span>
              <label className="inline-flex items-center cursor-pointer">
                <Toggle
                  isOn={newType.requireApproval}
                  onToggle={() =>
                    setNewType(prev => ({ ...prev, requireApproval: !prev.requireApproval }))
                  }
                />
                
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-3  border  hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddType}
                className="bg-indigo-500 text-white px-3  py-1 rounded-xl hover:bg-indigo-600"
              >
                Add Type
              </button>
            </div>
          </div>
        </div>
      )}
          </div>

        )}
      </div>
    </>
  );
}

export default Settings;
