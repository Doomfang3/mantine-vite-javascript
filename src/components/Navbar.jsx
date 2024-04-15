import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import cocktailLogo from '../Imagens/cocktailLogo.png';

const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setIsNavbarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsNavbarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div>
      <body className="navBody" style={{ color: 'white' }}>
        <nav className={` ${isNavbarVisible ? "visible" : ""}`}>
          <img className="logo" src={cocktailLogo} alt="Logo" />
          <ul className="navList">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/users"> Users </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </body>
    </div>
  );
};

export default Navbar;
