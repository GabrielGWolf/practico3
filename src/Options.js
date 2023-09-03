// Options.js
import React from 'react';

function Options({ onPlayerChoice }) {
  const choices = ['espada', 'escudo', 'hacha'];

  const handleOptionClick = (choice) => {
    onPlayerChoice(choice);

    // Generar aleatoriamente la opción del oponente (PC)
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    onPlayerChoice(computerChoice);
  };

  return (
    <div>
      <h2>Elige tu opción:</h2>
      {choices.map((choice) => (
        <button key={choice} onClick={() => handleOptionClick(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Options;
