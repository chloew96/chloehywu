import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

return (
    <>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <MdFingerprint className='navbar-icon' />
              Chloe Wu */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link className='nav-links' 
                onClick={closeMobileMenu}
                activeClass="active" to="about" spy={true} smooth={true}>
                  about
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeClass="active" to="experiences" spy={true} smooth={true}
                >
                  experiences
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeClass="active" to="contact" spy={true} smooth={true}
                >
                  contact me
                </Link>
              </li>
              <li className='nav-social'>
                <a
                  href='//www.linkedin.com/in/chloew96'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  target="_blank"
                >
                  <FaLinkedin className='navbar-icon' />
                </a>
              </li>
              {/* <li className='nav-social'>
                <Link
                  to='//twitter.com/chloehywu'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  target="_blank"
                >
                  <FaTwitter className='navbar-icon' />
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
    </>
  );
};
export default Navbar;