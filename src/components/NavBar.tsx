import { useState } from 'react';
import { NavBurger } from './NavBurger';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <a className={styles.title}>RJ</a>
      </div>

      {/* Desktop nav links */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <a className={`${styles.navLink}`} href="" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a className={`${styles.navLink}`} href="" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a className={`${styles.navLink}`} href="" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>

      {/* Burger menu (right side) */}
      <NavBurger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;
