const Node = require('./Node');

class BacktrackingSolver {

  constructor(board) {
    this.board = board;
  }

  solve() {
    console.time('solitaire solver execution time');
    console.log(this.board.toString());
    const root = new Node(this.board.clone());
    const winningMoves = [];
    const blacklist = [];

    const solved = root.solve(winningMoves, blacklist, 0);

    if (solved) {
      const copy = this.board.clone();
      winningMoves.reverse().forEach(move => {
        copy.applyMove(move);
        console.log(move.toString());
        console.log(copy.toString());
      });
    } else {
      console.log('Unsolvable');
    }
    console.timeEnd('solitaire solver execution time');
  }
}

module.exports = BacktrackingSolver;