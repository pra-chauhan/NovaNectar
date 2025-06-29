import { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState(() => {
        const stored = localStorage.getItem('employees');
        return stored ? JSON.parse(stored) : [];
    });

    // Persist to localStorage whenever employees change
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (employee) => {
        setEmployees(prev => [...prev, { ...employee, id: Date.now() }]);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(prev =>
            prev.map(emp => (emp.id === id ? { ...updatedEmployee, id } : emp))
        );
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployee = () => useContext(EmployeeContext);
