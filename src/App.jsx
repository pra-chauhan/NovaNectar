// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payroll from './pages/Payroll';
import Settings from './pages/Settings';

function App() {
  return (
    <Router >
        <Routes>
            <Route path="/Payroll" element={<Payroll/>} />
            <Route path="/" element={<Settings/>} />

        </Routes>
   
    </Router>
  );
}

export default App;
