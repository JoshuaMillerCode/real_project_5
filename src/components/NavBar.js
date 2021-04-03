import React from 'react';
    import { Link } from 'react-router-dom';
    
    export default function NavBar() {
        return (
            <>

            <div className="navbar">
                <ul>
                    <Link className="link" to="/" exact ><h2>Back to my Project</h2></Link>
                </ul>
            </div>
            </>
        )
    }
