//your JS code here. If required.
let player1, player2, currentPlayer, moves;
    const winningCombos = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]
    ];
    const cells = document.querySelectorAll('.cell');
    const message = document.querySelector('.message');
    const board = document.getElementById('board');
    
    function startGame() {
      player1 = document.getElementById('player-1').value;
      player2 = document.getElementById('player-2').value;
      currentPlayer = player1;
      moves = { [player1]: [], [player2]: [] };
      message.innerHTML = `${currentPlayer}, you're up!`;
      board.style.display = 'block';
    }
    
    function play(id) {
      const cell = document.getElementById(id);
      if (!cell.innerHTML) {
        cell.innerHTML = currentPlayer === player1 ? 'X' : 'O';
        moves[currentPlayer].push(id);
		 if (checkWin()) {
          message.innerHTML = `${currentPlayer} congratulations you won!`;
          for (const cell of cells) {
            cell.onclick = null;
          }
          return;
        }