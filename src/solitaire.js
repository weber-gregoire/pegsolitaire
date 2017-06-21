const BacktrackingSolver = require('./BacktrackingSolver');
const Board = require('./Board');
const availableBoards = require('./boards');

const boardType = process.argv[2];

if (availableBoards[boardType]) {
  const board  = new Board(availableBoards[boardType]);
  const solver = new BacktrackingSolver(board);
  solver.solve();
} else {
  console.log(`Invalid argument ${boardType} for grid type.`);
  console.log(`expecting one of the following :`);
  Object.keys.foreach(key => console.log(key));
}