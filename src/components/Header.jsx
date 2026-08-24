import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    // { id: 'contact', label: 'Contact' },
  ];

  const styles = {
    pageWrap: {
      width: '100%',
      padding: '10px 10px',
      // backdropFilter: 'blur(5px)',
      position: 'fixed',
      top: 0,
      zIndex: 100,
    },
    pill: {
      backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)',
      // backdropFilter: 'blur(10px)',
      borderRadius: '10px',
      padding: '10px 10px',
      boxShadow: isDarkMode ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.15)',
      maxWidth: '750px',
      margin: '0 auto',
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
    },
    logo: {
      fontWeight: 650,
      fontSize: '1.3rem',
      letterSpacing: '0.5px',
      textDecoration: 'none',
      color: isDarkMode ? '#2c74d8' : '#000000',
    },
    navList: {
      gap: '4px',
    },
    navLink: {
      color: isDarkMode ? '#94a3b8' : '#6b7280', 
      fontWeight: 500,
      fontSize: '0.95rem',
      margin: '0 14px',
      textDecoration: 'none',
    },
    navLinkActive: {
      color: isDarkMode ? '#ffffff' : '#111111', 
      fontWeight: 700,
      fontSize: '0.95rem',
      margin: '0 14px',
      textDecoration: 'none',
    },
    iconButton: {
      background: 'none',
      border: 'none',
      color: isDarkMode ? '#d4cccc' : '#6b7280', 
      cursor: 'pointer',
      padding: '4px',
      display: 'flex', // Memastikan ikon di dalam tombol rata tengah
      alignItems: 'center',
      justifyContent: 'center',
    },
    burgerButton: {
      border: 'none',
    },
  };

  return (
    <header style={styles.pageWrap}>
      <nav 
        className={`navbar navbar-expand-lg px-3 px-md-4 ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`} 
        style={styles.pill}
      >
        {/* 1. LOGO (Kiri) */}
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => handleLinkClick('home')}
          style={styles.logo}
        >
          Renaldi-Smbln.
        </a>

        {/* 2. WADAH BARU UNTUK TOMBOL MODE & BURGER (Kanan) */}
        {/* Menggunakan d-flex dan gap-3 agar jejer rapi, order-lg-3 agar di layar besar tetap di kanan */}
        <div className="d-flex align-items-center gap-3 order-lg-3">
          
          {/* Tombol Mode Gelap (Sekarang di luar menu collapse!) */}
          <button
            style={styles.iconButton}
            onClick={toggleDarkMode} 
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Tombol Burger (mobile) */}
          <button
            className="navbar-toggler shadow-none"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            style={styles.burgerButton}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>

        {/* 3. AREA MENU LINK (Tengah di Desktop, Turun ke bawah di Mobile) */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center" style={styles.navList}>
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                  onClick={() => handleLinkClick(item.id)}
                  style={activeLink === item.id ? styles.navLinkActive : styles.navLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;