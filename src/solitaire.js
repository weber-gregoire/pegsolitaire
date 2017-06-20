const Board = require('./Board');
const boardHandler = {
  ['EUROPEAN']:     buildEuroBoard,
  ['GERMAN']:       buildGermanBoard,
  ['ASYMETRICAL']:  buildAsymetricalBoard,
  ['ENGLISH']:      buildEnglishBoard,
  ['DIAMOND']:      buildDiamondBoard
};

function buildEuroBoard () {
  return new Board(
    [
      [undefined, undefined, true, true, true, undefined, undefined],
      [undefined, true, true, true, true, true, undefined],
      [true, true, true, true, true, true, true],
      [true, true, true, false, true, true, true],
      [true, true, true, true, true, true, true],
      [undefined, true, true, true, true, true, undefined],
      [undefined, undefined, true, true, true, undefined, undefined]
    ]
  );
}

function buildGermanBoard () {
  return new Board(
    [
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [true, true, true, true, true, true, true, true, true],
      [true, true, true, true, false, true, true, true, true],
      [true, true, true, true, true, true, true, true, true],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined]
    ]
  );
}

function buildAsymetricalBoard () {
  return new Board(
    [
      [undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined, undefined],
      [true, true, true, true, true, true, true, true],
      [true, true, true, false, true, true, true, true],
      [true, true, true, true, true, true, true, true],
      [undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined, undefined]
    ]
  );
}

function buildEnglishBoard () {
  return new Board(
    [
      [undefined, undefined, true, true, true, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined],
      [true, true, true, true, true, true, true],
      [true, true, true, false, true, true, true],
      [true, true, true, true, true, true, true],
      [undefined, undefined, true, true, true, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined]
    ]
  );
}

function buildDiamondBoard () {
  return new Board(
    [
      [undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, true, true, true, true, true, undefined, undefined],
      [undefined, true, true, true, true, true, true, true, undefined],
      [true, true, true, true, false, true, true, true, true],
      [undefined, true, true, true, true, true, true, true, undefined],
      [undefined, undefined, true, true, true, true, true, undefined, undefined],
      [undefined, undefined, undefined, true, true, true, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined]
    ]
  );
}

const boardType = process.argv[2];

if (boardHandler[boardType]) {
  const board  = boardHandler[boardType]();

  console.log(board.toString());

  board.getAvailableMoves().forEach(move => {
    console.log(move.toString());
  });
} else {
  console.log(`Invalid argument ${boardType} for grid type.`);
  console.log(`expecting one of the following :`);
  Object.keys.foreach(key => console.log(key));
}