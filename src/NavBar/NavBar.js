import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavBar.module.css';
import '../fontawesome.js';


export function NavBar() {
    return (
        <nav className={styles.navbar}>
        <ul className={styles['navbar-nav']}>
          <li className={styles.logo}>
            <NavLink to="/" className={styles['nav-link']}>
            <span className={styles['link-text']}>Invictus</span>
              <FontAwesomeIcon className={styles['icon-color']} icon={['fas', 'angle-double-right']} size="3x" />
            </ NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to="/" className={styles['nav-link']}>
              <FontAwesomeIcon className={styles['icon-color']} icon={['fas', 'home']} size="3x" />
              <span className={styles['link-text']}>Home</span>
            </ NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to="/ReviewPage" className={styles['nav-link']}>
              <FontAwesomeIcon className={styles['icon-color']} icon={['fas', 'star']} size="3x" />
              <span className={styles['link-text']}>Submit A Review</span>
            </ NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to="/YourDoctor" className={styles['nav-link']}>
            <FontAwesomeIcon className={styles['icon-color']} icon={['far', 'id-card']} size="3x" />
              <span className={styles['link-text']}>Find Your Doctor</span>
            </ NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to="/" className={styles['nav-link']}>
            <FontAwesomeIcon className={styles['icon-color']} icon={['far', 'map']} size="3x" />
              <span className={styles['link-text']}>Find Your Hospital</span>
            </NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to="/About" className={styles['nav-link']}>
            <FontAwesomeIcon className={styles['icon-color']} icon={['fas', 'user-friends']} size="3x" />
              <span className={styles['link-text']}>About Us</span>
            </ NavLink>
          </li>
        </ul>
      </nav>
    )
}