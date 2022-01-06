import './Portfolio.scss'
import greenly1 from '../../assets/images/greenly1.png'

function Portfolio() {
    return (
        <div className='portfolio'>
            <p>Check my work below</p>
            <img src={greenly1} alt='greenly' className='portfolio__image' />
            <a href="../BandSite/index.html">BandSite</a>
        </div>
    )
}

export default Portfolio
