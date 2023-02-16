import React from "react";
import Box from "./Box";
import "../css/Board.css";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, index) => {
        return (
          <Box
            value={value}
            onClick={() => value === null && onClick(index)}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Board;
