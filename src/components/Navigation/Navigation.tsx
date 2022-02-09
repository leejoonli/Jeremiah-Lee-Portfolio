import React, { useState } from 'react';
import styles from './Navigation.module.css';

function Navigation() {
    const [showNav, setshowNav] = useState(false);

    const handleClick = (event: any) => {
        setshowNav(prevCheck => !prevCheck);
        console.log(event.target)
        event.target.classList.toggle(styles.change);
    }

    return (
        <>
            <div className={styles.nav}>
                <div onClick={handleClick}>
                    <div className={styles.barOne}></div>
                    <div className={styles.barTwo}></div>
                    <div className={styles.barThree}></div>
                </div>
                {showNav && (
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
                )}
            </div>
        </>
    );
}

export default Navigation;