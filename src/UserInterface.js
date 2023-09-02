// UserInterface.js
import React from 'react';

function UserInterface({ onPlayerChoice }) {
  return (
    <div>
      <h2>Tu elección:</h2>
      <button onClick={() => onPlayerChoice('piedra')}>Piedra</button>
      <button onClick={() => onPlayerChoice('papel')}>Papel</button>
      <button onClick={() => onPlayerChoice('tijera')}>Tijera</button>
    </div>
  );
}

export default UserInterface;
