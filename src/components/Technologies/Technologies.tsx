import React from 'react';
import styles from './Technologies.module.css';
import js from './img/js.png';
import python from './img/python.png';
import html from './img/html.png';
import css from './img/css.png';
import react from './img/react.png';
import mongodb from './img/mongodb.png';
import express from './img/express.png';
import sql from './img/sql.png';
import ts from './img/ts.png';

function Technologies() {
    return (
        <div className={styles.techContainer}>
            <h1 className={styles.techHeading}>LANGUAGES</h1>
            <div className={styles.languages}>
                <div className={styles.iconContainer}>
                    <img src={js} alt="JavaScript Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>JavaScript</h2>
                </div>
                <div className={styles.iconContainer}>
                    <img src={ts} alt="Typescript Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>TypeScript</h2>
                </div>
                <div className={styles.iconContainer}>
                    <img src={python} alt="Python Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>Python</h2>
                </div>
                <div className={styles.iconContainer}>
                    <img src={html} alt="HTML Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>HTML</h2>
                </div>
                <div className={styles.iconContainer}>
                    <img src={css} alt="CSS Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>CSS</h2>
                </div >
            </div>
            <h1 className={styles.techHeading2}>FRAMEWORKS</h1>
            <div className={styles.frameworks}>
                <div className={styles.iconContainer}>
                    <img src={react} alt="React Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>React</h2>
                </div>
                {/* <div>
                    <img src={css} alt="CSS Icon" />
                    <h2>React Router</h2>
                </div> */}
                <div className={styles.iconContainer}>
                    <img src={mongodb} alt="MongoDB Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>MongoDB</h2>
                </div>
                <div className={styles.iconContainer}>
                    <img src={express} alt="Express Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>Express</h2>
                </div>
                <div className={styles.iconContainer}>
                    <img src={sql} alt="SQL Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>SQL</h2>
                </div>
            </div>
        </div>
    );
}

export default Technologies;