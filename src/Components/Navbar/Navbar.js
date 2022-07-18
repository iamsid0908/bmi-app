import React from "react";
import './Navbar.css'

function Navbar(){
    return (
        <div className="container">
            <ul className="list">
                <li>HOME</li>
                <li>FEATURE</li>
                <li>CONTACT US</li>
            </ul>
            <div className="field">
            <input  type={'text'} placeholder='search' className='k'></input>
            <button>Search</button>
            </div>
        </div>
    )
}
export default Navbar;