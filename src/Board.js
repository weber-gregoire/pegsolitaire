class Board {

  constructor(board) {
    this.structure = board;
  }

  print() {
    this.structure.forEach(line => {
      let linetoPrint = '';
      line.forEach(square => {
        if (!!square) {
          linetoPrint += 'O';
        } else {
          linetoPrint += square === undefined ? ' ': '-';
        }
        linetoPrint += ' ';
      });
      console.log(linetoPrint);
    });
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
}

module.exports = Board;