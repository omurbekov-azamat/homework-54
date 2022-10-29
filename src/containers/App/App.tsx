import Box from "../../components/Box/Box";
import './App.css';


function App() {

  const getBoxes = () => {
    const boxes: Box[] = [];

    for (let i = 0; i < 36; i++) {
      const box2:Box = {
        hasItem: false,
        clicked: false,
      };
      boxes.push(box2);
    }

    const random = Math.floor(Math.random() * boxes.length);
    boxes[random].hasItem = true;
    console.log(boxes)
  }
  getBoxes();
  return (
    <div className="App">
    </div>
  );
}

export default App;
