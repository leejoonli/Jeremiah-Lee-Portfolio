import React, { useState } from 'react';

function Navigation() {
    const [test, setTest] = useState(false);

    const handleClick = (event: any) => {
        setTest(prevCheck => !prevCheck);
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>placeholder img</div>
                {test && (
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