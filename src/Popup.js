import React from 'react';

const Popup = ({ playerName, gameWinner, onRestart }) => {
    // Determinar la clase del fondo en función del ganador
    const popupClassName = gameWinner === 'Jugador' ? 'ganador' : 'perdedor';


  return (
    <div className={`popup ${popupClassName}`}>
      <div className="popup-content">
        <h2>{`${gameWinner === 'Jugador' ? playerName : 'PC'} es el ganador!`}</h2>
        <button onClick={onRestart}>Reiniciar Partida</button>
      </div>
    </div>
  );
};

export default Popup;
