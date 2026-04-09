import { useState, useEffect, useCallback } from 'react';
import {
  generatePuzzle,
  getHint,
  isRowComplete,
  isColumnComplete,
  isBoxComplete,
  isBoardComplete,
  isValid
} from '../utils/sudokuGenerator';
import './SudokuGame.css';

const SudokuGame = () => {
  const [difficulty, setDifficulty] = useState(1);
  const [puzzle, setPuzzle] = useState(null);
  const [solution, setSolution] = useState(null);
  const [board, setBoard] = useState(null);
  const [initialBoard, setInitialBoard] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [completedRows, setCompletedRows] = useState(new Set());
  const [completedCols, setCompletedCols] = useState(new Set());
  const [completedBoxes, setCompletedBoxes] = useState(new Set());
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted, startTime]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start a new game
  const startNewGame = useCallback(() => {
    const { puzzle: newPuzzle, solution: newSolution } = generatePuzzle(difficulty);
    setPuzzle(newPuzzle);
    setSolution(newSolution);
    setBoard(newPuzzle.map(row => [...row]));
    setInitialBoard(newPuzzle.map(row => [...row]));
    setSelectedCell(null);
    setCompletedRows(new Set());
    setCompletedCols(new Set());
    setCompletedBoxes(new Set());
    setGameStarted(true);
    setGameCompleted(false);
    setStartTime(Date.now());
    setElapsedTime(0);
    setHintsUsed(0);
  }, [difficulty]);

  // Initialize game on mount
  useEffect(() => {
    startNewGame();
  }, []);

  // Check for completed rows, columns, and boxes
  const checkCompletions = useCallback((currentBoard) => {
    const newCompletedRows = new Set();
    const newCompletedCols = new Set();
    const newCompletedBoxes = new Set();

    // Check rows
    for (let row = 0; row < 9; row++) {
      if (isRowComplete(currentBoard, solution, row)) {
        newCompletedRows.add(row);
      }
    }

    // Check columns
    for (let col = 0; col < 9; col++) {
      if (isColumnComplete(currentBoard, solution, col)) {
        newCompletedCols.add(col);
      }
    }

    // Check boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        if (isBoxComplete(currentBoard, solution, boxRow, boxCol)) {
          newCompletedBoxes.add(`${boxRow}-${boxCol}`);
        }
      }
    }

    setCompletedRows(newCompletedRows);
    setCompletedCols(newCompletedCols);
    setCompletedBoxes(newCompletedBoxes);

    // Check if game is complete
    if (isBoardComplete(currentBoard, solution)) {
      setGameCompleted(true);
      setGameStarted(false);
    }
  }, [solution]);

  // Handle cell click
  const handleCellClick = (row, col) => {
    if (gameCompleted || initialBoard[row][col] !== 0) return;
    setSelectedCell({ row, col });
  };

  // Handle number input
  const handleNumberInput = (num) => {
    if (!selectedCell || gameCompleted) return;
    
    const { row, col } = selectedCell;
    if (initialBoard[row][col] !== 0) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = num;
    setBoard(newBoard);
    checkCompletions(newBoard);
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedCell || gameCompleted) return;
      
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9) {
        handleNumberInput(num);
      } else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') {
        handleNumberInput(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedCell, gameCompleted, board, initialBoard]);

  // Clear current cell
  const handleClear = () => {
    if (!selectedCell || gameCompleted) return;
    const { row, col } = selectedCell;
    if (initialBoard[row][col] !== 0) return;
    
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = 0;
    setBoard(newBoard);
    checkCompletions(newBoard);
  };

  // Reset to initial state
  const handleReset = () => {
    setBoard(initialBoard.map(row => [...row]));
    setSelectedCell(null);
    setCompletedRows(new Set());
    setCompletedCols(new Set());
    setCompletedBoxes(new Set());
    setGameCompleted(false);
    setGameStarted(true);
    setStartTime(Date.now());
    setElapsedTime(0);
    setHintsUsed(0);
  };

  // Get a hint
  const handleHint = () => {
    if (gameCompleted) return;
    
    const hint = getHint(board, solution);
    if (hint) {
      const newBoard = board.map(r => [...r]);
      newBoard[hint.row][hint.col] = hint.value;
      setBoard(newBoard);
      setSelectedCell({ row: hint.row, col: hint.col });
      setHintsUsed(prev => prev + 1);
      checkCompletions(newBoard);
    }
  };

  // Get cell class names
  const getCellClassName = (row, col) => {
    const classes = ['cell'];
    
    if (initialBoard && initialBoard[row][col] !== 0) {
      classes.push('initial');
    }
    
    if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
      classes.push('selected');
    }
    
    if (completedRows.has(row)) {
      classes.push('completed-row');
    }
    
    if (completedCols.has(col)) {
      classes.push('completed-col');
    }
    
    const boxRow = Math.floor(row / 3);
    const boxCol = Math.floor(col / 3);
    if (completedBoxes.has(`${boxRow}-${boxCol}`)) {
      classes.push('completed-box');
    }
    
    // Add error class if number is invalid
    if (board && board[row][col] !== 0 && solution && board[row][col] !== solution[row][col]) {
      classes.push('error');
    }
    
    return classes.join(' ');
  };

  if (!board) return <div className="loading">Loading...</div>;

  return (
    <div className="sudoku-game">
      <h1>Sudoku Game</h1>
      
      <div className="game-info">
        <div className="timer">
          <span className="label">Time:</span>
          <span className="value">{formatTime(elapsedTime)}</span>
        </div>
        <div className="hints">
          <span className="label">Hints Used:</span>
          <span className="value">{hintsUsed}</span>
        </div>
      </div>

      <div className="difficulty-selector">
        <label>Difficulty: </label>
        {[1, 2, 3, 4, 5].map(level => (
          <button
            key={level}
            className={difficulty === level ? 'active' : ''}
            onClick={() => setDifficulty(level)}
            disabled={gameStarted && !gameCompleted}
          >
            Level {level}
          </button>
        ))}
      </div>

      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={getCellClassName(rowIndex, colIndex)}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell !== 0 ? cell : ''}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="number-pad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button
            key={num}
            onClick={() => handleNumberInput(num)}
            disabled={!selectedCell || gameCompleted}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="controls">
        <button onClick={handleClear} disabled={!selectedCell || gameCompleted}>
          Clear Cell
        </button>
        <button onClick={handleReset} disabled={gameCompleted}>
          Reset
        </button>
        <button onClick={handleHint} disabled={gameCompleted}>
          Hint
        </button>
        <button onClick={startNewGame}>
          New Game
        </button>
      </div>

      {gameCompleted && (
        <div className="completion-modal">
          <div className="modal-content">
            <h2>🎉 Congratulations! 🎉</h2>
            <p>You completed the puzzle!</p>
            <p className="stats">
              <strong>Time:</strong> {formatTime(elapsedTime)}<br />
              <strong>Difficulty:</strong> Level {difficulty}<br />
              <strong>Hints Used:</strong> {hintsUsed}
            </p>
            <button onClick={startNewGame}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SudokuGame;

// Made with Bob
