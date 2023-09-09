// WelcomePopup.js
import React from 'react';

function WelcomePopup({ showPopup, onStartGame, onClose }) {
  const handleStartClick = () => {
    onStartGame();
    onClose();
  };

  if (!showPopup) {
    return null; // No mostrar el popup si showPopup es falso
  }

  return (
    <div className="welcomePopup">
      <div className="welcomePopup-content">
        <h2>¡Bienvenido al juego!</h2>
        <p>
          Este es el clásico juego de Piedra, Papel o Tijeras pero con un nuevo giro.
        </p>
        <p>
          En este juego, juegas con ESPADA, HACHA o ESCUDO.
        </p>
        <p>
          - El Hacha parte al escudo (como la Tijera cortaba el Papel).
        </p>
        <p>
          - El Escudo detiene a la Espada (como el Papel envolvía la Piedra).
        </p>
        <p>
          - La Espada atraviesa la defensa del Hacha (como la Piedra aplasta la Tijera).
        </p>
        <p>Se juegan 5 rondas, y el mejor de esas 5 es el ganador. </p>
        <p>¿Serás recibido en los salones de Odin? </p>
        <button onClick={handleStartClick}>¡Estoy listo para la Batalla!</button>
      </div>
    </div>
  );
}

export default WelcomePopup;
