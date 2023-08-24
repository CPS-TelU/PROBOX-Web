import Footer from "../Components/Footer"
import HeroMain from "../Components/HeroMain"
import Navbar from "../Components/Navbar"
import React from "react"

const Home = ()=>{
    return(
        <div>
            <Navbar />
            <HeroMain />
            {/* <Footer isHomeMenu={true} /> */}
        </div>
    )
}
export default Home