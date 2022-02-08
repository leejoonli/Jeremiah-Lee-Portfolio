import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeader}>About Me</h1>
            <p className={styles.aboutDesc}>Hello! I'm Jeremiah, a software engineer and doting cat uncle.  When I'm not giving pets to my favorite cat, I'm complimenting other peoples' favorite cat/s.</p>
            <br />
            <p className={styles.aboutDesc}>After working as a camera assistant, I decided to leave the film industry and pursue a better future self. I always had an interest in the sciences even in my earlier years. But now, that interest has transformed into a fascination.</p>
            <br />
            <p className={styles.aboutDesc}>On the never-ending journey of discovery and growth,  This is me.</p>
        </div>
    );
}

export default About;