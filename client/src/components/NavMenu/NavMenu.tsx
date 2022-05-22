import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hk_transparent from '../../assets/images/hk_transparent.png';
import './NavMenu.scss';

interface Props {
  scroll: (id: string) => void;
  componentTops: any;
}

const NavMenu: React.FC<Props> = ({ scroll, componentTops }) => {
  const [stickyClass, setStickyClass] = useState<string>('');
  const [currentSection, setCurrentSection] = useState({
    home: true,
    about: false,
    skills: false,
    portfolio: false,
  });
  let intViewportHeight: number = window.innerHeight;
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScrolling);
    return () => window.removeEventListener('scroll', onScrolling);
  });

  const onScrolling = () => {
    if (window !== undefined) {
      let yPosition = window.scrollY;
      console.log(yPosition);
      yPosition > intViewportHeight - 1 ? setStickyClass('navmenu--sticky') : setStickyClass('');
      if (yPosition > componentTops.portfolioTop - 150) {
        navRef.current?.scrollTo({
          top: 120,
          behavior: 'smooth',
        });
        setCurrentSection({
          home: false,
          about: false,
          skills: false,
          portfolio: true,
        });
      } else if (yPosition > componentTops.skillsTop - 150) {
        navRef.current?.scrollTo({
          top: 80,
          behavior: 'smooth',
        });
        setCurrentSection({
          home: false,
          about: false,
          skills: true,
          portfolio: false,
        });
      } else if (yPosition > componentTops.aboutTop - 150) {
        navRef.current?.scrollTo({
          top: 40,
          behavior: 'smooth',
        });
        setCurrentSection({
          home: false,
          about: true,
          skills: false,
          portfolio: false,
        });
      } else {
        navRef.current?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setCurrentSection({
          home: true,
          about: false,
          skills: false,
          portfolio: false,
        });
      }
    }
  };

  return (
    <nav className={`navmenu ${stickyClass}`}>
      <img src={hk_transparent} alt='webdev' className='navmenu__image' />
      <div className='navmenu__links-wrapper' ref={navRef}>
        <p className={currentSection.home ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#home' }} onClick={() => scroll('#home')}>
            Home
          </Link>
        </p>
        <p className={currentSection.about ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#about' }} onClick={() => scroll('#about')}>
            About
          </Link>
        </p>
        <p className={currentSection.skills ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#skills' }} onClick={() => scroll('#skills')}>
            Skills
          </Link>
        </p>
        <p className={currentSection.portfolio ? 'navmenu__link navActive' : 'navmenu__link'}>
          <Link to={{ hash: '#portfolio' }} onClick={() => scroll('#portfolio')}>
            Portfolio
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default NavMenu;
