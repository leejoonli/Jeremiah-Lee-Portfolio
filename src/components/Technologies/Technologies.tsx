import React from 'react';
import styles from './Technologies.module.css';

function Technologies() {
    return (
        <div className={styles.techContainer}>
            <h1>Languages</h1>
            <div className={styles.languages}>
                <h2>JavaScript</h2>
                <h2>TypeScript</h2>
                <h2>Python</h2>
                <h2>HTML</h2>
                <h2>CSS</h2>
            </div>
            <h1>Frameworks</h1>
            <div className={styles.frameworks}>
                <h2>React</h2>
                <h2>React Router</h2>
                <h2>MongoDB</h2>
                <h2>Express</h2>
                <h2>SQL</h2>
            </div>
        </div>
    );
}

export default Technologies;