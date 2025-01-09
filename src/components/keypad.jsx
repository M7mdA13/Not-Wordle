import React, { useState } from "react";

export default function Keypad({ usedKeys, handleClick }) {
  const [hoveredKey, setHoveredKey] = useState(null);

  const row1 = [
    { key: "Q" },
    { key: "W" },
    { key: "E" },
    { key: "R" },
    { key: "T" },
    { key: "Y" },
    { key: "U" },
    { key: "I" },
    { key: "O" },
    { key: "P" },
  ];

  const row2 = [
    { key: "A" },
    { key: "S" },
    { key: "D" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "J" },
    { key: "K" },
    { key: "L" },
  ];

  const row3 = [
    { key: "Z" },
    { key: "X" },
    { key: "C" },
    { key: "V" },
    { key: "B" },
    { key: "N" },
    { key: "M" },
  ];

  const renderRow = (row) => (
    <div className="keypad-row">
      {row.map((l) => {
        const color = usedKeys[l.key.toLowerCase()];
        const isHovered = hoveredKey === l.key;

        return (
          <button
            key={l.key}
            className={`${isHovered ? "hovered" : color}`}
            onClick={handleClick}
            onMouseEnter={() => setHoveredKey(l.key)}
            onMouseLeave={() => setHoveredKey(null)}
          >
            {l.key}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="keypad">
      {renderRow(row1)}
      {renderRow(row2)}
      {renderRow(row3)}
    </div>
  );
}
