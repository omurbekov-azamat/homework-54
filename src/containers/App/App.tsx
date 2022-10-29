import Box from "../../components/Box/Box";
import './App.css';
import {useState} from "react";


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

  console.log(boxes)

  return (
    <div className="App">
    </div>
  );
}

export default App;
