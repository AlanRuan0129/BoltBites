export class Board {
  constructor(size) {
    this.board = Array(size)
      .fill()
      .map(() => Array(size).fill(1));
  }

  toDto() {
    return this.board;
  }
}
