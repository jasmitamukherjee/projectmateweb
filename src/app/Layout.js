import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Register from './Register'
import Select from './Select'
export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/select" element={<Select/>} />

      </Routes>
    </Router>
  );
}
