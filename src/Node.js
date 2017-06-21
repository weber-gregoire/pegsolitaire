class Node {

  constructor(board) {
    this.board = board;
    this.moves = board.getAvailableMoves();
  }

  solve(winningMoves, deepness) {
    let solved = false;
    const moveCount = this.moves.length;
    for (let i = 0; i < moveCount; ++i) {
      const move = this.moves[i];
      const boardClone = this.board.clone();

      boardClone.applyMove(move);

      if (boardClone.isFinished()) {
        solved = true;
        winningMoves.push(move);
        break;
      } else {
        const nextNode = new Node(boardClone);
        if (nextNode.solve(winningMoves, deepness + 1)) {
          solved = true;
          winningMoves.push(move);
          break;
        }
      }
    }
    return solved;
  }
}

module.exports = Node;