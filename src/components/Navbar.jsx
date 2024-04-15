import {Link} from 'react-router-dom'
import React from 'react';
import cocktailLogo  from '../Imagens/cocktailLogo.png';

function Navbar(){
    return(

    <div>
        <body class="navBody" style={{ color: 'white' }}>
          <nav>
          <img class="logo" src={cocktailLogo} alt="Logo"/>
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
