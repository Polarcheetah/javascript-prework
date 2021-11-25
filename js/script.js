
const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const buttonReset = document.getElementById('button-reset');

let playerWins = 0;
let computerWins = 0;
let playResult = `${playerWins} - ${computerWins}`;
  
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(`${argButtonName} został kliknięty`);

  function getMoveName(argMoveId) {
    console.log(`wywołano funkcję getMoveName z argumentem: ${argMoveId}`);
  
    switch(argMoveId) {
      case 1:
        return 'kamień';
      case 2:
        return 'papier';        
      case 3:
        return 'nożyce';
      default:
        printMessage(`Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`);
        return 'kamień';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
  
    console.log(`wywołano funkcję displayResults z argumentami: ${argPlayerMove}, ${argComputerMove}`);
    
    switch(true) {
      case (argPlayerMove ==='papier' && argComputerMove ==='kamień'):
        printMessage('Wygrywasz!');
        playerWins += 1;
        break;
      case (argPlayerMove ==='kamień' && argComputerMove ==='nożyce'):
        printMessage('Wygrywasz!');
        playerWins += 1;
        break;
      case (argPlayerMove ==='nożyce' && argComputerMove ==='papier'):
        printMessage('Wygrywasz!');
        playerWins += 1;
        break;
      case (argPlayerMove === argComputerMove):
        printMessage('Remis!');
        break;
      default:
        printMessage('Przegrywasz :(');
        computerWins += 1;
        break;
    }

    console.log(`Liczba zwycięstw gracza: ${playerWins}`);
    console.log(`Liczba zwycięstw komputera: ${computerWins}`);
    playResult = `${playerWins} - ${computerWins}`;
    console.log(`Wynik: ${playResult}`);
    document.getElementById("playResult").innerHTML = playResult;
    printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
  }

  const playerMove = argButtonName;
  console.log(`ruch gracza to: ${playerMove}`);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(`wylosowana liczba to: ${randomNumber}`);
  const computerMove = getMoveName(randomNumber);
  console.log(`ruch komputera to: ${computerMove}`);
  displayResult(playerMove, computerMove);
}

function ResetResult () {
  playerWins = 0;
  computerWins = 0;
  playResult = `${playerWins} - ${computerWins}`;
  document.getElementById("playResult").innerHTML = playResult;
}

buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonReset.addEventListener('click', function(){ ResetResult(); });

