import { useState } from "react";
import screenshot from '../../assets/screenshots/greenlyDashboard.png'
import Modal from '../Modal/Modal'
import './Preview.scss'

function Preview() {

  const [showModal, setShowModal] = useState(false)

  const hideModal = () => {
    setShowModal(false)
  }

  return (
    <div className='preview__container' >
        <img src={screenshot} alt='screenshot' className='preview__image' />
        <div className='preview__overlay' onClick={()=>{
          setShowModal(true)
          console.log("showModal", showModal)}}>
            <div className='preview__text'>bare descriptive</div>
        </div>
        <Modal showModal={showModal} handleClose={hideModal}/>
        {/* if openModal === true, then show modal */}
    </div>
  )
}

export default Preview