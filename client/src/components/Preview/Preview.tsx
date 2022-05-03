import './Preview.scss'

interface Props {
  background: string;
  title: string;
  tech: string;
  projectName: string;
  setModalProjectName: React.Dispatch<React.SetStateAction<string | boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preview: React.FC<Props> = ({ background, title, tech, projectName, setModalProjectName, setShowModal }) => {  

  return (
    <div className='preview__container' >
        <img src={background} alt='screenshot' className='preview__image' />
        <div className='preview__overlay' onClick={()=>{}}>
            <div className='preview__text'>
              <h3 className="preview__title">{title}</h3>
              <p className="preview__tech">{tech}</p>
            </div>
              <button className="preview__cta"
                onClick={() => {
                  setShowModal(true)
                  setModalProjectName(projectName)
                }}>
                  Learn More</button>
        </div>
    </div>
  )
}

export default Preview