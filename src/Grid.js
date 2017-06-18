class Grid {

  constructor(grid) {
    this.structure = grid;
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
    
  }
}

module.exports = Grid;