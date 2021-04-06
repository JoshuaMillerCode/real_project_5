import React from 'react';
import { Link } from 'react-router-dom';

    
    export default function NavBar() {
        return (
            <div className="navbar">
               
                    <Link className="linkProject" to="/APIGo" exact >Back to my Project</Link>
                    
                    <Link className="linkExamples" to="/examples" exact >Examples</Link>
                    
                    <a href='http://api-go.app' target='_blank'>API-Go</a>
            </div>
        )
    }
