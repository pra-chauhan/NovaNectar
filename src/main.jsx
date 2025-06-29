import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmployeeProvider } from './context.jsx/EmployeeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <EmployeeProvider>
            <App />
        </EmployeeProvider>
    </React.StrictMode>
);


