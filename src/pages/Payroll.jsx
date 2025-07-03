import React, { useState, useRef } from "react";
// import html2pdf from "html2pdf.js";
import { Calendar, Search, ChevronDown, Printer } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiFileText, FiDownload } from "react-icons/fi";
import Vecto from "../assets/Vector1.png";
import icon from "../assets/icon-park-outline_left.png";
import iconPark from "../assets/icon-park-outline_left1.png";



import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



import jam from "../assets/jam_share.png";
import Vector from "../assets/Vector2.png";
import si_money from "../assets/si_money-line.png";
import Frame457 from "../assets/Frame457.png";
import frame from "../assets/frame.png";
import Frame458 from "../assets/Frame458.png";
import Frame4581 from "../assets/Frame4581.png";

const employees = [
  {
    id: 1,
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
    id:2,
    name: "Amit ",
    title: "Senior web Designer",
    invoice: "#234786",
    attendance: { P: 2, A: 0, L: 21 },
    salary: "₹80,000",
    allowance: "₹40,600",
    deduction: "₹10,380",
    net: "₹2,17,220",
    status: "Paid",
  },
];

const getStatusClass = (status) => {
  return status === "Paid"
    ? "bg-green-50 text-green-600 border border-green-300"
    : "bg-white text-indigo-600 border border-indigo-300";
};

function Payroll() {
    const payslipRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(new Date("2025-05-03"));
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("All Status");
  const [active, setActive] = useState("one");
  const [showPayrollModal, setShowPayrollModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    console.log("Status selected:", e.target.value);
  };

  const handleProcessPayroll = () => {
    setTimeout(() => {
      setShowPayrollModal(false);
      setShowSuccess(true);
    }, 1000);
  };

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  


  const handleDownloadFromCard = (emp) => {
    setSelectedEmployee(emp);

    
    setTimeout(() => {
      handleDownloadPDF(emp);
    }, 500);
  };


//   const element = payslipRef.current;
//   if (!element) {
//     console.warn('Payslip element missing');
//     return;
//   }

//   try {
//     const canvas = await html2canvas(element, {
//       scale: 4,
//       backgroundColor: '#fff',
//       useCORS: true,
//     });
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`Payslip-${selectedEmployee.name}.pdf`);
//   } catch (error) {
//     console.error('Failed to generate PDF:', error);
//   }
// };

const handleDownloadPDF = async () => {
  if (!payslipRef.current || !selectedEmployee) {
    console.error("Payslip element or selected employee is missing");
    return;
  }

  try {
    const element = payslipRef.current;

    // Get canvas from DOM
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    // If content is longer than 1 page
    if (imgHeight > pageHeight) {
      while (position < imgHeight) {
        pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
        position += pageHeight;
        if (position < imgHeight) pdf.addPage();
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }

    pdf.save(`Payslip-${selectedEmployee.name}.pdf`);
  } catch (error) {
    console.error('Failed to generate PDF:', error);
  }
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
            <div
              onClick={() => setShowPayrollModal(true)}
              className="flex items-center gap-1 rounded-2xl border px-3 py-2 bg-blue-400"
            >
              <img src={Vector} alt="jam" />
              <p>Pay All Employee</p>
            </div>
          </div>
        </div>
        {/* Modal */}
        {showPayrollModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div
              className="bg-white rounded-xl w-full max-w-sm p-6 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                onClick={() => setShowPayrollModal(false)}
              >
                ×
              </button>

              {/* Modal Content */}
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-1 mb-1">
                  <span>₹</span> Process Payroll
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  You’re about to process payroll for all pending payment
                </p>

                {/* Summary Box */}
                <div className="border rounded-xl p-4 mb-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <div>
                      <p className="font-semibold">Total Employees</p>
                      <p className="text-xs text-gray-500">
                        3 Pending Payments
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Total Amount</p>
                      <p className="text-lg font-bold text-black">₹ 29,700</p>
                    </div>
                  </div>
                </div>

                {/* Warning Message */}
                <div className="text-xs text-red-500 bg-red-50 rounded-lg px-4 py-2 mb-4 border border-red-100">
                  This action will mark all pending payrolls as complete and
                  cannot be undone.
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-2 gap-3">
                  <button
                    className="w-full py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 text-sm"
                    onClick={() => setShowPayrollModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
                    onClick={handleProcessPayroll}
                  >
                    Process all payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-xl w-full max-w-xs p-6 relative text-center shadow-xl">
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                onClick={() => setShowSuccess(false)}
              >
                ×
              </button>

              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                ₹ Process Payroll
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                You’re about to process payroll for all pending payment
              </p>

              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-2">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 mb-1">
                Payment Successful!
              </h3>
              <p className="text-sm text-gray-500">
                Payroll has been processed for 3 employees.
              </p>
            </div>
          </div>
        )}

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

              <div className="mt-6 flex md:gap-9 gap-4  text-sm md:px-3">
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="w-1 h-10 bg-indigo-500 inline-block rounded-sm"></span>
                  <div>
                    <p> Pending</p>
                    <p className="md:text-lg font-semibold text-gray-800 whitespace-nowrap">
                      ₹ 1,34,000
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <span className="w-1 h-10 bg-black inline-block rounded-sm"></span>
                    <div>
                      <p> Pending</p>
                      <p className="md:text-lg  font-semibold text-gray-800 whitespace-nowrap ">
                        ₹ 1,34,000
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <span className="w-1 h-10 bg-yellow-500 inline-block rounded-sm"></span>
                    <div>
                      <p> Paid</p>
                      <p className="md:text-lg  font-semibold text-gray-800 whitespace-nowrap">
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
              {active !== "one" ? (
                <button
                  onClick={() => setActive("one")}
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
              {active !== "two" ? (
                <button
                  onClick={() => setActive("two")}
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
              <button className="bg-gray-100 text-gray-700  rounded-md"></button>

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
        {active === "one" && (
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
                      <button
                        onClick={() => setSelectedEmployee(emp)}
                        className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded hover:bg-gray-100"
                      >
                        <FiFileText size={16} /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === "two" && (
          <div className=" bg-gray-100 p-6 flex  gap-6">
            {employees.map((emp) => (
              <div
                key={emp.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 w-[350px] p-4 text-sm"
              >
                {/* Top Header */}
                <div className="flex justify-between items-start border-b pb-3 mb-3">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {emp.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {emp.invoice} • {emp.title}
                      </p>
                    </div>
                  </div>
                  <button className="px-2.5 py-0.5 text-xs border rounded-full text-indigo-600 border-indigo-300 hover:bg-indigo-50">
                    {emp.status}
                  </button>
                </div>

                {/* Salary Breakdown */}
                <div className="text-gray-700 space-y-3 mb-3">
                  <div className="flex justify-between">
                    <div>
                      <span>Deductions</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                        P:{emp.attendance.P}
                      </span>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                        A:{emp.attendance.A}
                      </span>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                        L:{emp.attendance.L}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Basic Salary</span>
                    <span>{emp.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Allowances</span>
                    <span>{emp.allowance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deductions</span>
                    <span>{emp.deduction}</span>
                  </div>
                </div>

                {/* Net Salary */}
                <div className="border-t pt-3 flex justify-between font-semibold text-gray-900 mb-3">
                  <span>Net Salary</span>
                  <span>{emp.net}</span>
                </div>

                {/* Actions */}
                <div className="flex justify-between gap-2 mt-8">
                  <button
                    onClick={() => setSelectedEmployee(emp)}
                    className="flex items-center gap-1 text-gray-700 border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 text-xs"
                  >
                    <FiFileText size={16} /> View Slip
                  </button>
                  <button
                    onClick={() => handleDownloadFromCard(emp)}
                    className="flex items-center gap-1 text-indigo-600 border border-indigo-300 px-3 py-1.5 rounded hover:bg-indigo-50 text-xs"
                  >
                    <FiDownload size={16} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedEmployee && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setSelectedEmployee(null)} // Click outside to close
          >
            <div
              className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
            >
              {/* Paste your payslip card here */}
              <div ref={payslipRef}  className=" payslip-container text-sm text-gray-700 font-sans"   style={{
    color: '#374151',         
    backgroundColor: '#fff',  
  }}>
                {/* HEADER */}
                <div className="mb-3">
                  <h1 className="text-lg font-semibold">Employee Payslip</h1>
                  <p className="text-xs text-gray-500">
                    Payslip for May 2025 – {selectedEmployee.name}
                  </p>
                </div>

                {/* COMPANY */}
                <div className="text-center mb-4">
                  <h2 className="text-base font-semibold text-gray-900">
                    NovaNectar Private Limited
                  </h2>
                  <p className="text-xs text-gray-500">
                    123 Business Park, Mumbai, India
                  </p>
                  <p className="text-xs text-gray-500">GST: 27ABCU9603R1ZX</p>
                </div>

                <div className="bg-indigo-50 text-indigo-700 text-center py-1.5 text-xs rounded mb-4 font-medium">
                  Payslip for the Month of May 2025
                </div>

                {/* DETAILS */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div>
                    <p>
                      <b>Employee Name:</b> {selectedEmployee.name}
                    </p>
                    <p>
                      <b>Employee ID:</b> EMP00{selectedEmployee.id}
                    </p>
                    <p>
                      <b>Department:</b> Engineering
                    </p>
                    <p>
                      <b>Position:</b> {selectedEmployee.title}
                    </p>
                  </div>
                  <div className="text-right">
                    <p>
                      <b>Payment Status:</b> {selectedEmployee.status}
                    </p>
                    <p>
                      <b>Payment Date:</b> Pending
                    </p>
                    <p>
                      <b>Bank Account:</b> HDFC-XXXX4513
                    </p>
                    <p>
                      <b>PAN:</b> ABCPK1234X
                    </p>
                  </div>
                </div>

                {/* ATTENDANCE */}
                <div className="grid grid-cols-4 gap-2 mb-5 text-center text-xs font-medium">
                  <div className="bg-green-100 text-green-800 rounded p-1.5">
                    Present
                    <br />
                    {selectedEmployee.attendance.P} days
                  </div>
                  <div className="bg-red-100 text-red-700 rounded p-1.5">
                    Absent
                    <br />
                    {selectedEmployee.attendance.A} days
                  </div>
                  <div className="bg-blue-100 text-blue-700 rounded p-1.5">
                    On Leave
                    <br />
                    {selectedEmployee.attendance.L} days
                  </div>
                  <div className="bg-gray-100 text-gray-700 rounded p-1.5">
                    Holidays
                    <br />7 days
                  </div>
                </div>

                {/* EARNINGS & DEDUCTIONS */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div>
                    <h3 className="font-semibold mb-2 text-sm">Earnings</h3>
                    <ul className="space-y-1 text-xs">
                      <li className="flex justify-between">
                        <span>Basic Salary</span>
                        <span>{selectedEmployee.salary}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>House Rent Allowance</span>
                        <span>₹8,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Vehicle Petrol</span>
                        <span>₹1,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Medical Allowance</span>
                        <span>₹1,250</span>
                      </li>
                      <li className="flex justify-between font-semibold pt-2 border-t">
                        <span>Gross Salary</span>
                        <span>₹19,000</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm">Deductions</h3>
                    <ul className="space-y-1 text-xs">
                      <li className="flex justify-between">
                        <span>Professional Tax</span>
                        <span>₹200</span>
                      </li>
                      <li className="flex justify-between">
                        <span>TDS</span>
                        <span>₹700</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Provident Fund</span>
                        <span>₹1,800</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Attendance Deduction</span>
                        <span>₹1600</span>
                      </li>
                      <li className="flex justify-between font-semibold pt-2 border-t">
                        <span>Total Deductions</span>
                        <span>₹3,380</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* NET SALARY */}
                <div className="flex justify-between items-center font-bold text-gray-900 mb-1">
                  <span>Net Salary</span>
                  <span className="text-lg">{selectedEmployee.net}</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4">
                  Amount in words: Fifteen Thousand Three Hundred Twenty rupees
                  only
                </p>

                {/* BUTTONS */}
              
              </div>
                <div className="flex justify-between gap-3 mt-4">
                  <button
                   onClick={() => window.print()}
                    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded text-gray-700 text-sm hover:bg-gray-50"
                  >
                    Print
                  </button>
                  <button
                    onClick={ handleDownloadPDF}
                    
                    className="flex items-center gap-1 px-4 py-2 border border-indigo-300 text-indigo-600 rounded text-sm hover:bg-indigo-50"
                  >
              
                    Download PDF
                  </button>
                </div>
            </div>
            
          </div>
        )}

        <div className="flex justify-self-end mt-8 space-x-2 items-center">
          {/* Previous Button */}
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`  text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-500  hover:bg-blue-100"
            }`}
          >
            <img src={iconPark} alt="" />
          </button>

          {/* Page Number Buttons */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-9 h-9 rounded border text-sm font-medium transition-colors duration-200 ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-300 hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={` text-sm font-medium ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-500  hover:bg-blue-100"
            }`}
          >
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Payroll;
