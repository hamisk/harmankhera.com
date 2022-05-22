import './Home.scss';
import Button from '../../components/Button/Button';
import bg_forest from '../../assets/images/forest-background-crop-compressed.jpeg';

interface Props {
  scroll: (id: string) => void;
}

const Home: React.FC<Props> = ({ scroll }) => {
  return (
    <div className='home' id='home'>
      <img src={bg_forest} alt='forest background' className='home__bg-image' />
      <div className='home__bg-image-overlay'></div>
      <h1 className='home__title'>
        Hi, I'm <span className='home__name'>Harman Khera</span>
      </h1>
      <h1 className='home__job-title'>Full-Stack Web Developer</h1>

      <div className='home__buttons'>
        <Button onClick={scroll} onClickText='#portfolio' label='View my work' />
        <a href='mailto:h.khera@protonmail.com' className='home__contact'>
          <Button label='Get in touch' />
        </a>
      </div>
    </div>
  );
};

export default Home;
