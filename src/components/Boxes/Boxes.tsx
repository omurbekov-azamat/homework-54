import React from 'react';
import {Character} from "../../types";
import BoxItem from "./BoxItem";
import './box.css';

interface Props {
  boxes: Character[];
}

const Boxes: React.FC<Props> = ({boxes}) => {
  return (
    <div className='boxes'>
      {boxes.map((boxItem, index:number) => (
        <BoxItem
          key={index}
          clicked={boxItem.clicked}
          hasItem={boxItem.hasItem}
        />
      ))}
    </div>
  );
};

export default Boxes;