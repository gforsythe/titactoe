import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';
import './styles.scss';
const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const nextPlayer = isXNext ? "X" : "O";
  const winner = calculateWinner(squares);
  const statusMessage = winner ? `Winner is ${winner}`: `The Next Player is ${nextPlayer}`

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner ) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, pos) => {
        if (clickedPosition === pos) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      <h1>{statusMessage}</h1>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  );
};
export default App;
