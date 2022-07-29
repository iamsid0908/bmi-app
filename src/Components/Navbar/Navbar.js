import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

function Navbar(){
    return (
        <div className="container">
            <ul className="list">
               <Link to="/"> <li>HOME</li></Link>
               <Link to="/feature"> <li>Feature</li></Link>
               <Link to="/contact"> <li>CONTACT US</li></Link>
            </ul>
            <div className="field">
            {/* <input  type={'text'} placeholder='search' className='k'></input>
            <button>Search</button> */}
            </div>
        </div>
    )
}
export default Navbar;