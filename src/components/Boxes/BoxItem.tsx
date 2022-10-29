import React from 'react';
import './box.css'

interface BoxProps {
  hasItem: boolean;
  clicked: boolean;
}

const BoxItem:React.FC<BoxProps> = props => {
  return (
    <div className='Box'>
    </div>
  );
};

export default BoxItem;