import React from 'react';

function Square({ value, onClick, isWinningSquare }) {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      className={`square ${colorClassName} ${winningClassName}`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
