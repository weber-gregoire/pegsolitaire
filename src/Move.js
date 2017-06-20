const Position = require('./Position');

class Move {

  constructor(fromPosition, toPosition) {
    this.from = fromPosition;
    this.to = toPosition;
    this.direction = new Position(
      Math.sign(this.to.x - this.from.x),
      Math.sign(this.to.y - this.from.y)
    );
  }

  toString() {
    return `Move from ${this.from.toString()} to ${this.to.toString()}`;
  }
}

module.exports = Move;