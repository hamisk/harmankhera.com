import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import './App.scss';

const App: React.FC = () => {
  const [componentTops, setComponentTops] = useState<any>({});
  const [activeSection, setActiveSection] = useState<string>('home');

  const scroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    setComponentTops({
      aboutTop: aboutRef.current?.offsetTop,
      skillsTop: skillsRef.current?.offsetTop,
      portfolioTop: portfolioRef.current?.offsetTop,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  const onScroll = () => {
    if (window !== undefined) {
      let yPosition = window.scrollY;
      if (yPosition > componentTops.portfolioTop - 150) {
        setActiveSection('portfolio');
      } else if (yPosition > componentTops.skillsTop - 150) {
        setActiveSection('skills');
      } else if (yPosition > componentTops.aboutTop - 150) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    }
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <NavMenu scroll={scroll} componentTops={componentTops} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home scroll={scroll} />
                <About ref={aboutRef} />
                <Skills activeSection={activeSection} ref={skillsRef} />
                <Portfolio ref={portfolioRef} />
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/bandsite' />
          <Route path='/coffeeshop' />
          <Route path='/travelsite' />
          <Route path='/brainflix' />
          <Route path='/instock' />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
