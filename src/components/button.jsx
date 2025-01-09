import React from "react";
import {useState} from "react";

function Button(props){
    const [hovered, setHovered] = useState(false);
    
      const onHover = () => setHovered(true);
      const onLeave = () => setHovered(false);
    return(
        <button
        className={`button ${hovered ? "hovered" : "button"}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={props.clickFunction}
      >
        {props.text}
      </button>
    );
}
export default Button;