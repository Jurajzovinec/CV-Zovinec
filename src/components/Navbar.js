import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1> Juraj Žovinec</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projectroom">Project room</Link>
                <Link to="/cvinpdf">CV in pdf</Link>
            </div>
        </nav>
    )
}