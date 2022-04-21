import './Portfolio.scss'
import Preview from '../../components/Preview/Preview.jsx'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2>Projects</h2>
            <div className="portfolio__grid">
                <Preview />
                <Preview />
                <Preview />
                <Preview />
            </div>
            <a href="../BandSite/index.html">BandSite</a>
        </div>
    )
}

export default Portfolio
