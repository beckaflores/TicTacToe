var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
 
  handleClick = function(event) {
    var cell = event.target

    cell.innerHTML = currentPlayer;
    checkWinner()
    if(checkWinner()){
        alert("You Won");
        resetGame();
    }
    if(checkDraw()) {
        alert("Draw!");
        resetGame();
      }
      
  if(currentPlayer === "X" ) {
    playerSelections = playerXSelections;
    nextPlayer = "O";
  } else {
    playerSelections = playerOSelections;
    nextPlayer = "X";
  }

  playerSelections.push(parseInt(cell.id));

  // Swap players
  currentPlayer = nextPlayer;

    console.log(cell.id);
  }
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }
  
  function checkWinner() {
   for(i = 0; i < 8; i++)   {

    var combination = winningCombinations[i]
    var matches = 0
    for(j = 0; j < 3; j++) {

        var currentcell = document.getElementById(combination[j]).innerHTML
        if(currentcell === currentPlayer) {
            matches++
        } else {
            break
        }

    }
        if(matches === 3){
            return true
        }


   }
   return false
  }

  function checkDraw(){
    return playerOSelections.length + playerXSelections.length >= cells.length
} 

 function resetGame(){
    playerXSelections =  new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
      }
 }

