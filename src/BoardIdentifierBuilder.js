function getLoopStructure(structure, lineDirection, columnDirection) {
  return {
    lineStart: (lineDirection > 0) ? 0 : structure.length - 1,
    lineEnd: (lineDirection > 0) ? structure.length - 1 : 0,
    colStart: (columnDirection > 0) ? 0 : structure[0].length - 1,
    colEnd: (columnDirection > 0) ? structure[0].length - 1 : 0
  };
}

function exitCondition(index, limit, direction) {
  if (direction > 0) {
    return index <= limit;
  } else {
    return index >= limit;
  }
}

function getIdentifierByLine(structure, lineDirection, columnDirection) {
  const loopStruct = getLoopStructure(structure, lineDirection, columnDirection);
  let identifier = '';

  for (let i = loopStruct.lineStart; exitCondition(i, loopStruct.lineEnd, lineDirection); i += lineDirection) {
    for (let j = loopStruct.colStart; exitCondition(j, loopStruct.colEnd, columnDirection); j += columnDirection) {
      identifier += !!structure[i][j] ? '1' : '0';
    }
  }

  return identifier;
}

function getIdentifierByColumn(structure, lineDirection, columnDirection) {
  const loopStruct = getLoopStructure(structure, lineDirection, columnDirection);
  let identifier = '';

  for (let j = loopStruct.colStart; exitCondition(j, loopStruct.colEnd, columnDirection); j += columnDirection) {
    for (let i = loopStruct.lineStart; exitCondition(i, loopStruct.lineEnd, lineDirection); i += lineDirection) {
      identifier += !!structure[i][j] ? '1' : '0';
    }
  }

  return identifier;
}

class BoardIdentifierBuilder {

  constructor(board) {
    this.board = board;
  }

  getIdentifier() {
    const symetricalsIdentifiers = [];
    symetricalsIdentifiers.push(getIdentifierByLine(this.board, 1, 1));
    symetricalsIdentifiers.push(getIdentifierByLine(this.board, -1, 1));
    symetricalsIdentifiers.push(getIdentifierByLine(this.board, 1, -1));
    symetricalsIdentifiers.push(getIdentifierByLine(this.board, -1, -1));
    symetricalsIdentifiers.push(getIdentifierByColumn(this.board, 1, 1));
    symetricalsIdentifiers.push(getIdentifierByColumn(this.board, -1, 1));
    symetricalsIdentifiers.push(getIdentifierByColumn(this.board, 1, -1));
    symetricalsIdentifiers.push(getIdentifierByColumn(this.board, -1, -1));
    symetricalsIdentifiers.sort((a, b) => a < b);
    return symetricalsIdentifiers[0];
  }
}

module.exports = BoardIdentifierBuilder;