import React from 'react';
import './About.scss';

const About = React.forwardRef((props, ref: any) => {
  return (
    <section className='about' id='about' ref={ref}>
      <h2 className='about__title'>About</h2>
      <p className='about__text'>
        What excites me most about web dev is the opportunity it provides to come up with creative solutions to real
        world problems.
      </p>
      <p className='about__text'>
        I'm developing the skills needed to leverage tech to empower people in working towards building a sustainable
        future.
      </p>
    </section>
  );
});

export default About;
