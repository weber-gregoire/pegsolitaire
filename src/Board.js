const Position = require('./Position');
const Move = require('./Move');
const BoardIdentifierBuilder  = require('./BoardIdentifierBuilder');

function getMoveUpAtPotition(lineIndex, colIndex, structure, moves) {
  if (structure[lineIndex - 2]) {
    if (
      structure[lineIndex - 2][colIndex] === false &&
      structure[lineIndex - 1][colIndex] === true
    ) {
      moves.push(new Move(
        new Position(colIndex, lineIndex),
        new Position(colIndex, lineIndex - 2)
      ));
    }
  }
}

function getMoveDownAtPotition(lineIndex, colIndex, structure, moves) {
  if (structure[lineIndex + 2]) {
    if (
      structure[lineIndex + 2][colIndex] === false &&
      structure[lineIndex + 1][colIndex] === true
    ) {
      moves.push(new Move(
        new Position(colIndex, lineIndex),
        new Position(colIndex, lineIndex + 2)
      ));
    }
  }
}

function getMoveLeftAtPotition(lineIndex, colIndex, structure, moves) {
  if (
    structure[lineIndex][colIndex - 2] === false &&
    structure[lineIndex][colIndex - 1] === true
  ) {
    moves.push(new Move(
      new Position(colIndex, lineIndex),
      new Position(colIndex - 2, lineIndex)
    ));
  }
}

function getMoveRightAtPotition(lineIndex, colIndex, structure, moves) {
  if (
    structure[lineIndex][colIndex + 2] === false &&
    structure[lineIndex][colIndex + 1] === true
  ) {
    moves.push(new Move(
      new Position(colIndex, lineIndex),
      new Position(colIndex + 2, lineIndex)
    ));
  }
}

class Board {

  constructor(board) {
    this.structure = board;
  }

  toString() {
    let board = '   ';
    for (let i = 0; i < this.structure[0].length; ++i) {
      board += i + ' ';
    }
    board += '\n';
    this.structure.forEach((line, lineIndex) => {
      board += `${lineIndex}  `;
      line.forEach(square => {
        if (!!square) {
          board += 'O';
        } else {
          board += square === undefined ? ' ': '-';
        }
        board += ' ';
      });
      board += '\n';
    });
    return board;
  }

  clone() {
    const copy = [];
    this.structure.forEach(line => {
      const tempLine = [];
      line.forEach(square => tempLine.push(square));
      copy.push(tempLine);
    });

    return new Board(copy);
  }

  applyMove(move) {
    this.structure[move.from.y][move.from.x] = false;
    this.structure[move.from.y + move.direction.y][move.from.x + move.direction.x] = false;
    this.structure[move.to.y][move.to.x] = true;
  }

  isFinished() {
    let marbleCount = 0;
    this.structure.forEach(line => {
      line.forEach(square => {
        if (!!square) {
          ++marbleCount;
        }
      });
    });
    return marbleCount === 1;
  }

  getAvailableMoves() {
    const moves = [];
    this.structure.forEach((line, lineIndex) => {
      line.forEach((square, colIndex) => {
        if (this.structure[lineIndex][colIndex] === true) {
          getMoveUpAtPotition(lineIndex, colIndex, this.structure, moves);
          getMoveDownAtPotition(lineIndex, colIndex, this.structure, moves);
          getMoveLeftAtPotition(lineIndex, colIndex, this.structure, moves);
          getMoveRightAtPotition(lineIndex, colIndex, this.structure, moves);
        }
      });
    });

    return moves;
  }

  getIdentifier() {
    if (!this.identifier) {
      const builder = new BoardIdentifierBuilder(this.structure);
      this.identifier = builder.getIdentifier();
    }
    return this.identifier;
  }
}

module.exports = Board;