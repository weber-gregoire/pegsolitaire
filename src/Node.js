class Node {

  constructor(board) {
    this.board = board;
    this.moves = board.getAvailableMoves();
  }

  solve(winningMoves, blacklist) {
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
        if (!blacklist.includes(boardClone.getIdentifier())) {
          const nextNode = new Node(boardClone);
          if (nextNode.solve(winningMoves, blacklist)) {
            solved = true;
            winningMoves.push(move);
            break;
          }  
        }
      }
    }

    if (!solved) {
      blacklist.push(this.board.getIdentifier());
    }

    return solved;
  }
}

module.exports = Node;