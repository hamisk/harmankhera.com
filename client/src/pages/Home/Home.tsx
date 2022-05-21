import './Home.scss';
import hk_transparent from '../../assets/images/hk_transparent.png';
import Button from '../../components/Button/Button';

interface Props {
  scroll: (id: string) => void;
}

const Home: React.FC<Props> = ({ scroll }) => {
  return (
    <div className='home' id='home'>
      {/* <img src={hk_transparent} alt='webdev' className="home__image" /> */}

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
