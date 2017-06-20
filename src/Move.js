class Move {

  constructor(fromPosition, toPosition) {
    this.from = fromPosition;
    this.to = toPosition;
  }

  toString() {
    return `Move from ${this.from.toString()} to ${this.to.toString()}`;
  }
}

module.exports = Move;