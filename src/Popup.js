import React from 'react';

const Popup = ({ playerName, gameWinner, onRestart }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{`${gameWinner === 'Jugador' ? playerName : 'PC'} es el ganador!`}</h2>
        <button onClick={onRestart}>Reiniciar Partida</button>
      </div>
    </div>
  );
};

export default Popup;
