import { useState } from 'react';
import { NavBurger } from './NavBurger';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // scroll to nav items
    const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <a className={styles.title}>RJ</a>
      </div>

      {/* Desktop nav links */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.navLink} onClick={() => scrollToSection("home")}>Home</button>
        <button className={styles.navLink} onClick={() => scrollToSection("projects")}>Projects</button>
        <button className={styles.navLink} onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>

      {/* Burger menu (right side) */}
      <NavBurger data-testid="nav-burger" isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;
