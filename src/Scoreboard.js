// Scoreboard.js
import React from 'react';

function Scoreboard({ playerScore, computerScore }) {
  return (
    <div>
      <h2>Marcador:</h2>
      <p>Jugador: {playerScore}</p>
      <p>Computadora: {computerScore}</p>
    </div>
  );
}

export default Scoreboard;
