// Result.js
import React from 'react';

function Result({ playerChoice, computerChoice, result }) {
  return (
    <div>
      <h2>Resultado:</h2>
      <p>Tu elección: {playerChoice}</p>
      <p>Elección de la computadora: {computerChoice}</p>
      <p>{result}</p>
    </div>
  );
}

export default Result;
