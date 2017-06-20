class Position {

  constructor(colunmIndex, lineIndex) {
    this.x = colunmIndex;
    this.y = lineIndex;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

}

module.exports = Position;