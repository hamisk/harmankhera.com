import './Home.scss'
import hk_transparent from '../../assets/images/hk_transparent.png'

interface Props {
    scroll: (id: string) => void
}

const Home: React.FC<Props> = ({ scroll }) => {
    return (
        <div className="home" id='home'>
            <img src={hk_transparent} alt='webdev' className="home__image" />

            <h1 className="home__title">Hi, I'm <span className='home__name'>Harman Khera</span></h1>
            <h1 className="home__title">I'm a full-stack web developer</h1>

            <div className="home__buttons">
                <button className="home__cta" onClick={() => {scroll("#portfolio")}}>View my work</button>
                <a href='mailto:h.khera@protonmail.com' className='home__contact'>
                    <button className="home__cta" onClick={() => {}}>Get in touch</button>
                </a>
            </div>
        
        </div>
    )
}

export default Home
