import React from "react";
import "../index.css";
import logo from "../assets/JsonAGrafoNB.png"
const NavBar = () => {
    return (
        <nav className="bg-[#0c2041] text-light h-[77px]"> 
            <div className="flex items-center h-full px-6">
                <img 
                    src={logo}
                    alt="logo" 
                    className="h-16 w-auto mr-6 ml-30"
                />
                <h3 className="text-white text-lg whitespace-nowrap">
                    Guía visual de consultas SQL
                </h3>
            </div>
        </nav>
    );
}

export default NavBar;






