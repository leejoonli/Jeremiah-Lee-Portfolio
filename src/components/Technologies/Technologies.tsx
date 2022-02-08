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

function Technologies() {
    return (
        <div className={styles.techContainer}>
            <h1>Languages</h1>
            <div className={styles.languages}>
                <div>
                    <img src={js} alt="JavaScript Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>JavaScript</h2>
                </div>
                <div>
                    {/* GET TYPESCRIPT IMG */}
                    {/* <img src={js} alt="Typescript Icon" /> */}
                    <h2 className={styles.techHeader}>TypeScript</h2>
                </div>
                <div>
                    <img src={python} alt="Python Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>Python</h2>
                </div>
                <div>
                    <img src={html} alt="HTML Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>HTML</h2>
                </div>
                <div>
                    <img src={css} alt="CSS Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>CSS</h2>
                </div >
            </div>
            <h1>Frameworks</h1>
            <div className={styles.frameworks}>
                <div>
                    <img src={react} alt="React Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>React</h2>
                </div>
                {/* <div>
                    <img src={css} alt="CSS Icon" />
                    <h2>React Router</h2>
                </div> */}
                <div>
                    <img src={mongodb} alt="MongoDB Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>MongoDB</h2>
                </div>
                <div>
                    <img src={express} alt="Express Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>Express</h2>
                </div>
                <div>
                    <img src={sql} alt="SQL Icon" className={styles.techIcons} />
                    <h2 className={styles.techHeader}>SQL</h2>
                </div>
            </div>
        </div>
    );
}

export default Technologies;