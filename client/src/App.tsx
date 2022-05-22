import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import './App.scss';

const App: React.FC = () => {
  const [componentTops, setComponentTops] = useState({});

  const scroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    setComponentTops({
      aboutTop: aboutRef.current?.offsetTop,
      skillsTop: skillsRef.current?.offsetTop,
      portfolioTop: portfolioRef.current?.offsetTop,
    });
  }, []);

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
                <Skills ref={skillsRef} />
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
