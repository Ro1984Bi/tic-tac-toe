import "./App.css";
import React, { useState } from "react";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xP, setXP] = useState(true);
  const [score, setScore] = useState({
    xScore: 0,
    oScore: 0,
  });
  const [gameOver, setGameOver] = useState(false)

  const handleClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xP === true ? "x" : "o";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === 'o') {
        let {oScore} = score
        oScore += 1
        setScore({...score, oScore})

      } else {
        let {xScore} = score
        xScore += 1
        setScore({...score, xScore})
      }
    }

    
    setBoard(updateBoard);
    setXP(!xP);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <ScoreBoard score={score} xP={xP} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
