import React from 'react';
import './Button.css';
import '../Counter/Counter.css'

interface ButtonProps {
  reset: () => void;
}

const Button:React.FC<ButtonProps> = (props) => {
  return (
    <div className='count'>
      <button className='btn' onClick={props.reset}>Reset</button>
    </div>

  );
};

export default Button;