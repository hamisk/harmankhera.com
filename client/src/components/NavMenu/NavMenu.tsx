import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hk_transparent from '../../assets/images/hk_transparent.png';
import './NavMenu.scss';

interface Props {
  scroll: (id: string) => void;
  componentTops: any;
  activeSection: string;
}

const NavMenu: React.FC<Props> = ({ scroll, componentTops, activeSection }) => {
  const [stickyClass, setStickyClass] = useState<string>('');
  const navRef = useRef<HTMLDivElement>(null);

  let intViewportHeight: number = window.innerHeight;
  let menuItemHeight = 38;

  useEffect(() => {
    window.addEventListener('scroll', onScrolling);
    return () => window.removeEventListener('scroll', onScrolling);
  });

  const onScrolling = () => {
    if (window !== undefined) {
      let yPosition = window.scrollY;
      yPosition > intViewportHeight - 1 ? setStickyClass('navmenu--sticky') : setStickyClass('');
      if (yPosition > componentTops.portfolioTop - window.innerHeight / 3) {
        navRef.current?.scrollTo({
          top: menuItemHeight * 3,
          behavior: 'smooth',
        });
      } else if (yPosition > componentTops.skillsTop - window.innerHeight / 3) {
        navRef.current?.scrollTo({
          top: menuItemHeight * 2,
          behavior: 'smooth',
        });
      } else if (yPosition > componentTops.aboutTop - window.innerHeight / 3) {
        navRef.current?.scrollTo({
          top: menuItemHeight,
          behavior: 'smooth',
        });
      } else {
        navRef.current?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className={`navmenu ${stickyClass}`}>
      <img src={hk_transparent} alt='webdev' className='navmenu__image' />
      <div className='navmenu__links-wrapper' ref={navRef}>
        <p className={activeSection === 'home' ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#home' }} onClick={() => scroll('#home')}>
            Home
          </Link>
        </p>
        <p className={activeSection === 'about' ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#about' }} onClick={() => scroll('#about')}>
            About
          </Link>
        </p>
        <p className={activeSection === 'skills' ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#skills' }} onClick={() => scroll('#skills')}>
            Skills
          </Link>
        </p>
        <p className={activeSection === 'portfolio' ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#portfolio' }} onClick={() => scroll('#portfolio')}>
            Portfolio
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default NavMenu;
