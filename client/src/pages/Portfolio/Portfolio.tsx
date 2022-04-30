import './Portfolio.scss'
import Modal from '../../components/Modal/Modal'
import Preview from '../../components/Preview/Preview'
import { useState } from "react";
import { Project } from '../../Project';

const projects: Project[] = require('../../data/projects.json')

const Portfolio: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalProjectName, setModalProjectName] = useState<string | boolean>(false)
    
    const modalProject = projects.filter(project => project.project === modalProjectName)[0]
    projects.sort((a, b) => b.id - a.id)

    const hideModal = () => {
        setShowModal(false)
        setModalProjectName(false)
    }

    return (
        <div className='portfolio' id='portfolio'>
            {modalProjectName ? <Modal showModal={showModal} 
                handleClose={hideModal}
                images={modalProject.images}
                modalProject={modalProject}
                /> : "" }
            <h2 className='portfolio__title'>Projects</h2>
            <div className="portfolio__grid">
                {projects.map(project => {
                    return <Preview 
                    key={project.id}
                    projectName={project.project}
                    background={project.background}
                    title={project.title}
                    tech={project.tech}
                    setModalProjectName={setModalProjectName}
                    setShowModal={setShowModal}
                    />
                })}
            </div>
        </div>
    )
}

export default Portfolio
