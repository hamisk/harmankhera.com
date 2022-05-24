import React from 'react';
import web_dev from '../../assets/icons/front-end.png';
import back_end from '../../assets/icons/database-storage.png';
import misc from '../../assets/icons/developing.png';
import './Skills.scss';

let sectionTriggered = false;

type Props = {
  activeSection: string;
};
const Skills = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  let activeClass = false;

  if (props.activeSection === 'skills') {
    activeClass = true;
    sectionTriggered = true;
  }

  return (
    <div className='skills' id='skills' ref={ref}>
      <h2 className='skills__title'>Skills</h2>
      <div className='skills__cards'>
        <div
          className={activeClass || sectionTriggered ? 'skillcard reveal active' : 'skillcard reveal'}
          style={{ transitionDelay: `0.25s` }}>
          <img src={web_dev} alt='web development' className='skillcard__icon' />
          <h3 className='skillcard__title'>Front-End</h3>
          <ul className='skillcard__list'>
            <li className='skillcard__list-item'>React</li>
            <li className='skillcard__list-item'>TypeScript</li>
            <li className='skillcard__list-item'>JavaScript</li>
            <li className='skillcard__list-item'>Chart.js</li>
            <li className='skillcard__list-item'>HTML/CSS</li>
            <li className='skillcard__list-item'>SASS</li>
            <li className='skillcard__list-item'>Responsive Design</li>
          </ul>
        </div>
        <div
          className={activeClass || sectionTriggered ? 'skillcard reveal active' : 'skillcard reveal'}
          style={{ transitionDelay: `0.5s` }}>
          <img src={back_end} alt='web development' className='skillcard__icon' />
          <h3 className='skillcard__title'>Back-End</h3>
          <ul className='skillcard__list'>
            <li className='skillcard__list-item'>Node.JS</li>
            <li className='skillcard__list-item'>Express</li>
            <li className='skillcard__list-item'>MySQL</li>
            <li className='skillcard__list-item'>RESTful APIs</li>
          </ul>
        </div>
        <div
          className={activeClass || sectionTriggered ? 'skillcard reveal active' : 'skillcard reveal'}
          style={{ transitionDelay: `0.75s` }}>
          <img src={misc} alt='web development' className='skillcard__icon' />
          <h3 className='skillcard__title'>Misc</h3>
          <ul className='skillcard__list'>
            <li className='skillcard__list-item'>GitHub</li>
            <li className='skillcard__list-item'>JWT</li>
            <li className='skillcard__list-item'>Jira</li>
            <li className='skillcard__list-item'>Agile Development</li>
            <li className='skillcard__list-item'>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Skills;
