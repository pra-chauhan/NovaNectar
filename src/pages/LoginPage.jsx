import React, { useState } from "react";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("Employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add your auth logic here.
    console.log(`Logging in as ${selectedRole} with`, { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 shadow p-8 space-y-6">
        <div className="flex flex-col items-center">
          {/* Company Logo */}
          <img
            src="/your-logo.png" // Replace with your logo path
            alt="NovaNectar Logo"
            className="w-16 h-16 mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Welcome to Nova<span className="text-blue-600">Nectar</span> HR Portal
          </h1>
          <p className="text-gray-500 text-sm">Please select your role to continue</p>
        </div>

        {/* Roles */}
        <div className="flex justify-center gap-4">
          {["Employee", "HR", "Admin"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`flex flex-col items-center px-6 py-4 rounded-lg border ${
                selectedRole === role ? "bg-indigo-50 border-indigo-600" : "border-gray-300"
              }`}
            >
              <div className="w-8 h-8 mb-1 bg-gray-200 rounded-full flex items-center justify-center">
                {/* You can replace this with an icon */}
                👤
              </div>
              <span className="font-medium">{role}</span>
              <span className="text-xs text-gray-500 text-center mt-1">
                {role === "Employee"
                  ? "View attendance, payslips, and leave requests"
                  : "Manage teams, payroll, and performance"}
              </span>
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-lg font-semibold text-center text-gray-800">
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
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring focus:ring-indigo-100 outline-none"
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
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring focus:ring-indigo-100 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              For demo use <code>password</code> as password
            </p>
          </div>

          <div className="flex items-center space-x-3 text-sm">
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
            className="w-full py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Login as {selectedRole}
          </button>
        </form>
      </div>
    </div>
  );
}
