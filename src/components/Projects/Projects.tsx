import React from 'react';
import styles from './Projects.module.css';
import towerOfHanoi from './img/tower_of_hanoi.png';
import dnd from './img/dnd.png';
import felp from './img/felp.png';
import expense from './img/expense_tracker.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    return (
        <div className={styles.projectComponentContainer} id='projects'>
            <h1 className={styles.headerOne}>PROJECTS</h1>
            <div className={`${styles.projectContainer} ${styles.project4}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}><img src={expense} alt='Expense tracker application state' className={styles.projectImg} /></div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Expense Tracker</h2>
                    <p className={`${styles.projectDesc} ${styles.projectFourDesc}`}>This application is a basic expense tracker to keep tabs on your spending.  You can create, read, update, and delete any post that you input.  The backend database is hosted on Heroku and uses Django, Python, and the Django Rest Framework.  The frontend is created using React Native and Typescript.  Follow the viewing instructions on GitHub to view and use the application.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href='https://expo.dev/@leejoonli/expense-tracker' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/leejoonli/expense-tracker' target='_blank' rel='noreferrer' className={styles.projectLink}>Frontend</a>
                        <a href='https://github.com/leejoonli/expense-tracker-backend' target='_blank' rel='noreferrer' className={styles.projectLink}>Backend</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={felp} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>FELP</h2>
                    <p className={`${styles.projectDesc} ${styles.projectThreeDesc}`}>FELP is a blog style food review application to document the hottest spots to go to eat.  The idea is verified locals who have lived in a certain area for an extended period of time would suggest the bets local restaraunts for tourists to go.  The application has full CRUD functionaliy for registered users.  Frontend created using React, Javascript, CSS, with requests handled using Axios.  Backend created with MongoDB, Mongoose, Express, with user authentication being handled by Passport.  Feel like a local even when you're out of town.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href='https://felp-official.netlify.app/' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/leejoonli/felp-frontend' target='_blank' rel='noreferrer' className={styles.projectLink}>Frontend</a>
                        <a href='https://github.com/leejoonli/felp-backend' target='_blank' rel='noreferrer' className={styles.projectLink}>Backend</a>
                    </div>
                </div>
            </div>
            <div className={`${styles.projectContainer} ${styles.projectTwo}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={dnd} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Dungeons and Dragons 5e Guide</h2>
                    <p className={styles.projectDesc}>This application is a straightforward access point for one of greatest table top role playing games currently in existence, if not THE greatest.  Browse through the application and see what catches your eye.  Built using React, React Bootstrap, React Router, JavaScript, CSS, and deployed on Netlify.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://dungeons-and-dragons-5e-guide-6b812b.netlify.app/' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/leejoonli/dungeons-and-dragons-5e-guide' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={towerOfHanoi} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Tower of Hanoi</h2>
                    <p className={styles.projectDesc}>Tower of Hanoi is an application based off the real-life mathematical puzzle game "Tower of Hanoi".  Can you complete this challenging game?  Adjust the difficulty and find out how far you can go.  Created in vanilla JavaScript, HTML, and CSS.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://leejoonli.github.io/tower-of-hanoi/' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/leejoonli/tower-of-hanoi' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;