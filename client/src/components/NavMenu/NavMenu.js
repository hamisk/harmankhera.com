import React from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.scss'

function NavMenu() {
    return (
        <nav className='navmenu'>
            {/* <Link to="/about"><p className='navmenu__link'>About</p></Link> */}
            <Link to="/"><p className='navmenu__link'>Portfolio</p></Link>
        </nav>
    )
}

export default NavMenu
