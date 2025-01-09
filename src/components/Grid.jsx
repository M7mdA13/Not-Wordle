import React from "react";
import Row from "./row";
function Grid({currentGuess, guesses, turn}) {
  return (
    <div>
      {guesses.map((g, i) => {
        if(i === turn){
          return(
            <Row key={i} currentGuess={currentGuess}/>
          )
        }
        return(
          <Row key={i} guess={g}/>
        ) 
      })}
    </div>
  );
}
export default Grid;