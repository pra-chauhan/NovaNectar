import React, { useState } from "react";
import { Calendar, Search, ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Vecto from "../assets/Vector1.png";
import jam from "../assets/jam_share.png";
import Vector from "../assets/Vector2.png";
import si_money from "../assets/si_money-line.png";
import Frame457 from "../assets/Frame457.png";
import frame from "../assets/frame.png";
import Frame458 from "../assets/Frame458.png";
import Frame4581 from "../assets/Frame4581.png";

const employees = [
  {
    name: "Amit Rajmola",
    title: "Senior UI/UX Designer",
    invoice: "#234786",
    attendance: { P: 22, A: 0, L: 2 },
    salary: "₹85,000",
    allowance: "₹49,600",
    deduction: "₹17,380",
    net: "₹1,17,220",
    status: "Pay",
  },
  {
    name: "Amit Rajmola",
    title: "Senior UI/UX Designer",
    invoice: "#234786",
    attendance: { P: 22, A: 0, L: 2 },
    salary: "₹85,000",
    allowance: "₹49,600",
    deduction: "₹17,380",
    net: "₹1,17,220",
    status: "Paid",
  },
  
];

const getStatusClass = (status) => {

 

  return status === "Paid"
    ? "bg-green-50 text-green-600 border border-green-300"
    : "bg-white text-indigo-600 border border-indigo-300";
};

function Payroll() {




  const [selectedDate, setSelectedDate] = useState(new Date("2025-05-03"));
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("All Status");
   const [active, setActive] = useState("one")





  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    console.log("Status selected:", e.target.value);
  };
  return (
    <>
      <div className="px-4  mx-auto  mt-5  ">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <img src={Vecto} alt="Vector1" className="w-5 h-5" />
            <p className="text-3xl font-bold">Payroll</p>
          </div>
          <div className=" flex gap-4 items-center">
            <div className="flex items-center gap-1 rounded-2xl border px-3 py-2">
              <img src={jam} alt="jam" />
              <p>expert</p>
            </div>
            <div className="flex items-center gap-1 rounded-2xl border px-3 py-2 bg-blue-400">
              <img src={Vector} alt="jam" />
              <p>Pay All Employee</p>
            </div>
          </div>
        </div>
        <div className=" gap-4   mt-5 bg-white rounded-xl  mx-auto md:flex">
          {/* Payroll Summary */}
          <div className="w-full bg-white shadow-md rounded-2xl p-5 flex justify-between items-center border border-gray-200 my-2">
            {/* Left Section */}
            <div className="w-full ">
              <div className="flex items-center gap-4 -mt-3">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Payroll Summary
                  </h2>
                  <p className="text-sm text-gray-500">From 1–30 April, 2025</p>
                </div>
                <button className="text-sm text-blue-600 border border-blue-600 px-2 py-0.5  rounded-full hover:bg-blue-50 transition">
                  View Report
                </button>
              </div>

              <div className="mt-6 flex gap-9 text-sm px-5">
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="w-1 h-10 bg-indigo-500 inline-block rounded-sm"></span>
                  <div>
                    <p> Pending</p>
                    <p className="text-lg font-semibold text-gray-800 ">
                      ₹ 1,34,000
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <span className="w-1 h-10 bg-black inline-block rounded-sm"></span>
                    <div>
                      <p> Pending</p>
                      <p className="text-lg font-semibold text-gray-800 ">
                        ₹ 1,34,000
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <span className="w-1 h-10 bg-yellow-500 inline-block rounded-sm"></span>
                     <div>
                      <p>  Paid</p>
                      <p className="text-lg font-semibold text-gray-800 ">
                          ₹ 1,10,250
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Donut Chart (SVG Static) */}
            <div className="relative w-30 h-30">
              <svg className="transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  className="text-gray-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="text-indigo-500"
                  strokeWidth="3"
                  strokeDasharray="45, 100"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="text-yellow-500"
                  strokeWidth="3"
                  strokeDasharray="30, 100"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                45%
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="w-full my-2 bg-white shadow-md rounded-2xl p-5 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              {/* Cardholder */}
              <div>
                <p className="text-gray-500 flex items-center gap-1">
                  <span className="w-1 h-4 bg-indigo-500 inline-block rounded-sm"></span>
                  Cardholder Name
                </p>
                <p className="font-semibold mt-1">NovaNectar Pvt Lmt Company</p>
              </div>

              {/* Account Number */}
              <div>
                <p className="text-gray-500 flex items-center gap-1">
                  <span className="w-1 h-4 bg-indigo-500 inline-block rounded-sm"></span>
                  Account Number
                </p>
                <p className="font-semibold mt-1">**** **** **** 7684</p>
              </div>

              {/* Method */}
              <div>
                <p className="text-gray-500 flex items-center gap-1">
                  <span className="w-1 h-4 bg-indigo-500 inline-block rounded-sm"></span>
                  Method
                </p>
                <p className="font-semibold mt-1">Debit Card</p>
              </div>

              {/* Expiration */}
              <div>
                <p className="text-gray-500 flex items-center gap-1">
                  <span className="w-1 h-4 bg-indigo-500 inline-block rounded-sm"></span>
                  Expiration
                </p>
                <p className="font-semibold mt-1">07/30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex  mt-5 gap-4 items-center">
          <div className="w-full my-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex justify-between items-start">
            <div>
              <h2 className="text-sm font-medium text-gray-700">
                Average Salary
              </h2>
              <p className="text-xl font-semibold text-indigo-600 mt-1">
                ₹1,00,780
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Per employee monthly average
              </p>
            </div>
            <div className="text-gray-500">
              <img src={si_money} alt="" />
            </div>
          </div>
          <div className="w-full my-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex justify-between items-start">
            <div>
              <h2 className="text-sm font-medium text-gray-700">
                Average Salary
              </h2>
              <p className="text-xl font-semibold text-indigo-600 mt-1">
                ₹1,00,780
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Per employee monthly average
              </p>
            </div>
            <div className="text-gray-500">
              <img src={si_money} alt="" />
            </div>
          </div>
          <div className="w-full my-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex justify-between items-start">
            <div>
              <h2 className="text-sm font-medium text-gray-700">
                Average Salary
              </h2>
              <p className="text-xl font-semibold text-indigo-600 mt-1">
                ₹1,00,780
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Per employee monthly average
              </p>
            </div>
            <div className="text-gray-500">
              <img src={si_money} alt="" />
            </div>
          </div>
          <div className="w-full my-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex justify-between items-start">
            <div>
              <h2 className="text-sm font-medium text-gray-700">
                Average Salary
              </h2>
              <p className="text-xl font-semibold text-indigo-600 mt-1">
                ₹1,00,780
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Per employee monthly average
              </p>
            </div>
            <div className="text-gray-500">
              <img src={si_money} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between my-10 items-center">
          <div>
            <p className="text-2xl font-bold">List of Payroll</p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-wrap items-center gap-5 max-w-full w-fit">

                 {active !== 'one' ? (
          <button
            onClick={() => setActive('one')}
            className=" text-white  rounded-md"
          >
          
           <img src={Frame4581} alt="Frame457" />
          </button>
        ) : (
          <button
            onClick={() => setActive("two")}
              className=" text-white  rounded-md"
          >
          
           <img src={Frame457} alt="Frame457" />
          </button>
        )}

              {/* Menu Icon */}
              {active !== 'two' ? (
          <button
            onClick={() => setActive('two')}
             className=" text-white  rounded-md"
          >
            
            <img src={Frame458} alt="Frame457" />
          </button>
        ) : (
          <button
            onClick={() => setActive("one")}
             className=" text-white  rounded-md"
          >
           <img src={frame} alt="Frame457" />
          </button>
        )}
              <button className="bg-gray-100 text-gray-700  rounded-md">
               
              </button>

              {/* Date Picker */}
              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md text-sm text-gray-600">
                <Calendar size={16} className="mr-2 text-gray-500" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    console.log("Date selected:", date);
                  }}
                  dateFormat="dd MMM yyyy"
                  className="bg-transparent outline-none"
                />
                <ChevronDown size={16} className="ml-2 text-gray-500" />
              </div>

              {/* Search Input */}
              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md text-sm text-gray-600 w-48">
                <Search size={16} className="mr-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log("Search:", e.target.value);
                  }}
                  className="bg-transparent outline-none w-full"
                />
              </div>

              {/* Status Dropdown */}
              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md text-sm text-gray-600">
                <select
                  value={status}
                  onChange={handleStatusChange}
                  className="bg-transparent outline-none"
                >
                  <option>All Status</option>
                  <option>Pay</option>
                  <option>Paid</option>
                  <option>On Hold</option>
                </select>
              </div>
            </div>
          </div>
        </div>
          {active === 'one' && (
        <div className="overflow-auto bg-white rounded-xl shadow border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-3">Employees</th>
                <th className="px-4 py-3">Invoice ID</th>
                <th className="px-4 py-3">Attendance</th>
                <th className="px-4 py-3">Basic Salary</th>
                <th className="px-4 py-3">Allowances</th>
                <th className="px-4 py-3">Deductions</th>
                <th className="px-4 py-3">Net Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
            
              {employees.map((emp, idx) => (
                <tr key={idx} className="border-t border-gray-100">
                  <td className="px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-medium text-gray-900">{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.title}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{emp.invoice}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <span className="text-green-700 text-xs bg-green-100 px-2 py-0.5 rounded">
                      P:{emp.attendance.P}
                    </span>
                    <span className="text-red-600 text-xs bg-red-100 px-2 py-0.5 rounded">
                      A:{emp.attendance.A}
                    </span>
                    <span className="text-blue-700 text-xs bg-blue-100 px-2 py-0.5 rounded">
                      L:{emp.attendance.L}
                    </span>
                  </td>
                  <td className="px-4 py-3">{emp.salary}</td>
                  <td className="px-4 py-3">{emp.allowance}</td>
                  <td className="px-4 py-3">{emp.deduction}</td>
                  <td className="px-4 py-3 font-semibold">{emp.net}</td>
                  <td className="px-4 py-3">
                    <button
                      className={`text-xs px-3 py-1 rounded-full ${getStatusClass(
                        emp.status
                      )}`}
                    >
                      {emp.status}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
                    
                      View
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
          )}


           {active === 'two' && (

            <div>hello tow</div>
           
           )}
      </div>
    </>
  );
}

export default Payroll;
