import './Portfolio.scss'
import Modal from '../../components/Modal/Modal.jsx'
import Preview from '../../components/Preview/Preview.jsx'
import { useState } from "react";
const projects = require('../../data/projects.json')

function Portfolio() {

    const [showModal, setShowModal] = useState(false)
    const [modalProjectName, setModalProjectName] = useState("bandsite")
    
    const modalProject = projects.filter(project => project.project === modalProjectName)
    projects.sort((a, b) => b.id - a.id)

    const hideModal = () => {
        setShowModal(false)
    }

    return (
        <div className='portfolio'>
            <Modal showModal={showModal} 
                handleClose={hideModal}
                images={modalProject[0].images}
                modalProject={modalProject}
                />
            <h2>Projects</h2>
            <div className="portfolio__grid">
                {projects.map(project => {
                    return <Preview 
                    key={project.id}
                    project={project.project}
                    background={project.background}
                    title={project.title}
                    tech={project.tech}
                    setModalProjectName={setModalProjectName}
                    setShowModal={setShowModal}
                    />
                })}
            </div>
            <a href="../BandSite/index.html">BandSite</a>
            <a href="../CoffeeShop/index.html">CoffeeShop</a>
            <a href="../Hackathon/index.html">Hackathon</a>
            <a href="../TravelSite/index.html">TravelSite</a>
        </div>
    )
}

export default Portfolio
