import ImageGallery from 'react-image-gallery';
import './Modal.scss'

function Modal({ showModal, handleClose, images, modalProject }) {
  const showHideClassName = showModal ? 'modal__background display-flex' : 'modal__background display-none';
  
  return (
    <div className={showHideClassName}>
        <div className="modal__container">
          <div className="modal__carousel">
            <ImageGallery items={images} originalHeight={400} originalWidth={700} showBullets="true"  />
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
    </div>
  )
}

export default Modal