const Board = require('./Board');

module.exports = {
  'EUROPEAN': new Board(
    [
      [undefined, undefined, true, true, true, undefined, undefined],
      [undefined, true, true, true, true, true, undefined],
      [true, true, true, false, true, true, true],
      [true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true],
      [undefined, true, true, true, true, true, undefined],
      [undefined, undefined, true, true, true, undefined, undefined]
    ]
  ),
  'GERMAN': new Board(
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
  ),
  'ASYMETRICAL': new Board(
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
  ),
  'ENGLISH': new Board(
    [
      [undefined, undefined, true, true, true, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined],
      [true, true, true, true, true, true, true],
      [true, true, true, false, true, true, true],
      [true, true, true, true, true, true, true],
      [undefined, undefined, true, true, true, undefined, undefined],
      [undefined, undefined, true, true, true, undefined, undefined]
    ]
  ),
  'DIAMOND': new Board(
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
  )
};