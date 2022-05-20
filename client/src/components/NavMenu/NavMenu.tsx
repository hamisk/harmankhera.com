import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

interface Props {
  scroll: (id: string) => void;
}

const NavMenu: React.FC<Props> = ({ scroll }) => {
  const [stickyClass, setStickyClass] = useState<string>('');
  let intViewportHeight: number = window.innerHeight;

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > intViewportHeight - 1 ? setStickyClass('navmenu--sticky') : setStickyClass('');
    }
  };

  return (
    <nav className={`navmenu ${stickyClass}`}>
      <Link to={{ hash: '#home' }} onClick={() => scroll('#home')}>
        <p className='navmenu__link'>Home</p>
      </Link>
      {/* <Link to="/about"><p className='navmenu__link'>About</p></Link> */}
      <Link to={{ hash: '#portfolio' }} onClick={() => scroll('#portfolio')}>
        <p className='navmenu__link'>Portfolio</p>
      </Link>
      {/* <Link to={{hash: '#contact'}} onClick={() => scroll('#contact')}><p className='navmenu__link'>Contact</p></Link> */}
    </nav>
  );
};

export default NavMenu;
