import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Assuming you are using react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css';
import "./Puzzle.css";
import { Link } from 'react-router-dom';

const Wordpuzzle1 = () => {
    const words = ["BACKPACKS", "Outdoor", "ADVENTURES"];
    const [currentLevel, setCurrentLevel] = useState(0); // Level starts from 0
    const [guess, setGuess] = useState('');
    const [scrambledWord, setScrambledWord] = useState(scrambleWord(words[0]));
    const [gameOver, setGameOver] = useState(false);
    const [correctGuess, setCorrectGuess] = useState(false); // Tracks if the guess is correct

    function scrambleWord(word) {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    }

    function checkAnswer() {
        const currentWord = words[currentLevel].toLowerCase(); // Convert the current word to lowercase
        if (guess.toLowerCase() === currentWord) { // Compare both in lowercase
            toast.success('Well Done!', { className: 'toast-custom' });
            setCorrectGuess(true);  // Show the "Next Level" button on correct guess
        } else {
            toast.error('Try Again!', { className: 'toast-custom' });
        }
    }

    function nextLevel() {
        if (currentLevel < words.length - 1) {
            setCurrentLevel(currentLevel + 1);
            setScrambledWord(scrambleWord(words[currentLevel + 1]));
            setGuess('');
            setCorrectGuess(false); // Hide the "Next Level" button until next correct guess
        } else {
            setGameOver(true);
        }
    }

    return (
        <div>
            <div className="Puzzle my-3">
                <h4 className="current-color">Current Level 2</h4>
                <h1 className="color">Word Puzzle Game</h1>

                {!gameOver ? (
                    <>
                        <div className="level">Level {currentLevel + 1}</div>
                        <div className="word">{scrambledWord}</div>
                        <input
                            type="text"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            placeholder="Your Guess"
                        />
                        <div>
                            <button className="button1" onClick={checkAnswer}>Submit</button>

                            {/* Conditionally render the "Next Level" button only if the guess is correct */}
                            {correctGuess && (
                                <button className="button1" onClick={nextLevel}>Next Level</button>
                            )}
                        </div>
                    </>
                ) : (
                    <div>
                        <h2 className="congrat-color">Congratulations! You've completed all levels.</h2>
                        <button className="button1" onClick={() => window.location.reload()}>
                            Restart
                        </button>
                        <Link to="/word-puzzle2" className="button1 mx-2">
                            Next Level
                        </Link>
                    </div>
                )}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 second my-2">
                        <h2 className="my-4">How to Play Free Puzzle Game</h2>
                        <h6 className="puzzle-game-intro me-5">
                            Free Jigsaw planet games are a delightful way to challenge your mind,
                            improve cognitive skills, improve your picking power, and enjoy some leisure time.
                            Jigsawplanet come in various forms, with unique content from traditional paper jigsawplanet
                            to sophisticated digital games. The jigsawplanet guide will walk you through the basic principles of playing different types
                            of jigsawplanet games, offering tips and strategies to enhance your experience.
                        </h6>
                        <h3 className="mt-4 up">1. Different Types of jigsaw planet free:</h3>
                        <h6 className="puzzle-game-intro me-5">Jigsawplanet games come in many varieties, each with unique mechanics and objectives.</h6>
                        <h3 className="mt-4 up">2. Understand the Rules:</h3>
                        <h6 className="puzzle-game-intro me-5">
                            Each jigsaw planet puzzles has specific rules and objectives. Read the instructions carefully before starting.
                        </h6>
                        <ul className="mar me-5">
                            <li>'In this game players have 3 chances'</li>
                            <li>'If 3 jigsaw planet puzzle game cards are matched to each other'</li>
                            <li>'Player wins this game'</li>
                            <li>'Otherwise, Restart the jigsaw planet game again and try to match again 3cards'</li>
                        </ul>
                        <h3 className="mt-4 up">3. Set up Your Space:</h3>
                        <h6 className="puzzle-game-intro me-5">
                            For physical jigsaw puzzle, ensure you have a comfortable and well-lit workspace.
                            For digital jigsawplanet, adjust your device's brightness and volume settings to suit your environment and mind.
                        </h6>
                        <ul className="mar me-2">
                            <h2>Tips for Success</h2>
                            <li>Stay Calm: Jigsawplanet puzzle games should be enjoyable; take breaks if you feel frustrated.</li>
                            <li>Practice Regularly: The more you play, the better you get.</li>
                            <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
                            <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
                        </ul>
                        <h3 className="mt-4 up"> Conclusion:</h3>
                        <h6 className="puzzle-game-intro me-5 mb-4">
                            Jigsaw planet games offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules,
                            using effective strategies, and practicing regularly, you can enhance your jigsawplanet-solving skills and enjoy the satisfying
                            feeling of cracking even the toughest jigsawplanet. So, choose your game, set up your space, and dive into the fascinating world of jigsawplanet!
                        </h6>
                    </div>
                    <div className="inner">
                        <Link to="/puzzle1">
                            <img className="innerimg" src="./images/Puzzle5.jpeg" alt="jigsaw planet free" />
                        </Link>
                        <Link to="/puzzle3">
                            <img className="innerimg" src="./images/Puzzle3.jpeg" alt="free jigsaw planet" />
                        </Link>
                        <Link to="/puzzle2">
                            <img className="innerimg" src="./images/Puzzle2.jpeg" alt="puzzle free" />
                        </Link>
                        <Link to="/puzzle1">
                            <img className="innerimg" src="./images/Puzzle1.jpeg" alt="free puzzle" />
                        </Link>
                    </div>
                    <div className="col-12 my-3">
                        <video className="video" src="./videos/hacks.mp4" controls={true} width="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wordpuzzle1;