import React from "react"
import CardDashboard from "../Components/CardDashboard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Dashboard = ()=>{
    return(
        <div>
            <Navbar/>
            <CardDashboard/>
            {/* <Footer isHomeMenu={false} /> */}
        </div>
    )
}
export default Dashboard