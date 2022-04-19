import { useState } from "react";
import screenshot from '../../assets/screenshots/greenlyDashboard.png'
import Modal from '../Modal/Modal'
import './Preview.scss'

function Preview() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='preview__container' onClick={()=>{
      console.log("click")
      setOpenModal(true)
      console.log(openModal)}}>
        <img src={screenshot} alt='screenshot' className='preview__image' />
        <div className='preview__overlay'>
            <div className='preview__text'>bare descriptive</div>
        </div>
        {openModal && <Modal closeModal={setOpenModal} openModal={openModal}/>}
        {/* if openModal === true, then show modal */}
    </div>
  )
}

export default Preview