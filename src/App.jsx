import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Features from "./Pages/Features"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Features" Component={Features}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Dashboard" Component={Dashboard}/>
      </Routes>
    </div>
  )
}

export default App