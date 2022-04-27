import ImageGallery from 'react-image-gallery';
import { ImageURLObject, Project } from '../../Project';
import './Modal.scss'

interface Props {
  showModal: boolean;
  handleClose: () => void;
  images: ImageURLObject[];
  modalProject: Project;
}

const Modal: React.FC<Props> = ({ showModal, handleClose, images, modalProject }) => {
  const showHideBackground: string = showModal ? 'modal__background display-flex' : 'modal__background display-none';
  const showHideContainer: string = showModal ? 'modal__container display-flex' : 'modal__container display-none';
  console.log(modalProject)

  return (
    <>
    <div className={showHideBackground} onClick={()=>{handleClose()}}></div>
        <div className={showHideContainer}>
          <div className="modal__carousel">
            <ImageGallery items={images} showBullets="true" showThumbnails={false} />
            {/* <img src={images[0].original} alt="modal" className='modal__image' /> */}
          </div>
          <div className="modal__title">
            <h1 className="modal__title-text">{modalProject.title}</h1>
          </div>
          <div className="modal__body">
            <p className="modal__body-text">{modalProject.description}</p>
          </div>
          <div className="modal__footer">
            <button className="modal__cta"><a href={modalProject.siteURL} className="modal__link">Visit Site</a></button>
            <button className="modal__close" onClick={()=>{handleClose()}}> X </button>
          </div>
        </div>
    </>
  )
}

export default Modal