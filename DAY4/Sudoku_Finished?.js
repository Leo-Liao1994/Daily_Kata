// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

const transpose = function(matrix) {
  let temp = [];
  for (let i = 0; i < matrix[0].length; i++) {
    temp.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0 ; j < matrix[i].length; j++) {
        temp[j][i] = matrix[i][j];
    }
  }
  return temp;
};

function doneOrNot(board){
  let result = 'Finished!'
  const sum = board[0].reduce((a,b) => a + b)

  for (let i of board) {
    if (i.reduce((a,b) => a + b) !== sum) {
      result = 'Try again!';
    }
  }
  let afterTranspose = transpose(board)
  for (let i of afterTranspose) {
    if (i.reduce((a,b) => a + b) !== sum) {
      result = 'Try again!';
    }
  }

  return result
}

console.log(doneOrNot(
  [[1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1], 
  [3, 4, 5, 6, 7, 8, 9, 1, 2], 
  [4, 5, 6, 7, 8, 9, 1, 2, 3], 
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [7, 8, 9, 1, 2, 3, 4, 5, 6], 
  [8, 9, 1, 2, 3, 4, 5, 6, 7], 
  [9, 1, 2, 3, 4, 5, 6, 7, 8]]))


