import React from 'react';

const WelcomePopup = ({ onStartGame }) => {
  return (
    <div className="welcome-popup">
      <h2>¡Bienvenido al juego!</h2>
      <p>Este es el clásico juego de Piedra, Papel o Tijeras, pero con un giro diferente.</p>
      <p>En este juego, juegas con ESPADA, HACHA o ESCUDO.</p>
      <ul>
        <li>El Hacha parte al escudo (como la Tijera cortaba el Papel).</li>
        <li>El Escudo detiene a la Espada (como el Papel envolvía la Piedra).</li>
        <li>La Espada atraviesa la defensa del Hacha (como la Piedra aplasta la Tijera).</li>
      </ul>
      <p>¡Que Odin te sonría y tengas mucha suerte en la batalla!</p>
      <button onClick={onStartGame}>¡Estoy listo para la Batalla!</button>
    </div>
  );
};

export default WelcomePopup;
