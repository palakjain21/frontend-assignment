import React,{useEffect, useState} from 'react';
import { BoardSquare } from '../boardSquare/BoardSquare';
import './Board.css';
import ButtonComponent from '../button/Button';
import { Piece} from '../piece/Piece';

const Board = ({ canvas }) => {

  const [[buttonX, buttonY], setButtonPos] = useState(canvas.buttonComponentPosition)   //taking the intial position of the components from the canvas instance


  //to register an observer on the canvas object. When the component mounts, it calls canvas.observe(setButtonPos), which registers the setButtonPos function as an observer for changes in the button component's position. Whenever the button component's position changes, the setButtonPos function will be called to update the state and trigger a re-render of the component.
  useEffect(() => {canvas.observe(setButtonPos)})


  //The renderSquare function is a helper function that renders an individual square on the board. It takes the i and j coordinates of the square, as well as a count value (which appears to be used as a unique key for the square). Inside renderSquare, a BoardSquare component is rendered. It represents a square on the board and receives the x and y coordinates, as well as the canvas instance as props.Inside BoardSquare, a Piece component is rendered. The Piece component represents the button component and receives a prop isButton that determines if it should be rendered as a button. The isButton prop is set to true if the x and y coordinates match the current button position (x === buttonX && y === buttonY).
  function renderSquare(i,j,count) {
    const x = i
    const y = j
    return (
      <div key={`${i}-{j}`} style={{border:'1px solid black'}}>
        <BoardSquare x={x} y={y} canvas={canvas}>
          <Piece isButton={x === buttonX && y === buttonY} />
        </BoardSquare>
      </div>
    )
  }

  //The squares array is then populated by calling the renderSquare function for each row (i) and column (j) on the board.
  const squares = []
  let count=0;
  for (let i = 0; i < 20; i += 1) {
    for(let j=0;j<20;j++){
    squares.push(renderSquare(i,j,count))
      count++
    }
  }


  return (
    <>
      <div className="board">
        {squares}
      </div>
    </>
  );
};

export default Board;