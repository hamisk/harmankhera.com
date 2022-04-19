import './Home.scss'
import webDev from '../../assets/images/hk_webdev.png'

function Home() {
    return (
        <div className="home">
            <img src={webDev} alt='webdev' className="home__image" />
            {/* <h1 className="home__title">Harman Khera</h1> */}
            {/* <h3 className="home__subtitle">Full Stack Web Developer</h3> */}

            <button className="home__cta" onClick={() => {}}>View my work</button>
            <button className="home__cta" onClick={() => {}}>Get in touch</button>
        
        </div>
    )
}

export default Home
