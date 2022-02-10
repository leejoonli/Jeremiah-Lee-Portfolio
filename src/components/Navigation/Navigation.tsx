import React, { useState } from 'react';
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
                            <a href='#skills'><li className={styles.jumpLink}>Skills</li></a>
                            <li className={styles.jumpLink}>Projects</li>
                            <li className={styles.jumpLink}>About</li>
                            <li className={styles.resumeLink}>CV</li>
                            <li className={styles.githubLink}>GitHub</li>
                            <li className={styles.linkedInLink}>LinkedIn</li>
                            <li className={styles.emailLink}>Contact</li>
                        </ul>
                    </>
                )}
            </div>
        </>
    );
}

export default Navigation;