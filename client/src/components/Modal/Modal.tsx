import ImageGallery from 'react-image-gallery';
import { ImageURLObject, Project } from '../../Project';
import openInNewBlack from '../../assets/icons/open_in_new_black_24dp.svg'
import './Modal.scss'

interface Props {
  showModal: boolean;
  handleClose: () => void;
  images: ImageURLObject[];
  modalProject: Project;
  openInNewTab: (url: string) => void;
}

const Modal: React.FC<Props> = ({ showModal, handleClose, images, modalProject, openInNewTab }) => {
  const showHideBackground: string = showModal ? 'modal__background display-show' : 'modal__background display-hide';
  const showHideContainer: string = showModal ? 'modal__container display-show' : 'modal__container display-hide';
  const enableLink = modalProject.enableLink

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
            {enableLink ? <button className="modal__cta" onClick={() => openInNewTab(modalProject.siteURL)}>
              <p className="modal__cta-text">
                <img src={openInNewBlack} alt="open in new icon" className="modal__open-icon" /> Visit Site
              </p>
            </button> : ""}
            <button className="modal__close" onClick={()=>{handleClose()}}> X </button>
          </div>
        </div>
    </>
  )
}

export default Modal