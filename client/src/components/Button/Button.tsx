import React from 'react';
import './Button.scss';

type Props = {
  onClick?: any;
  onClickText?: string;
  label: string;
};

function Button({ onClick, onClickText, label }: Props) {
  return (
    <button
      className='cta'
      onClick={() => {
        onClick(onClickText);
      }}>
      {label}
    </button>
  );
}

export default Button;

// data is a special attribute of html
