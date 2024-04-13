import {Link} from 'react-router-dom'
import React from 'react';

function Navbar(){
    return(

    <div>
        <body class="navBody">
          <nav>
                <ul class="navList">
                    <li>
                      <Link to ="/"> Home </Link>  
                    </li>
                    <li>
                      <Link to ="/users"> Users </Link>
                    </li>
                    <li>
                      <Link to ="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </body>
    </div>
    );
}
export default Navbar;
