/* Importaciones  */
import React, { useState } from 'react';
import UserInterface from './UserInterface'; //interfaz del usuario
import Scoreboard from './Scoreboard'; // tablero de resultados
import Result from './Result'; // resultados
import Swal from 'sweetalert2'; //Utiliza SweetAlerts como componente visual para mejorar la pagina en gral.
import './assets/img/shield.png';
import './assets/img/sword.png';
import './assets/img/waraxe.png';
import './assets/css/styles.css';

function App() {
    /* CONST */
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
    /* const [showIntro, setShowIntro] = useState(true); Nueva variable para mostrar la introducción */
    const choices = ['espada', 'escudo', 'hacha'];

    const determineWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return 'Empate';
        } else if (
            (playerChoice === 'espada' && computerChoice === 'hacha') ||
            (playerChoice === 'escudo' && computerChoice === 'espada') ||
            (playerChoice === 'hacha' && computerChoice === 'escudo')
        ) {
            return 'Jugador';
        } else {
            return 'PC';
        }
    };

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

            setRound(round + 1);

            if (round >= maxRounds) {
                const gameWinner = playerScore > computerScore ? 'Jugador' : 'PC';
                setGameOver(true);
                setWinner(gameWinner);

                // Mostrar SweetAlert de ganador
                Swal.fire({
                    title: `¡${gameWinner === 'Jugador' ? playerName : 'PC'} es el ganador!`,
                    icon: "success",
                    confirmButtonText: 'Reiniciar Partida',
                }).then(() => {
                    // Restablecer el juego
                    setRound(1);
                    setPlayerScore(0);
                    setComputerScore(0);
                    setPlayerChoice(null);
                    setComputerChoice(null);
                    setResult('');
                    setGameOver(false);
                    setWinner(null);
                });
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
                title: 'Nombre vacío',
                text: 'El nombre no puede estar vacío. Por favor, ingresa tu nombre.',
            });
        }
    };

/*     const handleNameChange = (event) => {
        const newName = event.target.value;
        setPlayerName(newName);
        setIsNameComplete(newName.trim() !== ''); // Verificar si el nombre no está vacío
    }; */

    const handleRestart = () => {
        setRound(1);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult('');
        setGameOver(false);
        setWinner(null);
    };

    const showWelcomeAlert = () => {
        Swal.fire({
            title: '¡Bienvenido al juego!',
            html: "Este es el clasico juego de Piedra Papel Tijeras pero con un 'nuevo giro'.<br/> En este juego, jugas con ESPADA, HACHA o ESCUDO.<br/> El Hacha parte al escudo (como la Tijera cortaba el Papel),<br/> el Escudo detiene a la Espada (como el Papel envolvía la Piedra),<br/> La Espada atravieza la defensa del Hacha (como la Piedra aplasta la Tijera)<br/>. ¡Que Odin te sonría, y tengas mucha suerte en la batalla!. <br/> Presiona el botón para comenzar.<br/>",
            icon: 'warning',
            confirmButtonText: '¡Estoy listo para la Batalla!',
         
        }).then((result) => {
            if (result.isConfirmed) {
                setIsGameEnabled(true); // Habilitar el juego
            }
        });
    };


    return (
        <div>
            <h1>¿Podrás Entrar al Valhalla? <br/> Una reversión del clásico Piedra, Papel o Tijeras</h1>
            {!isGameEnabled && (
                <button onClick={showWelcomeAlert}>Iniciar Juego</button>
            )}

            {isGameEnabled && !isNameComplete && (
                <form>
                    <label>
                        ¡¡Guerrero!! Grite fuerte su nombre:
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
                    <p>Bienvenido {playerName}</p>
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
                <>
                    <p>El juego ha terminado. El ganador es: {winner}</p>
                    <button onClick={handleRestart}>Reiniciar Partida</button>
                </>
            )}
        </div>
    );
}

export default App;