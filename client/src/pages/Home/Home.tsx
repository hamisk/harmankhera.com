import './Home.scss'
import webDev from '../../assets/images/hk_webdev.png'
import hk_transparent from '../../assets/images/hk_transparent.png'

interface Props {
    scroll: (id: string) => void
}

const Home: React.FC<Props> = ({ scroll }) => {
    return (
        <div className="home" id='home'>
            <img src={hk_transparent} alt='webdev' className="home__image" />

            <h1 className="home__title">Hi, I'm Harman Khera</h1>
            <h1 className="home__title">Full Stack Web Developer</h1>

            <div className="home__buttons">
                <button className="home__cta" onClick={() => {scroll("#portfolio")}}>View my work</button>
                <button className="home__cta" onClick={() => {}}>Get in touch</button>
            </div>
        
        </div>
    )
}

export default Home
