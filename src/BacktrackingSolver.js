const Node = require('./Node');

class BacktrackingSolver {

  constructor(board) {
    this.board = board;
  }

  solve() {
    console.log(this.board.toString());
    const root = new Node(this.board.clone());
    const winningMoves = [];
    const solved = root.solve(winningMoves, 0);

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
  }
}

module.exports = BacktrackingSolver;