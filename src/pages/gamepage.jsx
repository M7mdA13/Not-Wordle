import React, { useEffect} from "react";
import { useWord } from "../hooks/getWord";
import Logo from "../components/logo";
import useWordle from "../hooks/useWordle";
import Grid from "../components/Grid";
import Popup from "../components/popup";
import Button from "../components/button";
import { Link } from "react-router-dom";  
import Keypad from "../components/keypad";

function GamePage() {
  const solution = useWord();
  console.log(solution);
  const { currentGuess, handleKeyUp, guesses, turn, correct, gameOver,usedKeys,handleClick } = useWordle(solution);

  useEffect(() => {
    //function to add event listener for keyup
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp); // clean up function to remove the event listener
    };
  }, [handleKeyUp]);

  return (
    <div className="App-header">
      <Logo />
      <div className="game">
        <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      </div>
      <Keypad usedKeys={usedKeys} handleClick={handleClick}/>
      {correct && (
        <Popup>
          <h2>Correct!</h2>
          <h2>The Word Was {solution.toUpperCase()}</h2>
          <Link to='/' style={{textDecoration:"none"}}><Button text="Play Again?"/></Link>
        </Popup>
      )}
      {gameOver && (
        <Popup>
          <h2>Game Over!</h2>
          <h2>The Word Was {solution.toUpperCase()}</h2>
          <Link to='/' style={{textDecoration:"none"}}><Button text="Play Again?"/></Link>  
        </Popup>
      )}
    </div>
  );
}

export default GamePage;
