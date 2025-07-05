import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/logo.png";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("Employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${selectedRole} with`, { email, password });

    if (selectedRole === "Employee") {
      navigate("/employee/profile");
    } else if (selectedRole === "HR") {
      navigate("/dashboard");
    } else if (selectedRole === "Admin") {
      navigate("/payroll");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-full max-w-5xl  rounded-6xl  shadow-lg p-10 space-y-6">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center">
          <img src={logoimg} alt="NovaNectar Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2">
            Welcome to Nova<span className="text-blue-600">Nectar</span> HR Portal
          </h1>
          <p className="text-gray-500 text-base text-center">Please select your role to continue</p>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Employee", "HR", "Admin"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`flex flex-col items-center px-8 py-6 rounded-xl border transition ${
                selectedRole === role ? "bg-indigo-50 border-indigo-600" : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="w-12 h-12 mb-2 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <span className="font-semibold text-lg">{role}</span>
              <span className="text-xs text-gray-500 text-center mt-1 px-2">
                {role === "Employee"
                  ? "View attendance, payslips, and leave requests"
                  : "Manage teams, payroll, and performance"}
              </span>
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5 max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
            Login as {selectedRole}
          </h2>
          <p className="text-center text-sm text-gray-500">
            Enter your credentials to access your {selectedRole.toLowerCase()} dashboard
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring focus:ring-indigo-100 outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring focus:ring-indigo-100 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              For demo use <code>password</code> as password
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Remember me</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Login with OTP instead</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Login as {selectedRole}
          </button>
        </form>
      </div>
    </div>
  );
}
