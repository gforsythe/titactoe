import React, { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';
import './styles.scss';
// Global Variable for the game
const NEW_GAME = [{squares: Array(9).fill(null), isXNext:false}];

const App = () => {
  //At the begining the game defaults to a New Game
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove]

  
// deconstructed from the winner JS object see winner.js
  const {winner, winningSquares} = calculateWinner(gamingBoard.squares);

// console.log({historyLength:history, currentMove});


  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner ) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing ? currentHistory[currentMove]: history[history.length - 1];



      const nextSquaresState= lastGamingState.squares.map((squareValue, pos) => {
        if (clickedPosition === pos) {
          return lastGamingState.isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
      const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1) : currentHistory
      return base.concat({squares:nextSquaresState, isXNext:!lastGamingState.isXNext})
    });

    setCurrentMove(move => move + 1);
  };

const moveTo = (move) => {
  setCurrentMove(move)
}
// leveraging the Global Variable
const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
}
//Notice what props are passed down to other componenets
  return (
    <div className="app">
      <h1 style={{fontSize: '4rem'}}>TIC <span className='text-green'>TAC</span> TOE</h1>
     <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
    
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
      {/* dynamic css with JS only in React */}
         <button  type='button' className={`btn-reset ${winner ? 'active' : ''}`} onClick={onNewGameStart}>Reset Game</button>
      <h2 style={{
        fontWeight: 'normal'
      }}> Game History</h2>
      <History moveTo={moveTo} history={history} currentMove={currentMove}/>
      <div className='bg-balls' />
    </div>
  );
};
export default App;