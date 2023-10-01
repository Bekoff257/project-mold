import React from 'react';
import "./Utils.scss";
import { FiShoppingCart } from "react-icons/fi";

const DefaultButton = ({text, f}) => {
  return (
    <button onClick={f} className='default-btn'>
      <FiShoppingCart/>{text}
    </button>
  )
}

export { DefaultButton }