import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button className={`button ${props.className}`}>{props.name}</button>
  )
}

export default Button;