import React, { createContext, useContext, useEffect, useState } from 'react';
import api from './api';
import { useAuth } from './AuthContext';
import { getAccessToken } from './tokenService';

const EmployeeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useEmployee = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const { user } = useAuth();

  // Fetch all employees with performance data
  useEffect(() => {
    const fetchEmployees = async () => {
      if (!user) return;

      try {
        const role = user?.role?.toLowerCase();
        const token = getAccessToken(); // call it as a function!

        const res = await api.get(`/${role}/getAllPerformance`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEmployees(res.data.data || []);
      } catch (error) {
        console.error('Failed to fetch employees:', error.response?.data || error.message);
      }
    };

    fetchEmployees();
  }, [user]);

  // Add a new employee
  const addEmployee = async (employee) => {
    const role = user?.role?.toLowerCase();
      if ( !role) {
    console.error("Missing employee ID or user role.");
    return;
  }

    try {
      const token = getAccessToken();

      const response = await api.post(`/${role}/addEmployee`, employee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Failed to add employee:', error.response?.data || error.message);
    }
  };

const updateEmployeePerformance = async (employeeId, performanceData) => {
  const role = user?.role?.toLowerCase();
  if (!employeeId || !role) {
    console.error("Missing employee ID or user role.");
    return;
  }
  try {
    const token = getAccessToken();

    const res = await api.post(`/${role}/savePerformance/${employeeId}`, performanceData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const updatedPerformance = res.data.performance;
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId ? { ...emp, performance: updatedPerformance } : emp
      )
    );
  } catch (error) {
    console.error("Error saving performance data:", error.response?.data || error.message);
  }
};



  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployeePerformance,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
