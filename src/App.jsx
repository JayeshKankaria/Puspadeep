import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';  // Your existing landing page
import AdminLogin from './components//AdminLogin';    // The new admin login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;