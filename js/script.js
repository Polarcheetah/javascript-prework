//let buttonPaper, buttonRock, buttonScissors, buttonReset;

let buttonPaper = document.getElementById('button-paper');
let buttonRock = document.getElementById('button-rock');
let buttonScissors = document.getElementById('button-scissors');
let buttonReset = document.getElementById('button-reset');

let playerWins = 0;
let computerWins = 0;
let playResult = playerWins + " - " + computerWins;
/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  let computerMove, playerMove, randomNumber, playerInput;

  

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerWins++;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerWins++;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerWins++;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
    computerWins++;
  }
  playResult = playerWins + " - " + computerWins;
  
  console.log("Liczba zwycięstw gracza: " + playerWins);
  console.log("Liczba zwycięstw komputera: " + computerWins);
  document.getElementById("playResult").innerHTML = playResult;
  console.log("Wynik: " + playResult);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
  
}

console.log('wybór ruchu gracza to: ' + playerInput);

playerMove = argButtonName;

console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);

displayResult(playerMove, computerMove);

}

function ResetResult () {
  playerWins = 0;
  computerWins = 0;
  playResult = playerWins + " - " + computerWins;
  document.getElementById("playResult").innerHTML = playResult;
}

//buttonTest = document.getElementById('button-test');
//buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

buttonReset.addEventListener('click', function(){ ResetResult(); });

