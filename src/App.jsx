// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payroll from './pages/Payroll';

function App() {
  return (
    <Router >
        <Routes>
            <Route path="/" element={<Payroll/>} />

        </Routes>
   
    </Router>
  );
}

export default App;
