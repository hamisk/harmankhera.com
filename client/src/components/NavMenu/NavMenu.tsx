import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './NavMenu.scss'

function NavMenu() {
    const [stickyClass, setStickyClass] = useState('');
    let intViewportHeight = window.innerHeight;

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > intViewportHeight ? setStickyClass('navmenu--sticky') : setStickyClass('');
        }
    };

    return (
        <nav className={`navmenu ${stickyClass}`}>
            <Link to="/"><p className='navmenu__link'>Home</p></Link>
            <Link to="/about"><p className='navmenu__link'>About</p></Link>
            <Link to="/portfolio"><p className='navmenu__link'>Portfolio</p></Link>
            <Link to="/contact"><p className='navmenu__link'>Contact</p></Link>
        </nav>
    );
}

export default NavMenu
