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
      <div className='navmenu__links-wrapper'>
        <p className='navmenu__link'>
          <Link to={{ hash: '#home' }} onClick={() => scroll('#home')}>
            Home
          </Link>
        </p>
        <p className='navmenu__link'>
          <Link to={{ hash: '#about' }} onClick={() => scroll('#about')}>
            About
          </Link>
        </p>
        <p className='navmenu__link'>
          <Link to={{ hash: '#skills' }} onClick={() => scroll('#skills')}>
            Skills
          </Link>
        </p>
        <p className='navmenu__link'>
          <Link to={{ hash: '#portfolio' }} onClick={() => scroll('#portfolio')}>
            Portfolio
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default NavMenu;
