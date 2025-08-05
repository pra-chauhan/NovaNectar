import React from 'react'
import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="text-gray-600 mb-6 text-lg">
        You do not have permission to view this page.
      </p>
      <Link
        to="/login"
        className="text-blue-600 hover:underline font-medium"
      >
        ⬅️ Back to Login
      </Link>
    </div>
  )
}

export default Unauthorized
