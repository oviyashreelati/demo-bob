// Sudoku Generator and Solver Utilities

// Check if a number is valid in a given position
export const isValid = (board, row, col, num) => {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }

  // Check column
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }

  // Check 3x3 box
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) return false;
    }
  }

  return true;
};

// Solve sudoku using backtracking
export const solveSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

// Generate a complete valid sudoku board
export const generateCompleteBoard = () => {
  const board = Array(9).fill(null).map(() => Array(9).fill(0));
  
  // Fill diagonal 3x3 boxes first (they don't affect each other)
  for (let box = 0; box < 9; box += 3) {
    fillBox(board, box, box);
  }
  
  // Solve the rest
  solveSudoku(board);
  return board;
};

// Fill a 3x3 box with random numbers
const fillBox = (board, row, col) => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffleArray(nums);
  
  let idx = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[row + i][col + j] = nums[idx++];
    }
  }
};

// Shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Generate a puzzle by removing numbers from a complete board
export const generatePuzzle = (difficulty) => {
  const completeBoard = generateCompleteBoard();
  const puzzle = completeBoard.map(row => [...row]);
  
  // Difficulty levels: 1=Easy(40), 2=Medium(45), 3=Hard(50), 4=Expert(55), 5=Master(60)
  const cellsToRemove = {
    1: 40,
    2: 45,
    3: 50,
    4: 55,
    5: 60
  }[difficulty] || 40;
  
  let removed = 0;
  const attempts = cellsToRemove * 3; // Prevent infinite loop
  let attemptCount = 0;
  
  while (removed < cellsToRemove && attemptCount < attempts) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    
    if (puzzle[row][col] !== 0) {
      const backup = puzzle[row][col];
      puzzle[row][col] = 0;
      
      // Check if puzzle still has unique solution
      const testBoard = puzzle.map(row => [...row]);
      if (hasUniqueSolution(testBoard)) {
        removed++;
      } else {
        puzzle[row][col] = backup;
      }
    }
    attemptCount++;
  }
  
  return { puzzle, solution: completeBoard };
};

// Check if puzzle has a unique solution (simplified check)
const hasUniqueSolution = (board) => {
  const testBoard = board.map(row => [...row]);
  return solveSudoku(testBoard);
};

// Get a hint (find an empty cell and return its solution)
export const getHint = (puzzle, solution) => {
  const emptyCells = [];
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === 0) {
        emptyCells.push({ row, col, value: solution[row][col] });
      }
    }
  }
  
  if (emptyCells.length === 0) return null;
  
  // Return a random empty cell with its solution
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

// Check if a row is complete and correct
export const isRowComplete = (board, solution, row) => {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === 0 || board[row][col] !== solution[row][col]) {
      return false;
    }
  }
  return true;
};

// Check if a column is complete and correct
export const isColumnComplete = (board, solution, col) => {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === 0 || board[row][col] !== solution[row][col]) {
      return false;
    }
  }
  return true;
};

// Check if a 3x3 box is complete and correct
export const isBoxComplete = (board, solution, boxRow, boxCol) => {
  const startRow = boxRow * 3;
  const startCol = boxCol * 3;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const row = startRow + i;
      const col = startCol + j;
      if (board[row][col] === 0 || board[row][col] !== solution[row][col]) {
        return false;
      }
    }
  }
  return true;
};

// Check if the entire board is complete and correct
export const isBoardComplete = (board, solution) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== solution[row][col]) {
        return false;
      }
    }
  }
  return true;
};

// Made with Bob
