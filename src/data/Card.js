import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, value, isFlipped, handleClick }) => {
  return (
    <div
      className={`card2 ${isFlipped ? 'flipped' : ''} ${isFlipped && 'matched'}`}
      onClick={() => !isFlipped && handleClick(id, value)}
    >
      {isFlipped && <span>{value}</span>}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;










// import React, { useState, useEffect, useCallback } from 'react';
// import styled from 'styled-components';
// import './puzzle.css';
// import Card from '../../data/Card';
// import { Link } from 'react-router-dom';

// const containerStyle1 = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   gap: '10px',
//   width: '100%',
//   maxWidth: '1000px',
//   margin: '0 auto',
// };

// const Board1 = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-gap: 10px;
// `;

// const initialCards = [
//   { id: 1, value: 'A' }, { id: 2, value: 'A' },
//   { id: 3, value: 'A' }, { id: 4, value: 'A' },
//   { id: 5, value: 'A' }, { id: 6, value: 'C' },
//   { id: 7, value: 'D' }, { id: 8, value: 'D' },
//   { id: 9, value: 'E' },
// ];

// const Puzzle1 = () => {
//   const [cards, setCards] = useState([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
//   const [attempts, setAttempts] = useState(0);
//   const [message, setMessage] = useState('Attempts left: 2');
//   const [level, setLevel] = useState(1);

//   const shuffle = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   const initializeGame = useCallback(() => {
//     setCards(shuffle([...initialCards]));
//     setFlippedCards([]);
//     setMatchedCards([]);
//     setAttempts(0);
//     setMessage('Attempts left: 3');
//   }, []);

//   useEffect(() => {
//     initializeGame();
//   }, [level, initializeGame]);

//   const handleCardClick = (id, value) => {
//     if (flippedCards.length < 3 && !flippedCards.some(card => card.id === id)) {
//       setFlippedCards(prev => [...prev, { id, value }]);

//       if (flippedCards.length === 2) {
//         setAttempts(prev => prev + 1);

//         const [firstCard, secondCard] = flippedCards;

//         if (firstCard.value === value && secondCard.value === value) {
//           setMatchedCards(prev => [...prev, firstCard.id, secondCard.id, id]);
//           setFlippedCards([]);
//           if (matchedCards.length + 3 === initialCards.length) {
//             setMessage('You won this game!');
//             setTimeout(() => {
//               setLevel(prev => prev + 1);
//             }, 1000);
//           }
//         } else {
//           setTimeout(() => {
//             setFlippedCards([]);
//           }, 1000);
//         }

//         if (attempts >= 2) {
//           setTimeout(() => {
//             setMessage('Game over! Restarting...');
//             setTimeout(initializeGame, 2000);
//           }, 1000);
//         } else {
//           setMessage(`Attempts left: ${2 - attempts}`);
//         }
//       }
//     }
//   };

//   return (
//     <div className="col-sm-10 col-md-8 col-lg-6 mx-auto container2" style={containerStyle1}>
//       <div className='top4 me-5'>
//         <Link to="/game2">
//           <img className='puzzleimg1' src='./images/Puzzle1.png' alt='Logo' />
//         </Link>
//         <Link to="/game3">
//           <img className='puzzleimg1' src='./images/Purple.png' alt='puzzle Logo' />
//         </Link>
//       </div>
//       <div className='col-5'>
//         <div className="game-container">
//           <h1>Match The Pairs Level {level}</h1>
//           <div>
//             <Board1 className='game-board'>
//               {cards.map(card => (
//                 <Card
//                   key={card.id}
//                   id={card.id}
//                   value={card.value}
//                   isFlipped={flippedCards.some(flippedCard => flippedCard.id === card.id) || matchedCards.includes(card.id)}
//                   handleClick={handleCardClick}
//                 />
//               ))}
//             </Board1>
//           </div>
//           <div className="message">{message}</div>
//           <button className="button" onClick={initializeGame}>Restart Game</button>
//           <Link to="/puzzle2">
//             <button className="button">Next Level</button>
//           </Link>
//         </div>
//       </div>
//       <div className='top4 ms-5'>
//         <Link to="/game3">
//           <img className='puzzleimg1' src='./images/Purple.png' alt='puzzle Logo' />
//         </Link>
//         <Link to="/game2">
//           <img className='puzzleimg1' src='./images/Puzzle1.png' alt='Logo' />
//         </Link>
//       </div>
//       <div className='top4'>
//         <Link to="/game3">
//           <img className='puzzleimg1' src='./images/Purple.png' alt='puzzle Logo' />
//         </Link>
//         <Link to="/game3">
//           <img className='puzzleimg1' src='./images/Purple.png' alt='puzzle Logo' />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Puzzle1;
