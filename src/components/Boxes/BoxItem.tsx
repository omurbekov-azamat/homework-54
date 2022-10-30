import React from 'react';
import './Box.css'

interface BoxProps {
  hasItem: boolean;
  clicked: boolean;
  onHeaderClick: React.MouseEventHandler;
}

const BoxItem:React.FC<BoxProps> = props => {
  let className;

  if (props.clicked === true) {
     className = 'Box-white';
  } else {
    className = 'Box-grey';
  }

  let classNameHasItem;

  if (props.hasItem === true && props.clicked === true) {
    classNameHasItem = 'hasItem-show';
  } else {
    classNameHasItem = 'hasItem-none';
  }
  return (
    <div onClick={props.onHeaderClick} className={className}>
      <span className={classNameHasItem}>0</span>
    </div>
  );
};

export default BoxItem;