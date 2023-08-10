import React from 'react';

const Navbar = () =>{
    return(
    <div className="navbar bg-base-100 container">
        <div className='px-20 py-10'>
            <a className="flex flex-wrap">
                <img src="/Logo.png" alt="Logo" className= "w-48 h-46"/>
                <h1 className= "font-jakarta font-extrabold text-[50px] my-12 text-primary ">PROBOX</h1>
            </a>
        </div>
    </div>
    )
}
export default Navbar