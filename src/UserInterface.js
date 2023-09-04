// UserInterface.js
import React from 'react';

function UserInterface({ onPlayerChoice }) {
  return (
    <div>
      <h2>Elija su arma:</h2>
      <button onClick={() => onPlayerChoice('espada')}><img src= "./sword.png" alt = "Espada"></img></button>
      <button onClick={() => onPlayerChoice('escudo')}><img src= "./assets/img/shield.png" alt = "Escudo"></img></button>
      <button onClick={() => onPlayerChoice('hacha')}><img src= "./assets/img/waraxe.png" alt = "Hacha"></img></button>
    </div>
  );
}

export default UserInterface;
