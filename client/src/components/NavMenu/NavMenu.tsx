import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hk_transparent from '../../assets/images/hk_transparent.png';
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
      <img src={hk_transparent} alt='webdev' className='navmenu__image' />
      <Link to={{ hash: '#home' }} onClick={() => scroll('#home')}>
        <p className='navmenu__link'>Home</p>
      </Link>
      <Link to={{ hash: '#about' }} onClick={() => scroll('#about')}>
        <p className='navmenu__link'>About</p>
      </Link>
      <Link to={{ hash: '#skills' }} onClick={() => scroll('#skills')}>
        <p className='navmenu__link'>Skills</p>
      </Link>
      <Link to={{ hash: '#portfolio' }} onClick={() => scroll('#portfolio')}>
        <p className='navmenu__link'>Portfolio</p>
      </Link>
    </nav>
  );
};

export default NavMenu;
