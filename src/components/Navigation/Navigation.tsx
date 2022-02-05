import React, { useState } from 'react';

function Navigation() {
    const [showNav, setshowNav] = useState(false);

    const handleClick = (event: any) => {
        setshowNav(prevCheck => !prevCheck);
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>placeholder img</div>
                {showNav && (
                    <>
                        <div>
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