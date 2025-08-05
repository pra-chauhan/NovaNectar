import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmployeeProvider } from './context.jsx/EmployeeContext';
import { AuthProvider } from './context.jsx/AuthContext.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     <AuthProvider>

        <EmployeeProvider>
            <App />
        </EmployeeProvider>
         </AuthProvider>
    </React.StrictMode>
);


