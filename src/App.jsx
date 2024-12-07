import "./App.css";
import LikeButton from './components/LikeButton'
import Counter from "./components/Counter"
import ClickablePicture from './components/ClickablePicture'
import Dice from "./components/Dice";

function App() {

  return (
    <>
    <div className="App">
     <h1> LAB | React Training</h1>
      <div className="components-container">
        <LikeButton />
       <Counter />
       <ClickablePicture />
       <Dice />
      </div> 
    </div>
    </>
  );
}

export default App;
