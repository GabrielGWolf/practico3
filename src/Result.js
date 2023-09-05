// Result.js
import React from 'react';

function Result({ playerName, playerChoice, computerChoice, result }) {
  return (
    <div>
      <h2>Resultado:</h2>
      <p> {playerName}, elejiste como tu Arma: {playerChoice}</p>
      <p>Arma del Rival: {computerChoice}</p>
      <p>Ganador de esta ronda: {result}</p>
    </div>
  );
}

export default Result;
