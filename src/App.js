// App.js
import React, { useState, useEffect } from 'react';
import UserInterface from './UserInterface';
import Scoreboard from './Scoreboard';
import Result from './Result';
import Swal from 'sweetalert2';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const maxRounds = 5;
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const choices = ['piedra', 'papel', 'tijera'];

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return 'Empate';
    } else if (
      (playerChoice === 'piedra' && computerChoice === 'tijera') ||
      (playerChoice === 'papel' && computerChoice === 'piedra') ||
      (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
      return 'Jugador';
    } else {
      return 'PC';
    }
  };

  const handlePlayerChoice = (choice) => {
    if (round <= maxRounds) {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const roundResult = determineWinner(choice, computerChoice);

      setPlayerChoice(choice);
      setComputerChoice(computerChoice);
      setResult(roundResult);

      if (roundResult === 'Jugador') {
        setPlayerScore(playerScore + 1);
      } else if (roundResult === 'PC') {
        setComputerScore(computerScore + 1);
      }

      setRound(round + 1);

      if (round >= maxRounds) {
        // El juego ha terminado después de 5 rondas (o el número deseado de rondas).
        const gameWinner = playerScore > computerScore ? 'Jugador' : 'PC';
        setGameOver(true);
        setWinner(gameWinner);
      }
    }
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
    
  };

  const handleRestart = () => {
    Swal.fire({
      title: `¡${winner === 'Jugador' ? playerName : 'PC'} es el ganador!`,
      icon: 'success',
      confirmButtonText: 'Reiniciar Partida',
    }).then(() => {
      // Restablecer el juego
      setRound(1);
      setPlayerScore(0);
      setComputerScore(0);
      setPlayerChoice(null);
      setComputerChoice(null);
      setResult('');
      setGameOver(false);
      setWinner(null);
    })
  };

  return (
    <div>
      <h1>Piedra, Papel o Tijeras</h1>
      <form>
        <label>
          Ingresa tu nombre:
          <input
            type="text"
            value={playerName}
            onChange={handleNameChange}
          />
        </label>
      </form>
      {gameOver ? (
        <>
          <p>El juego ha terminado. El ganador es: {winner}</p>
          {handleRestart()}
        </>
      ) : (
        <>
          <UserInterface onPlayerChoice={handlePlayerChoice} />
          <Scoreboard playerScore={playerScore} computerScore={computerScore} />
          <Result
            playerName={playerName}
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            result={result}
          />
          <p>Ronda {round}</p>
        </>
      )}
    </div>
  );
}

export default App;
