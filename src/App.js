import React, { useState } from 'react';
/* Agrego SweetAlerts2 para utilizar en el modulo */
import Swal from 'sweetalert2'; //Utiliza SweetAlerts como componente visual para mejorar la pagina en gral.
/* Import de las imagenes que neesito utilizar*/
import './assets/img/shield.png';
import './assets/img/sword.png';
import './assets/img/waraxe.png';
import './assets/css/styles.css';
/* Import de los modulos a utilizar */
import UserInterface from './UserInterface'; //interfaz del usuario
import Scoreboard from './Scoreboard'; // tablero de resultados
import Result from './Result'; // resultados
import Popup from './Popup';
import WelcomePopup from './WelcomePopup';



function App() {
    /* CONSTS */
    const [playerName, setPlayerName] = useState('');
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [round, setRound] = useState(1);
    const maxRounds = 5;
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);
    const [isNameComplete, setIsNameComplete] = useState(false);
    const [isGameEnabled, setIsGameEnabled] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [ventanaFinal, setVentanaFinal] = useState(false);
    const choices = ['espada', 'escudo', 'hacha'];

    /* FUNCIONES - ACCIONES */

    /* determinar ganador - lógica del juego - reglas */

    const determineWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return 'Empate';
        } else if (
            (playerChoice === 'espada' && computerChoice === 'hacha') ||
            (playerChoice === 'escudo' && computerChoice === 'espada') ||
            (playerChoice === 'hacha' && computerChoice === 'escudo')
        ) {
            setRound(round + 1)
            return 'Jugador';
        } else {
            setRound(round + 1)
            return 'PC';
        }
    };
    /* Resetear el juego, para iniciar de nuevo con el mismo usuario */

    const resetGame = () => {
        setRound(1);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult('');
        setGameOver(false);
        setWinner(null);
        setVentanaFinal(false)
    };

    const handleRestart = () => {
        resetGame();
    };

    /* Elección del jugador: Maneja también la generación del random de la PC y llama al resultado del partido, usando las reglas del juego */

    const handlePlayerChoice = (choice) => {
        if (round <= maxRounds) {
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const roundResult = determineWinner(choice, computerChoice);

            setPlayerChoice(choice);
            setComputerChoice(computerChoice);
            setResult(roundResult);

            if (roundResult === 'Jugador') {
                setPlayerScore(playerScore + 1);
            } else if (roundResult === 'PC') {
                setComputerScore(computerScore + 1);
            }

            if (round >= maxRounds) {
                const gameWinner = playerScore > computerScore ? 'Jugador' : 'PC';
                setGameOver(true);
                setWinner(gameWinner);
                setVentanaFinal(true);

            }
        }
    };

    const handleNameSubmit = () => {
        // Verificar si el nombre no está vacío y habilitar el juego
        if (playerName.trim() !== '') {
            setIsNameComplete(true);
            setIsGameEnabled(true);
        } else {
            // Mostrar SweetAlert si el nombre está vacío
            Swal.fire({
                icon: 'error',
                title: 'No hay anonimos en el Valhalla',
                html: 'Guerrero!! Necesitamos saber a quien alabaremos.<br/> Por favor, dinos tu nombre.',
                confirmButtonText: 'Si tanto lo deseas... ',
            });
        }
    };

    /* iniciar el juego, mostrar las reglas,*/

    const handleGameStart = () => {
        setIsGameEnabled(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };



    /* LO QUE SE RENDERIZA FINALMENTE */

    return (
        <div>
            <h1>¿Podrás Entrar al Valhalla? <br /> Una reversión del clásico Piedra, Papel o Tijeras</h1>
            {!isGameEnabled && (
                <button onClick={() => setShowPopup(true)}>Iniciar Juego</button>
            )}
            <WelcomePopup showPopup={showPopup} onStartGame={handleGameStart} onClose={handleClosePopup} />

            {isGameEnabled && !isNameComplete && (
                <form>
                    <label>
                        <p className='bienvenida'>¡¡Guerrero!! Grite fuerte su nombre:</p>
                        <input
                            type="text"
                            value={playerName}
                            onChange={(event) => setPlayerName(event.target.value)}
                        />
                    </label>
                    <button type="button" onClick={handleNameSubmit}>
                        ¡Este es mi nombre!
                    </button>
                </form>
            )}

            {isNameComplete && !gameOver && (
                <>
                    <p className='bienvenida'>Bienvenido {playerName}</p>
                    <UserInterface onPlayerChoice={handlePlayerChoice} />
                    <Scoreboard playerScore={playerScore} computerScore={computerScore} />
                    <Result
                        playerName={playerName}
                        playerChoice={playerChoice}
                        computerChoice={computerChoice}
                        result={result}
                    />
                    <p>Ronda {round - 1}</p>
                </>
            )}

            {gameOver && (
                <Popup playerName={playerName} gameWinner={winner} onRestart={handleRestart} />
            )
            }
        </div >
    );
}

export default App;