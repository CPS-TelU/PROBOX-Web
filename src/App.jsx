import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import OurTeams from "./Pages/OurTeams";
import NotFound from "./Components/NotFound";
import { auth } from "./Components/firebaseConfig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/OurTeams" element={<OurTeams />} />
        <Route
          path="/Dashboard"
          element={user ? <Dashboard /> : <Navigate to="/Login" />}
        />
        <Route
          path="/Login"
          element={user ? <Navigate to="/Dashboard" /> : <Login />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
