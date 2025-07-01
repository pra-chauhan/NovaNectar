import React, { useState } from "react";
import Toggle from "../componant/Toggle";

function Settings() {
  const [activeTab, setActiveTab] = useState("General");
  const [emailOn, setEmailOn] = useState(true);
  const [smsOn, setSmsOn] = useState(true);
  const [iDs, setIDs] = useState(false);

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

  const toggleDay = (day) => {
    setActiveDays((prev) => ({
      ...prev,
      [day]: !prev[day],
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
                <p className=" mb-4">Configure timing rules for attendance</p>
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
                  <span className="font-semibold text-lg " >Enable GPS Tracking</span>
                  <p>Track employee location during check-in</p>
                  </div>
                  <Toggle isOn={gpsTracking} onToggle={()=>setGpsTracking(!gpsTracking)} />
                </div>
                <div className="flex justify-between items-center mb-3">
                    <div>
                  <span className="font-semibold text-lg " >Restrict Check-in by Location</span>
                  <p>Only allow check-in from office premises</p>
                  </div>
                  <Toggle
                    isOn={locationRestrict}
                    onToggle={()=>setLocationRestrict(!locationRestrict )}
                  />
                </div>
                <div className="mb-2">
                  <label className="font-semibold text-lg " >Allowed Location Radius (meters)</label>
                  <input className="input w-full h-10 rounded-lg px-1  border" defaultValue="100" />
                </div>
              </div>

              {/* Automatic Rules */}
              <div className="bg-white p-5 rounded-xl border">
                <h2 className="font-semibold text-lg mb-1">Automatic Rules</h2>
                <p className="text-gray-500 mb-4">
                  Automated attendance processing rules
                </p>

                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg ">Auto-mark Absent</span>
                  <Toggle
                    onToggle={() => setAutoAbsent(!autoAbsent)}
                    isOn={autoAbsent}
                  />
                </div>

                <div className="mb-3">
                  <label className="font-semibold text-lg ">Auto-absent After (hours)</label>
                  <input className="input w-full h-10 rounded-lg px-1  border" defaultValue="2" />
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg ">Auto Check-out</span>
                  <Toggle isOn={autoCheckout} onToggle={() => setAutoCheckout(!autoCheckout)} />
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
      </div>
    </>
  );
}

export default Settings;
