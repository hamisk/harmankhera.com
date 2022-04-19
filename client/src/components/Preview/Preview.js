import React from 'react'
import screenshot from '../../assets/screenshots/greenlyDashboard.png'
import './Preview.scss'

function Preview() {
  return (
    <div className='preview__container'>
        <img src={screenshot} alt='screenshot' className='preview__image' />
        <div className='preview__overlay'>
            <div className='preview__text'>bare descriptive</div>
        </div>
    </div>
  )
}

export default Preview