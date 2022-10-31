import {useState} from "react";
import {Character} from "../../types";
import Boxes from "../../components/Boxes/Boxes";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/ButtonReset/Button";
import FinishGame from "../../components/FinishGame/FinishGame";
import './App.css'

function App() {

  const getBoxes = () => {
    const boxes: Character[] = [];

    for (let i = 0; i < 36; i++) {
      const box: Character = {
        hasItem: false,
        clicked: false,
        game: true,
      };
      boxes.push(box);
    }

    const random = Math.floor(Math.random() * boxes.length);
    boxes[random].hasItem = true;
    return boxes;
  };

  const [boxes, setBoxes] = useState<Character[]>(getBoxes());
  let click: boolean[] = [];

  const clicked = (index: number) => {
    const boxesCopy = [...boxes];
    const boxCopy = {...boxes[index]};
    boxCopy.clicked = true;
    boxesCopy[index] = boxCopy;
    setBoxes(boxesCopy);
    if (boxCopy.hasItem === true) {
      for (let i = 0; i < boxes.length; i++){
          boxes[i].game = false;
      }
    }
  };

  const countClicked = () => {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].clicked === true && boxes[i].game === true) {
        click.push(boxes[i].clicked);
      }
    }
  };

  const finishGame = () => {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].game === false) {
        return 'Bravo, you found! Total tries: ' + click.length;
      }
    }
  }

  countClicked();

  const reset = () => {
    setBoxes(getBoxes)
  };

  return (
    <div className='container'>
      <Boxes boxes={boxes} clicked={clicked}/>
      <div className='ride-side'>
        <Counter clickCount={click.length}/>
        <Button reset={reset}/>
        <FinishGame getFinishGame={finishGame()}/>
      </div>
    </div>
  );
}

export default App;
