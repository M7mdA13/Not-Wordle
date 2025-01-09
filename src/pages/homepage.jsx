import { useState } from "react";
import React from "react";
import Button from "../components/button";
import Popup from "../components/popup";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="App-header">
      <div className="heading">
        <Logo />
        <Link to="/game" style={{textDecoration:"none"}}> <Button text="Play Not Wordle" /></Link>
        <Button text="How to Play" clickFunction={togglePopup} />
      </div>
      {showPopup && (
        <Popup>
          <h2>How to Play Wordle</h2>
          <p>Guess the Wordle in six tries.</p>
          <p>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
          <Button text="Close" clickFunction={togglePopup} />
        </Popup>
      )}
    </div>
  );
}

export default Home;
