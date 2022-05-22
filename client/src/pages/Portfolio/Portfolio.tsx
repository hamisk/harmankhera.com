import './Portfolio.scss';
import Preview from '../../components/Preview/Preview';
import React, { useLayoutEffect, useState } from 'react';
import { Project } from '../../Project';

const projects: Project[] = require('../../data/projects.json');

const Portfolio = React.forwardRef((props, ref: any) => {
  const [activeClass, setActiveClass] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = () => {
    const scrollPos = window.scrollY;
    // const topPos = ref.current?.getBoundingClientRect().top;
    const portfolioTop = ref.current?.offsetTop;
    scrollPos > portfolioTop - 200 ? setActiveClass(true) : setActiveClass(false);
  };

  projects.sort((a, b) => b.id - a.id);

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='portfolio' id='portfolio' ref={ref}>
      <h2 className='portfolio__title'>Projects</h2>
      <div className={`portfolio__grid reveal active`}>
        {projects.map((project, index) => {
          return (
            <Preview
              key={project.id}
              projectName={project.project}
              background={project.background}
              title={project.title}
              tech={project.tech}
              style={{ transitionDelay: `${0.25 * index}s` }}
              openInNewTab={openInNewTab}
              siteUrl={project.siteURL}
              showButton={project.enableLink}
              active={activeClass}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Portfolio;
