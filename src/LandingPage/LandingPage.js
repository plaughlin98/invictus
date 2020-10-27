import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../fontawesome.js';
import { NavBar } from '../NavBar/NavBar';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import  GoogleMapWindow  from '../Map/Map';

export function LandingPage() {
  return (
      <div>
        <NavBar />
        <div className={styles.site}>
            <div className={styles.title}>
                <h1>Invictus</h1>
                <h2>HealthCare In Your Hands</h2>
            </div>
            <div className={styles['main']}>
                <h1>Our Mission</h1>
                <h2>We aim to streamline the entire healthcare industry. Reducing wasted time and resources while improving both patient and provider experience.</h2>
                <NavLink to="/about" className={styles.navlink}>About Us</NavLink>
            </div>
             <div className={styles['search-bar']}>
                <h1>Find A HealthCare Provider</h1>
                <SearchBar />
                <GoogleMapWindow />
            </div> 
            <div className={styles['project']}>
                <div className={styles['project-content']}>
                    <h1>project</h1>
                </div>
                <div className={styles['project-content']}>
                    <h1>project</h1>
                </div>
                <div className={styles['project-content']}>
                    <h1>project</h1>
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    <h1>Invictus Health Technologies</h1>
                </div>
                <div>
                    <h4>plaughlin98@gmail | joes email</h4>
                </div>
                <div>
                    <p>bla bla bla bla</p>
                </div>
                <div>
                    <ul>
                        <li><a>link</a></li>
                        <li><a>link</a></li>
                        <li><a>link</a></li>
                        <li><a>link</a></li>
                    </ul>
                </div>
                <div>
                    <p>Copyright 2020 Invictus Health Technologies </p>
                </div>
            </div>
        </div>
      </div>
  );
}