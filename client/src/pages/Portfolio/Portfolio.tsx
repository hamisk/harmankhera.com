import './Portfolio.scss';
import Preview from '../../components/Preview/Preview';
import React from 'react';
import { Project } from '../../Project';

const projects: Project[] = require('../../data/projects.json');

type Props = {
  activeSection: string;
};
const Portfolio = React.forwardRef<HTMLDivElement, Props>((props, ref: any) => {
  let activeClass = false;
  if (props.activeSection === 'portfolio') {
    activeClass = true;
  }

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
