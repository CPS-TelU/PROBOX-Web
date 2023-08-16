import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import OurTeams from "./Pages/OurTeams";
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/OurTeams" element={<OurTeams />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
