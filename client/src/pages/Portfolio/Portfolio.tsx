import './Portfolio.scss';
import Preview from '../../components/Preview/Preview';
import { useLayoutEffect, useRef, useState } from 'react';
import { Project } from '../../Project';

const projects: Project[] = require('../../data/projects.json');

const Portfolio: React.FC = () => {
  // const [showModal, setShowModal] = useState<boolean>(false)
  // const [modalProjectName, setModalProjectName] = useState<string | boolean>(false);

  // using ref to ref portfolio div
  // to find position of top of portfolio div to animate on scroll
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeClass, setActiveClass] = useState('');

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const topPos = portfolioRef.current?.getBoundingClientRect().top;
    // console.log(scrollPos);
    // console.log(topPos);
    topPos && topPos + 50 < scrollPos ? setActiveClass('active') : setActiveClass('');
  };

  // const modalProject = projects.filter(project => project.project === modalProjectName)[0]
  projects.sort((a, b) => b.id - a.id);

  // const hideModal = () => {
  //   // setShowModal(false)
  //   // setModalProjectName(false);
  // };

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='portfolio' id='portfolio'>
      {/* {projects.map(modalProject => {
                return <Modal showModal={modalProject.project === modalProjectName} 
                handleClose={hideModal}
                images={modalProject.images}
                modalProject={modalProject}
                openInNewTab={openInNewTab}
                key={modalProject.id + 100}
                />})} */}
      <h2 className='portfolio__title'>Projects</h2>
      <div className={`portfolio__grid reveal ${activeClass}`} ref={portfolioRef}>
        {projects.map((project, index) => {
          return (
            <Preview
              key={project.id}
              projectName={project.project}
              background={project.background}
              title={project.title}
              tech={project.tech}
              // setModalProjectName={setModalProjectName}
              style={{ transitionDelay: `${0.25 * index}s` }}
              openInNewTab={openInNewTab}
              siteUrl={project.siteURL}
              // setShowModal={setShowModal}
              showButton={project.enableLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
