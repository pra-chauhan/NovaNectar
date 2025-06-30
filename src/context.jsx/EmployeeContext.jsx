// context.jsx/EmployeeContext.jsx

import React, { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState(() => {
        try {
            const storedEmployees = localStorage.getItem("employees");
            return storedEmployees ? JSON.parse(storedEmployees) : [];
        } catch (error) {
            console.error("Error parsing employees from localStorage:", error);
            return [];
        }
    });

    // Persist employees to localStorage whenever employees state changes
    useEffect(() => {
        try {
            localStorage.setItem("employees", JSON.stringify(employees));
        } catch (error) {
            console.error("Error saving employees to localStorage:", error);
        }
    }, [employees]);

    const addEmployee = (employee) => {
        setEmployees((prev) => [...prev, employee]);
    };

    const updateEmployee = (updatedEmployee) => {
        setEmployees((prev) =>
            prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
        );
    };

   const updateEmployeePerformance = (employeeId, performanceData) => {
    setEmployees(prev =>
        prev.map(emp =>
            emp.id === employeeId
                ? { ...emp, performance: { ...performanceData, lastUpdated: new Date().toISOString() } }
                : emp
        )
    );
};


    return (
        <EmployeeContext.Provider
            value={{
                employees,
                addEmployee,
                updateEmployee,
                updateEmployeePerformance,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};
