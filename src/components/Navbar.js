import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSwipeClose = (e) => {
    const swipeDistance = e.changedTouches[0].clientX;
    if (swipeDistance < 100) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="brand-part1">Syam Sundar </span>
        <span className="brand-part2">Yadla</span>
      </div>
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </div>
      {/* Desktop navigation */}
      <ul className="nav-links">
        <li className="nav-item active">Home</li>
        <li className="nav-item">About </li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">skills</li>
        <li className="nav-item">Contact</li>
      </ul>
      {/* Mobile menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onTouchStart={(e) => e.preventDefault()} // Prevent scroll while swiping
        onTouchEnd={handleSwipeClose}
      >
        <div className="close-btn" onClick={closeMobileMenu}>✖</div>
        <ul className="mobile-nav-links">
          <li className="nav-item active">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Service</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;