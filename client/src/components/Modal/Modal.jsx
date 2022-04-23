import ImageGallery from 'react-image-gallery';
import './Modal.scss'

function Modal({ showModal, handleClose, images, modalProject }) {
  const showHideBackground = showModal ? 'modal__background display-flex' : 'modal__background display-none';
  const showHideContainer = showModal ? 'modal__container display-flex' : 'modal__container display-none';
  
  return (
    <>
    <div className={showHideBackground} onClick={()=>{handleClose()}}></div>
        <div className={showHideContainer}>
          <div className="modal__carousel">
            <ImageGallery items={images} showBullets="true" showThumbnails={false} />
          </div>
          <div className="modal__title">
            <h1 className="modal__title-text">{modalProject.project}</h1>
          </div>
          <div className="modal__body">
            <p className="modal__body-text">Site description</p>
          </div>
          <div className="modal__footer">
            <button className="modal__cta">Visit Site</button>
            <button className="modal__close" onClick={()=>{handleClose()}}> X </button>
          </div>
        </div>
    </>
  )
}

export default Modal