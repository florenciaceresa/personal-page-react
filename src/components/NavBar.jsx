import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isNoBoxShadow, setIsNoBoxShadow] = useState(false);

  const location = useLocation(); // Obtener la ubicación actual

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuClicked(!isMenuClicked);
    setIsNoBoxShadow(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isNoBoxShadow ? 'no-box-shadow' : ''} ${isMenuClicked ? 'menu-clicked' : ''}`}>
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''} ${isScrolled && isMenuOpen ? 'scrolled-menu-open' : ''}`}>
        <div className="menu-options">
          <li className="menu-home">
            <Link to="/" className={` ${location.pathname === '/' ? 'active' : ''} menu-option-item`}>HOME</Link>
          </li>
          <li className="menu-about">
            <Link to="/nosotros" className={`${location.pathname === '/nosotros' ? 'active' : ''} menu-option-item`}>ABOUT</Link>
          </li>
          <li className="menu-portfolio">
            <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'active' : ''} menu-option-item`}>PORTFOLIO</Link>
          </li>
          <li className="menu-contact">
            <Link to="/contacto" className={`${location.pathname === '/contacto' ? 'active' : ''} menu-option-item`}>CONTACT</Link>
          </li>
        </div>
        <div className='menu-icons'>
          <li className="menu-icon-linkedin">
            <a href="https://www.linkedin.com/in/florenciaceresa/" target='blank' className={isScrolled ? 'scrolled-link' : ''}>
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="menu-icon-github">
            <a href="https://github.com/florenciaceresa" target='blank' className={isScrolled ? 'scrolled-link' : ''}>
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="menu-icon-behance">
            <a href="https://www.behance.net/florenciaceresa" target='blank' className={isScrolled ? 'scrolled-link' : ''}>
              <i className="bi bi-behance"></i>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;