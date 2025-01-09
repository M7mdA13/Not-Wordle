import { useState, useEffect } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [correct, setCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  useEffect(() => {
    console.log("Updated currentGuess:", currentGuess);
  }, [currentGuess]);
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formatted = [...currentGuess].map((l) => {
      return { key: l, color: "gray" };
    });
    formatted.forEach((l, i) => {
      // check for green letters
      if (l.key === solutionArray[i]) {
        l.color = "green";
        solutionArray[i] = null; // null out the letter so it doesn't get counted again
      }
    });
    formatted.forEach((l, i) => {
      // check for yellow letters
      if (solutionArray.includes(l.key) && l.color !== "green") {
        l.color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null; // null out the letter so it doesn't get counted again
      }
    });
    return formatted;
  };
  const addNewGuess = (completed) => {
    //function to add new guess to guesses array
    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = completed;
      return newGuesses;
    });
    setUsedKeys((prev) => {
      let newUsedKeys = { ...prev };
      completed.forEach((l) => {
        const color = newUsedKeys[l.key];
        if (l.color === "green") {
          newUsedKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && color !== "green") {
          newUsedKeys[l.key] = "yellow";
          return;
        }
        if (l.color === "gray" && color !== "green" && color !== "yellow") {
          newUsedKeys[l.key] = "gray";
          return;
        }
      });
      return newUsedKeys;
    });
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter" && currentGuess.length === 5) {
      submitGuess();
    } else if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5) {
      setCurrentGuess((state) => {
        var newState = state;
        newState += e.key.toLowerCase();
        return newState;
      });
    }
  };

  const handleClick = (e) => {
    if (e.type === "click") {
      let newKey = e.target.innerText.toLowerCase();
      if (/^[a-zA-Z]$/.test(newKey) && currentGuess.length < 5) {
        setCurrentGuess((state) => {
          var newState = state;
          newState += newKey;
          return newState;
        });
      }
      if (newKey === "enter" && currentGuess.length === 5) {
        submitGuess();
      }
      if (newKey === "backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }
    }
  };

  const submitGuess = () => {
    if (history.includes(currentGuess)) {
      console.log("You already guessed that word");
      return;
    }
    const completed = formatGuess();
    addNewGuess(completed);
    setHistory((prev) => [...prev, currentGuess]);
    setTurn((prev) => prev + 1);

    if (currentGuess === solution) {
      setCorrect(true);
    } else if (turn === 5) {
      setGameOver(true);
    }
    setCurrentGuess("");
  };

  return {
    currentGuess,
    handleKeyUp,
    correct,
    gameOver,
    guesses,
    turn,
    usedKeys,
    handleClick,
  };
};
export default useWordle;
