import React, { useState } from 'react';
import github from './img/github.png';
import linkedIn from './img/linkedin.png';
import gmail from './img/gmail.png';
import styles from './Navigation.module.css';

function Navigation() {
    const [showNav, setshowNav] = useState(false);

    // stackoverflow answer but I forgot the link
    const handleClick = (event: any) => {
        setshowNav(prevCheck => !prevCheck);
    }

    return (
        <>
            <div onClick={handleClick} className={styles.nav}>
                {/* https://www.w3schools.com/howto/howto_css_menu_icon.asp */}
                <div className={styles.barOne} style={{ transform: showNav ? 'rotate(-45deg) translate(-9px, 6px)' : 'none' }}></div>
                <div className={styles.barTwo} style={{ opacity: showNav ? '0' : '1' }}></div>
                <div className={styles.barThree} style={{ transform: showNav ? 'rotate(45deg) translate(-8px, -8px)' : 'none' }}></div>
                {showNav && (
                    <>
                        <ul className={styles.navMenu}>
                            <a href='#skills'><li className={styles.jumpLink}>SKILLS</li></a>
                            <a href='#projects'><li className={styles.jumpLink}>PROJECTS</li></a>
                            <a href='#about'><li className={styles.jumpLink}>ABOUT</li></a>
                            <li className={styles.resumeLink}>CV</li>
                            <li className={styles.otherLink}>
                                <a href='https://github.com/leejoonli' target='_blank' rel='noreferrer'><img src={github} alt="Link to Jeremiah's Github" /></a>
                                <a href='https://www.linkedin.com/in/jhwlee/' target='_blank' rel='noreferrer'><img src={linkedIn} alt="Link to Jeremiah's LinkedIn" /></a>
                                <a><img src={gmail} alt="Send Jeremiah an email" /></a>
                            </li>
                            {/* <li className={styles.linkedInLink}>LinkedIn</li>
                            <li className={styles.emailLink}>Contact</li> */}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
}

export default Navigation;