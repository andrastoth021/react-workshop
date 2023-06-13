// use nextId() to generate a new unique ID when needed
import nextId from "./generateId";
import Dice from "./components/Dice";

function App() {
  return (
    <div>
      <Dice number={3}/>
    </div>
  );
}

export default App;
