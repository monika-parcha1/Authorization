import React from 'react';
import {Router,Link} from "react-router-dom";

function Header(props) {
    return (
    <div className = "headerNav">
             <ul className = "header">
              <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                </ul>
     </div> 
    );
}

export default Header;