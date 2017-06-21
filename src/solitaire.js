const BacktrackingSolver = require('./BacktrackingSolver');
const boardHandler = require('./boards');

const boardType = process.argv[2];

if (boardHandler[boardType]) {
  const board  = boardHandler[boardType];
  const solver = new BacktrackingSolver(board);
  solver.solve();
} else {
  console.log(`Invalid argument ${boardType} for grid type.`);
  console.log(`expecting one of the following :`);
  Object.keys.foreach(key => console.log(key));
}