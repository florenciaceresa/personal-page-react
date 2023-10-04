import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);   //Estado barra de navegación al hacer scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado botón hamburguesa
  const [isMenuClicked, setIsMenuClicked] = useState(false); 
  const [isNoBoxShadow, setIsNoBoxShadow] = useState(false);

  // Crea una función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuClicked(!isMenuClicked); 
    setIsNoBoxShadow(!isMenuOpen);
  };



  useEffect(() => {
    const handleScroll = () => {
      // Verifica si la posición del scroll es mayor que un valor determinado (puedes ajustar este valor)
      setIsScrolled(window.scrollY > 0);
    };

    // Agrega un event listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
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
          <li className="menu-home"><a href="#home" className={isScrolled ? 'scrolled-link' : ''}>INICIO</a></li>
          <li className="menu-about"><a href="#about" className={isScrolled ? 'scrolled-link' : ''}>ABOUT</a></li>
          <li className="menu-portfolio"><a href="#portfolio" className={isScrolled ? 'scrolled-link' : ''}>PORTFOLIO</a></li>
          <li className="menu-contact"><a href="#contact" className={isScrolled ? 'scrolled-link' : ''}>CONTACT</a></li>
        </div>
        <div className='menu-icons'>
        <li className="menu-icon-linkedin"><a href="https://www.linkedin.com/in/florenciaceresa/" target='blank' className={isScrolled ? 'scrolled-link' : ''}><i class="bi bi-linkedin"></i></a></li>
        <li className="menu-icon-github"><a href="https://github.com/florenciaceresa" target='blank' className={isScrolled ? 'scrolled-link' : ''}><i class="bi bi-github"></i></a></li>
        <li className="menu-icon-behance"><a href="https://www.behance.net/florenciaceresa" target='blank' className={isScrolled ? 'scrolled-link' : ''}><i class="bi bi-behance"></i></a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;