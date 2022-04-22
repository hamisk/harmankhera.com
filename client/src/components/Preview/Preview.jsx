import './Preview.scss'

function Preview({ background, title, tech, project, setModalProjectName, setShowModal }) {  

  return (
    <div className='preview__container' >
        <img src={background} alt='screenshot' className='preview__image' />
        <div className='preview__overlay' onClick={()=>{}}>
            <div className='preview__text'>
              <h3 className="preview__title">{title}</h3>
              <p className="preview__tech">{tech}</p>
              <button className="preview__cta"
                onClick={() => {
                  setShowModal(true)
                  setModalProjectName(project)
                }}
                >Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Preview