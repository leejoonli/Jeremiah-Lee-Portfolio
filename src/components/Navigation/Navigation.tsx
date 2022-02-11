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
            <div>
                {/* https://www.w3schools.com/howto/howto_css_menu_icon.asp */}
                <div onClick={handleClick} className={styles.nav}>
                    <div className={styles.barOne} style={{ transform: showNav ? 'rotate(-45deg) translate(-9px, 6px)' : 'none' }}></div>
                    <div className={styles.barTwo} style={{ opacity: showNav ? '0' : '1' }}></div>
                    <div className={styles.barThree} style={{ transform: showNav ? 'rotate(45deg) translate(-8px, -8px)' : 'none' }}></div>
                </div>
                {showNav && (
                    <>
                        <ul className={styles.navMenu}>
                            <a href='#skills' className={styles.aTagNav}><li className={styles.jumpLink}>SKILLS</li></a>
                            <a href='#projects' className={styles.aTagNav}><li className={styles.jumpLink}>PROJECTS</li></a>
                            <a href='#about' className={styles.aTagNav}><li className={styles.jumpLink}>ABOUT</li></a>
                            <a href='resume/jleeresume.pdf' download='Jeremiah_Lee_Resume' target='_blank' rel='noreferrer' className={styles.aTagNav}><li className={styles.resumeLink}>CV</li></a>
                            <li className={styles.otherLink}>
                                <a href='https://github.com/leejoonli' target='_blank' rel='noreferrer' className={styles.aTag}><img src={github} alt="Link to Jeremiah's Github" className={styles.imgLink} /></a>
                                <a href='https://www.linkedin.com/in/jhwlee/' target='_blank' rel='noreferrer' className={styles.aTag}><img src={linkedIn} alt="Link to Jeremiah's LinkedIn" className={styles.imgLink} /></a>
                                <a href='mailto:jhwlee94@gmail.com' className={styles.aTag}><img src={gmail} alt="Send Jeremiah an email" className={styles.imgLink} /></a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </>
    );
}

export default Navigation;