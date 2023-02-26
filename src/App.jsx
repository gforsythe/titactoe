import React, { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';
import './styles.scss';
const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);


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
     <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  );
};
export default App;
