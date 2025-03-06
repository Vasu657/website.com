import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">Vasu<span className="highlight"> Ghanta</span></span>
          </a>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;