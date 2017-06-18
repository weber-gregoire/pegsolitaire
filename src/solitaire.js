const Grid = require('./Grid');
const gridHandler = {
  ['EUROPEAN']:     buildEuroGrid,
  ['GERMAN']:       buildGermanGrid,
  ['ASYMETRICAL']:  buildAsymetricalGrid,
  ['ENGLISH']:      buildEnglishGrid,
  ['DIAMOND']:      buildDiamondGrid
};

function buildEuroGrid () {
  return new Grid(
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

function buildGermanGrid () {
  return new Grid(
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

function buildAsymetricalGrid () {
  return new Grid(
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

function buildEnglishGrid () {
  return new Grid(
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

function buildDiamondGrid () {
  return new Grid(
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

const gridType = process.argv[2];

if (gridHandler[gridType]) {
  const grid  = gridHandler[gridType]();

  grid.print();

} else {
  console.log(`Invalid argument ${gridType} for grid type.`);
  console.log(`expecting one of the following :`);
  Object.keys.foreach(key => console.log(key));
}