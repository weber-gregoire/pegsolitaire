const BacktrackingSolver = require('./BacktrackingSolver');
const Board = require('./Board');
const Position = require('./Position');
const availableBoards = require('./boards');

const boardType = process.argv[2];

if (availableBoards[boardType]) {
  const finishPoint = new Position(availableBoards[boardType].finish.x, availableBoards[boardType].finish.y);
  const board  = new Board(availableBoards[boardType].structure, finishPoint);
  const solver = new BacktrackingSolver(board);
  solver.solve();
} else {
  console.log(`Invalid argument ${boardType} for grid type.`);
  console.log(`expecting one of the following :`);
  Object.keys(availableBoards).forEach(key => console.log(key));
}