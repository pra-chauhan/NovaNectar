import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/logo.png";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedRole === "Employee") {
      navigate("/employee/profile");
    } else if (selectedRole === "HR") {
      navigate("/dashboard");
    } else if (selectedRole === "Admin") {
      navigate("/dashbord");
    }
  };

  const handleBack = () => {
    setSelectedRole("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-8">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center">
          <img src={logoimg} alt="NovaNectar Logo" className="w-20 h-20 mb-2" />
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Welcome to Nova<span className="text-blue-600">Nectar</span> HR Portal
          </h1>
          <p className="text-gray-500 text-sm text-center">Please select your role to continue</p>
        </div>

        {/* Role Selection or Selected Role Card */}
        {!selectedRole ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Employee", "HR", "Admin"].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className="flex flex-col items-center px-6 py-5 rounded-xl border border-gray-300 hover:bg-gray-50 transition w-full"
              >
                <div className="w-10 h-10 mb-2 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                  👤
                </div>
                <span className="font-semibold text-base">{role}</span>
                <span className="text-xs text-gray-500 text-center mt-1 px-1">
                  {role === "Employee"
                    ? "View attendance, payslips, and leave requests"
                    : "Manage teams, payroll, and performance"}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="flex flex-col items-center px-6 py-5 rounded-xl border border-indigo-600 bg-indigo-50 transition w-full max-w-xs text-center">
              <div className="w-10 h-10 mb-2 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                👤
              </div>
              <span className="font-semibold text-base">{selectedRole}</span>
              <span className="text-xs text-gray-500 mt-1">
                {selectedRole === "Employee"
                  ? "View attendance, payslips, and leave requests"
                  : "Manage teams, payroll, and performance"}
              </span>
            </div>
          </div>
        )}

        {/* Login Form */}
        {selectedRole && (
          <form
            onSubmit={handleLogin}
            className="space-y-5 max-w-xl mx-auto animate-fade-in"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
              Login as {selectedRole}
            </h2>
            <p className="text-center text-sm text-gray-500 mb-2">
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-indigo-600" />
                <span>Remember me</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-indigo-600" />
                <span>Login with OTP instead</span>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                🔙 Back
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Login as {selectedRole}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
