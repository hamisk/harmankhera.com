import ImageGallery from 'react-image-gallery';
import './Modal.scss'

const images = [
  {
    original: require('../../assets/screenshots/greenly3.png'),
    thumbnail: require('../../assets/screenshots/greenly3.png'),
  },
  {
    original: require('../../assets/screenshots/greenly4.png'),
    thumbnail: require('../../assets/screenshots/greenly4.png'),
  },
  {
    original: require('../../assets/screenshots/greenly5.png'),
    thumbnail: require('../../assets/screenshots/greenly5.png'),
  },
  {
    original: require('../../assets/screenshots/greenly6.png'),
    thumbnail: require('../../assets/screenshots/greenly6.png'),
  },
  {
    original: require('../../assets/screenshots/greenly7.png'),
    thumbnail: require('../../assets/screenshots/greenly7.png'),
  },
  {
    original: require('../../assets/screenshots/greenly8.png'),
    thumbnail: require('../../assets/screenshots/greenly8.png'),
  },
  {
    original: require('../../assets/screenshots/greenly9.png'),
    thumbnail: require('../../assets/screenshots/greenly9.png'),
  },
]

function Modal({ showModal, handleClose }) {
  const showHideClassName = showModal ? 'modal__background display-flex' : 'modal__background display-none';
  
  return (
    <div className={showHideClassName}>
        <div className="modal__container">
          <div className="modal__carousel">
            <ImageGallery items={images} originalHeight={400} originalWidth={700} showBullets="true"  />
          </div>
          <div className="modal__title">
            <h1 className="modal__title-text">Site Name</h1>
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