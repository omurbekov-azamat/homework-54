import React from 'react';
import './Counter.css'

interface  Props {
  clickCount: number;
}

const Counter:React.FC<Props> = ({clickCount}) => {
  return (
    <p className='count'>
      Total tries: {clickCount}
    </p>
  );
};

export default Counter;