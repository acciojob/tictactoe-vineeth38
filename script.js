//your JS code here. If required.
 var currentPlayer = 1;
      var board = document.getElementById("board");
      var cells = document.getElementsByClassName("cell");
      var message = document.getElementById("message");
      var player1Name, player2Name;

      function startGame() {
        player1Name = document.getElementById("player-1").value;
        player2Name = document.getElementById("player-2").value;

        if (player1Name && player2Name) {
          document.getElementById("submit").disabled = true;
          createBoard();
          displayMessage(player1Name + ", you're up!");
        }
      }
function createBoard() {
        for (var i = 1; i <= 9; i++) {
          var cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("id", i);
          cell.addEventListener("click", cellClicked);
          board.appendChild(cell);
        }
      }

      function cellClicked() {
        if (!this.textContent) {
          if (currentPlayer === 1) {
            this.textContent = "X";
            displayMessage(player2Name + ", you're up!");
            currentPlayer = 2;
          } else {
            this.textContent = "O";
            displayMessage(player1Name + ", you're up!");
            currentPlayer = 1;
          }
          checkWin();
        }
      }
function checkWin() {
        var winningCombos = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
          [1, 5, 9],
          [3, 5, 7],
        ];

        for (var i = 0; i < winningCombos.length; i++) {
          var combo = winningCombos[i];
          var cell1 = document.getElementById(combo[0]).textContent;
          var cell2 = document.getElementById(combo[1]).textContent;
          var cell3 = document.getElementById(combo[2]).textContent;

          if (cell1 && cell1 === cell2 && cell1 === cell3) {
			  var winner = cell1 === "X" ? player1Name : player2Name;
            displayMessage(winner + ", congratulations, you won!");
            disableCells();
            break;
			 }
        }
      }

      function disableCells() {
        for (var i = 0; i < cells.length; i++) {
          cells[i].removeEventListener("click", cellClicked);
        }
      }

      function displayMessage(msg) {
        message.textContent = msg;
      }  
       