import { useState } from "react";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";
import './App.css'; 

function App() {
  const [playNowClicked, setPlayNowClicked] = useState(false);
  const handleOnCLick = () => {
    setPlayNowClicked(true);
  };
  return (
    <div className="app-container">
      {playNowClicked ? <GamePage /> : <HomePage handleOnCLick={handleOnCLick} />}
    </div>
  );
}

export default App;
