import './Home.scss';
import Button from '../../components/Button/Button';
import bg_forest from '../../assets/images/forest-background-crop-compressed.jpeg';
import { useEffect, useState } from 'react';

interface Props {
  scroll: (id: string) => void;
}

const Home: React.FC<Props> = ({ scroll }) => {
  const [showClass, setShowClass] = useState('');
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.src = bg_forest;
    setShowClass('show');
  }, []);

  return (
    <div className='home' id='home'>
      <img src={bg_forest} alt='forest background' className='home__bg-image' />
      <div className='home__bg-image-overlay'></div>
      <h1 className={'home__title ' + showClass}>
        Hi, I'm <span className='home__name'>Harman Khera</span>
      </h1>
      <h1 className={'home__job-title ' + showClass}>Full-Stack Web Developer</h1>

      <div className={'home__buttons ' + showClass}>
        <Button onClick={scroll} onClickText='#portfolio' label='View my work' />
        <a href='mailto:h.khera@protonmail.com' className='home__contact'>
          <Button label='Get in touch' />
        </a>
      </div>
    </div>
  );
};

export default Home;
