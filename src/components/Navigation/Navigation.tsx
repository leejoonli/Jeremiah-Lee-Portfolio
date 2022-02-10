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
            </div>
            {/* {showNav && (
                    <>
                        <div className={styles.navMenu}>
                            <h2>Skills</h2>
                            <h2>Projects</h2>
                            <h2>About</h2>
                            <h2>CV</h2>
                            <h2>GitHub</h2>
                            <h2>LinkedIn</h2>
                            <h2>Contact</h2>
                        </div>
                    </>
                )} */}
        </>
    );
}

export default Navigation;