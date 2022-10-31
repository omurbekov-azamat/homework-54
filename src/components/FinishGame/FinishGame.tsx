import React from 'react';
import './FinishGame.css'

interface Props {
  getFinishGame?: string;
}

const FinishGame:React.FC<Props> = ({getFinishGame}) => {
  return (
    <p className='FinishGame'>{getFinishGame}</p>
  );
};

export default FinishGame;