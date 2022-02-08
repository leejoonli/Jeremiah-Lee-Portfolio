import React from 'react';
import styles from './Projects.module.css';
import tower_of_hanoi from './img/tower_of_hanoi.png';
import dnd from './img/dnd.png';
import felp from './img/felp.png';

function Projects() {
    return (
        <div>
            <div className={styles.projectContainer}>
                <div>
                    <img src={tower_of_hanoi} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2>Tower of Hanoi</h2>
                    <p>Tower of Hanoi is an application based off the real-life mathematical puzzle game "Tower of Hanoi".  Can you complete this challenging game?  Adjust the difficulty and find out how far you can go.  Created in vanilla JavaScript, HTML, and CSS.</p>
                    <div>
                        <a href='https://leejoonli.github.io/tower-of-hanoi/' target='_blank' rel='noreferrer'>Application</a>
                        <a href='https://github.com/leejoonli/tower-of-hanoi' target='_blank' rel='noreferrer'>Repository</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <div>
                    <img src={dnd} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2>Dungeons and Dragons 5e Guide</h2>
                    <p>This application is a straightforward access point for one of greatest table top role playing games currently in existence, if not THE greatest.  Browse through the application and see what catches your eye.  Built using React, React Bootstrap, React Router, JavaScript, CSS, and deployed on Netlify.</p>
                    <div>
                        <a href='https://dungeons-and-dragons-5e-guide-6b812b.netlify.app/' target='_blank' rel='noreferrer'>Application</a>
                        <a href='https://github.com/leejoonli/dungeons-and-dragons-5e-guide' target='_blank' rel='noreferrer'>Repository</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <div>
                    <img src={felp} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2>FELP</h2>
                    <p>FELP is a blog style food review application to document the hottest spots to go to eat.  The idea is verified locals who have lived in a certain area for an extended period of time would suggest the bets local restaraunts for tourists to go.  The application has full CRUD functionaliy for registered users.  Frontend created using React, Javascript, CSS, with requests handled using Axios.  Backend created with MongoDB, Mongoose, Express, with user authentication being handled by Passport.  Feel like a local even when you're out of town.</p>
                    <div>
                        <a href='https://felp-official.netlify.app/' target='_blank' rel='noreferrer'>Application</a>
                        <a href='https://github.com/leejoonli/felp-frontend' target='_blank' rel='noreferrer'>Frontend</a>
                        <a href='https://github.com/leejoonli/felp-backend' target='_blank' rel='noreferrer'>Backend</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <div>placeholder project 4</div>
                <div className={styles.project}>
                    <h2>project 4 name</h2>
                    <p>description project 4</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;