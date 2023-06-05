import React from 'react';
import './Board.css';

const Board = () => {
    const tileCount = 900;

    return (
      <div className="board">
        {Array.from({ length: tileCount }, (_, index) => (
          <div key={index} className="tile"></div>
        ))}
      </div>
    );
};

export default Board;