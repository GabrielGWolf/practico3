// UserInterface.js
import React from 'react';
import shield from './assets/img/shield2.png';
import sword from './assets/img/sword2.png';
import waraxe from './assets/img/waraxe2.png';

function UserInterface({ onPlayerChoice }) {
  return (
    <div>
      <h2>Elija su arma:</h2>
      <button onClick={() => onPlayerChoice('espada')}><img src= {sword} alt = "Espada"></img></button>
      <button onClick={() => onPlayerChoice('escudo')}><img src= {shield} alt = "Escudo"></img></button>
      <button onClick={() => onPlayerChoice('hacha')}><img src= {waraxe} alt = "Hacha"></img></button>
    </div>
  );
}

export default UserInterface;
