let players = ['x', 'o'];
let activePlayer = 0;
let boardSize = 3;

function startGame() { 
  board = [];
  for (let i = 0; i < boardSize; i++){
    let data = [];
    for (let j = 0; j < boardSize; j++){
      data.push('');
    }
  board.push(data);
  }
  renderBoard (board);
  activePlayer = 0;
}

function checkWin(diagonal, vertical) {
  let i, flag;
  
  flag = 0;    //проверка по горизонтали
  for (i = 0; i < board.length-1; i++){
    if ((board[diagonal][i] === board[diagonal][i+1]) && (board[diagonal][i] === players[activePlayer]))
    flag++
    }
  if (flag === boardSize - 1){
    return true
  }

    flag = 0;    //проверка по вертикали
  for (i = 0; i < board.length-1; i++){
    if ((board[i][vertical] === board[i+1][vertical]) && (board[i][vertical] === players[activePlayer]))
    flag++
    }
  if (flag === boardSize - 1){
    return true
  }

   flag = 0;    //проверка по диагонали
  for (i = 0; i < board.length-1; i++){
    if ((board[i][i] === board[i+1][i+1]) && (board[i][i] === players[activePlayer]))
    flag++
    }
  if (flag === boardSize - 1){
    return true
  }

     flag = 0;    //проверка по диагонали 2 
  for (i = 0; i < board.length-1; i++){
    if ((board[i][board.length - i - 1] === board[i+1][board.length - i - 2]) && (board[i][board.length - i - 1] === players[activePlayer]))
    flag++
    }
  if (flag === boardSize - 1){
    return true
  }
    

}

function click(diagonal, vertical) {
  board[diagonal][vertical] = players[activePlayer];
  renderBoard (board);
   if (checkWin(diagonal, vertical)){
      showWinner(activePlayer)
    }
    activePlayer = (activePlayer + 1) % 2;
}


