// Scoreboard.js
import React from 'react';

function Scoreboard({ playerScore, computerScore }) {
  return (
    <div>
      <h2>Marcador:</h2>
      <p>Enemigos derrotados: {playerScore}</p>
      <p>Veces que caíste en batalla: {computerScore}</p>
    </div>
  );
}

export default Scoreboard;
