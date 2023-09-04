// Result.js
import React from 'react';

function Result({ playerChoice, computerChoice, result }) {
  return (
    <div>
      <h2>Resultado:</h2>
      <p>Tu Arma: {playerChoice}</p>
      <p>Arma del Rival: {computerChoice}</p>
      <p>Ganador de esta ronda: {result}</p>
    </div>
  );
}

export default Result;
