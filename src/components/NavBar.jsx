// import React from "react";
// import "../index.css"
// const NavBar = () => {
//     return (
//         <nav className="navbar bg-[#0c2041]  text-light h-[77px]"> 
//             <div className="container">
//                 <img src="src/assets/JsonAGrafo.png" alt="logo" className="h-17 w-22"/>
//                 <h3 className="text-white mr-200"> Guía visual de consultas SQL </h3>

//             </div>
//         </nav>
//         )
// }

// export default NavBar

import React from "react";
import "../index.css";

const NavBar = () => {
    return (
        <nav className="bg-[#0c2041] text-light h-[77px]"> 
            <div className="flex items-center h-full px-6">
                <img 
                    src="src/assets/JsonAGrafo.png" 
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






