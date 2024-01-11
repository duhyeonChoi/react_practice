import { useState } from 'react'
import './App.css';

export default function App() {
 

  return (
    <>
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        1.<button>Go to game start</button>
      </div>
    </div>
    </>
  );
}


function Board() {
  let [ game, setGame ] = useState(
    [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
  ); // 3*3 짜리 빈 array 생성
  let [ xTurn, setXTurn ] = useState(true);

  function clicked(id) {
    if(CheckWinner(game) || game[id]){
      return;
    }
    let temp = [...game];
    if (xTurn) {
      temp[id]='X';
    } else {
      temp[id]='O';
    }
    setGame(temp);
    setXTurn(!xTurn)
    
  }

  const winner = CheckWinner(game);
  // console.log(game);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xTurn ? "X" : "O");
  }


  return (
    <>
    <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={game[0]} clicked={()=>{clicked(0)}}/>
        <Square value={game[1]} clicked={()=>{clicked(1)}}/>
        <Square value={game[2]} clicked={()=>{clicked(2)}}/>
      </div>
      <div className='board-row'>
        <Square value={game[3]} clicked={()=>{clicked(3)}}/>
        <Square value={game[4]} clicked={()=>{clicked(4)}}/>
        <Square value={game[5]} clicked={()=>{clicked(5)}}/>
      </div>
      <div className='board-row'>
        <Square value={game[6]} clicked={()=>{clicked(6)}}/>
        <Square value={game[7]} clicked={()=>{clicked(7)}}/>
        <Square value={game[8]} clicked={()=>{clicked(8)}}/>
    </div>
    </>
  );
}

function Square({value, clicked}) {
  return <button className="square" onClick={clicked} >{value}</button>;
}

function CheckWinner(game) {
  const winning_case = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i=0; i<8; i++) {
    const [a, b, c] = winning_case[i];
    if( game[a] && game[a]===game[b] && game[a]===game[c] ) {
      return game[a]; //winner값 return    
    }
  }
  return null;

}