import Box from "../../components/Box/Box";
import {useState} from "react";
import Boxes from "../../components/Boxes/Boxes";

function App() {

  const getBoxes = () => {
    const boxes: Box[] = [];

    for (let i = 0; i < 36; i++) {
      const box:Box = {
        hasItem: false,
        clicked: false,
      };
      boxes.push(box);
    }

    const random = Math.floor(Math.random() * boxes.length);
    boxes[random].hasItem = true;
    return boxes;
  };

  const [boxes, setBoxes] = useState<Box[]>(getBoxes());

  const clicked = (index:number) => {
    const boxesCopy = [...boxes];
    const boxCopy = {...boxes[index]};
    boxCopy.clicked = true;
    boxesCopy[index] = boxCopy;
    setBoxes(boxesCopy);
  };
  console.log(boxes)

  return (
    <div>
      <Boxes boxes={boxes}
             clicked={clicked}
      />
    </div>
  );
}

export default App;
