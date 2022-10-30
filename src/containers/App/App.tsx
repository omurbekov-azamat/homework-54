import {useState} from "react";
import {Character} from "../../types";
import Boxes from "../../components/Boxes/Boxes";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/ButtonReset/Button";

function App() {

  const getBoxes = () => {
    const boxes: Character[] = [];

    for (let i = 0; i < 36; i++) {
      const box:Character = {
        hasItem: false,
        clicked: false,
      };
      boxes.push(box);
    }

    const random = Math.floor(Math.random() * boxes.length);
    boxes[random].hasItem = true;
    return boxes;
  };

  const [boxes, setBoxes] = useState<Character[]>(getBoxes());

  let click:boolean[] = [];

  const clicked = (index:number) => {
    const boxesCopy = [...boxes];
    const boxCopy = {...boxes[index]};
    boxCopy.clicked = true;
    boxesCopy[index] = boxCopy;
    setBoxes(boxesCopy);
  };

  const countClicked = () => {
    for (let i = 0; i < boxes.length; i++) {
      if(boxes[i].clicked === true) {
        click.push(boxes[i].clicked);
      }
    }
  };

  countClicked();

  const reset = () => {
    setBoxes(getBoxes)
  };

  return (
    <>
      <Boxes boxes={boxes} clicked={clicked}/>
      <Counter clickCount={click.length}/>
      <Button reset={reset}/>
    </>
  );
}

export default App;
