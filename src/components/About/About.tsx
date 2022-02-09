import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeader}>ABOUT ME</h1>
            <p className={styles.aboutDesc}>Hello! I'm Jeremiah, a software engineer and doting cat uncle.  When I'm not giving pets to my favorite cat, I'm complimenting other peoples' favorite cat/s.</p>
            <br />
            <p className={styles.aboutDesc}>After working as a camera assistant, I decided to leave the film industry and pursue an old curiosity. I always had an interest in the sciences even in my earlier years, but now that interest has transformed into a fascination.  Coding has taken over the driver's seat and it's full steam ahead.</p>
            <br />
            <p className={styles.aboutDesc}>On the never-ending journey of discovery and growth,  This is me.</p>
        </div>
    );
}

export default About;