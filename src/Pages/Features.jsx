import React from "react"
import Navbar from "../Components/Navbar"
import HeroFeatures from "../Components/HeroFeatures"
import Footer from "../Components/Footer"
const Features = ()=>{
    return(
        <div>
            <Navbar />
            <HeroFeatures/> 
            {/* <Footer isHomeMenu={false} /> */}
        </div>
    )
}
export default Features