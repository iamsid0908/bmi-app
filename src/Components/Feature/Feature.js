import React from 'react';
import {Link} from 'react-router-dom';
import'./Feature.css'

function Feature(){
    return (
        <div className="uili">
        <ui >
           <Link to="/feature/bmr"><li>BMR</li></Link>
           <Link to="/feature/pace"> <li>Pace Calculator</li></Link>
           <Link to="/feature/ideal"> <li>Ideal Weight Calculator</li></Link>
            
        </ui>
        </div>
    )
}
export default Feature;