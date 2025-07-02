import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useEmployee = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    const addEmployee = (employee) => {
        setEmployees((prev) => [...prev, employee]);
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};