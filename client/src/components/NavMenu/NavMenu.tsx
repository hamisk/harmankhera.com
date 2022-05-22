import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    window.addEventListener('scroll', onScrolling);
    return () => window.removeEventListener('scroll', onScrolling);
  });

  const onScrolling = () => {
    if (window !== undefined) {
      let yPosition = window.scrollY;
      yPosition > intViewportHeight - 1 ? setStickyClass('navmenu--sticky') : setStickyClass('');
      if (yPosition > componentTops.portfolioTop - 50) {
        setCurrentSection({
          home: false,
          about: false,
          skills: false,
          portfolio: true,
        });
      } else if (yPosition > componentTops.skillsTop - 50) {
        setCurrentSection({
          home: false,
          about: false,
          skills: true,
          portfolio: false,
        });
      } else if (yPosition > componentTops.aboutTop - 50) {
        setCurrentSection({
          home: false,
          about: true,
          skills: false,
          portfolio: false,
        });
      } else {
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
      <div className='navmenu__links-wrapper'>
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
