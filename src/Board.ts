import { Cell } from "./Cell";
import { Ladder } from "./Omens/Ladder";
import { Snake } from "./Omens/Snake";
import { Constants } from "./constants";
import { IBoard } from "./interfaces/board";
import { ICell } from "./interfaces/cell";
import { IPlayer } from "./interfaces/player";
import { generateRandomInt } from "./utils";

export class Board implements IBoard {
  size: number;
  cells: ICell[];
  winningPosition: number;

  constructor(size: number) {
    if (size < 2) {
      throw new Error("Size of Board should atleast be 2x2.");
    }
    this.size = size;
    this.cells = [];
    this.winningPosition = this.size * this.size;
    this.initCells();
  }

  initCells() {
    const totalCells = this.size * this.size;
    for (let idx = 0; idx < totalCells; idx++) {
      this.cells.push(new Cell(idx));
    }
  }

  addSnake(start: number, end: number) {
    const snake = new Snake(start, end);
    this.cells[start].setOmen(snake);
  }

  addLadder(start: number, end: number) {
    const ladder = new Ladder(start, end);
    this.cells[start].setOmen(ladder);
  }

  addNewSnakes(count: number): void {
    const lastPossiblePosition = this.size * this.size - 1;
    while (count > 0) {
      const start = generateRandomInt(
        Constants.DEFAULT_PLAYER_STARTING_POSITION + 1,
        lastPossiblePosition
      );
      const end = generateRandomInt(
        Constants.DEFAULT_PLAYER_STARTING_POSITION,
        start - 1
      );
      if (this.cells[start].omen || this.cells[end].omen) {
        continue;
      }
      this.addSnake(start, end);
      count--;
    }
  }

  addNewLadders(count: number): void {
    const lastPossiblePosition = this.size * this.size - 1;
    while (count > 0) {
      const start = generateRandomInt(
        Constants.DEFAULT_PLAYER_STARTING_POSITION + 1,
        lastPossiblePosition
      );

      const end = generateRandomInt(start + 1, lastPossiblePosition);
      if (
        this.cells[start].omen ||
        this.cells[end].omen ||
        Math.floor(end / this.size) == Math.floor(start / this.size)
      ) {
        continue;
      }
      this.addLadder(start, end);
      count--;
    }
  }

  movePlayer(player: IPlayer, start: number, final: number): void {
    this.cells[start].removePlayer();
    this.cells[final].addPlayer(player);
  }
}
