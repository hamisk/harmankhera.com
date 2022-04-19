import './Modal.scss'

function Modal({ closeModal, openModal }) {
  console.log(openModal)

  return (
    <div className='modal__background'>
        <div className="modal__container">
          <div className="modal__title">
            <h1 className="modal__title-text">Site Name</h1>
          </div>
          <div className="modal__body">
            <p className="modal__body-text">Site description</p>
          </div>
          <div className="modal__footer">
            <button className="modal__cta">Visit Site</button>
            <button className="modal__close" onClick={()=>closeModal(false)}> X </button>
          </div>
        </div>
    </div>
  )
}

export default Modal