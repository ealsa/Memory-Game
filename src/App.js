import "./index.css";
import Settings from "./components/Settings";
import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [gameOptions, setGameOptions] = useState(null);

  const startGame = (options) => {
    setGameOptions(options);
  };

  const restartGame = () => {
    setGameOptions(null);
  };
  return (
    <>
      <h1 className="game-title">MEMORY GAME</h1>
      {!gameOptions ? (
        <Settings startGame={startGame} />
      ) : (
        <Board gameOptions={gameOptions} restartGame={restartGame} />
      )}
    </>
  );
}

export default App;
