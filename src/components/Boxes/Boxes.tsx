import React from 'react';
import {Character} from "../../types";
import BoxItem from "./BoxItem";
import './Box.css';

interface Props {
  boxes: Character[];
  clicked: (index:number) => void;
}

const Boxes: React.FC<Props> = ({boxes,clicked}) => {
  return (
    <div className='boxes'>
      {boxes.map((boxItem, index:number) => (
        <BoxItem
          key={index}
          onHeaderClick={() => clicked(index)}
          clicked={boxItem.clicked}
          hasItem={boxItem.hasItem}
        />
      ))}
    </div>
  );
};

export default Boxes;