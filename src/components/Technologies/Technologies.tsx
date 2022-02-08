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
                    <img src={js} alt="JavaScript Icon" />
                    <h2>JavaScript</h2>
                </div>
                <div>
                    {/* GET TYPESCRIPT IMG */}
                    {/* <img src={js} alt="Typescript Icon" /> */}
                    <h2>TypeScript</h2>
                </div>
                <div>
                    <img src={python} alt="Python Icon" />
                    <h2>Python</h2>
                </div>
                <div>
                    <img src={html} alt="HTML Icon" />
                    <h2>HTML</h2>
                </div>
                <div>
                    <img src={css} alt="CSS Icon" />
                    <h2>CSS</h2>
                </div >
            </div>
            <h1>Frameworks</h1>
            <div className={styles.frameworks}>
                <div>
                    <img src={react} alt="React Icon" />
                    <h2>React</h2>
                </div>
                {/* <div>
                    <img src={css} alt="CSS Icon" />
                    <h2>React Router</h2>
                </div> */}
                <div>
                    <img src={mongodb} alt="MongoDB Icon" />
                    <h2>MongoDB</h2>
                </div>
                <div>
                    <img src={express} alt="Express Icon" />
                    <h2>Express</h2>
                </div>
                <div>
                    <img src={sql} alt="SQL Icon" />
                    <h2>SQL</h2>
                </div>
            </div>
        </div>
    );
}

export default Technologies;