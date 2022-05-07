import React from 'react'
import './Button.scss'

function Button({ label }) {
  return (
    <div data-testid="button" className='button'>{label}</div>
  )
}

export default Button

// data is a special attribute of html