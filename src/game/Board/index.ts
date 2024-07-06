import { Cell } from "./Cell";
import { Ladder } from "../Omens/Ladder";
import { Snake } from "../Omens/Snake";
import { Constants, OmenType } from "../../constants";
import { IBoard } from "../../interfaces/board";
import { ICell } from "../../interfaces/cell";
import { IPlayer } from "../../interfaces/player";
import { generateRandomInt } from "../../utils";
import { OmenFactory } from "../Omens/OmenFactory";

export class Board implements IBoard {
  size: number;
  cells: ICell[];
  winningPosition: number;

  constructor(size?: number) {
    if (size && size < 2) {
      throw new Error("Size of Board should atleast be 2x2.");
    }
    this.size = size ?? Constants.DEFAULT_BOARD_SIZE;
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

  addOmen(type: OmenType, start: number, end: number): void {
    const omen = OmenFactory.createOmen(type, this.size, start, end);
    this.cells[start].setOmen(omen);
  }

  generateOmens(count: number, type: OmenType): void {
    const lastPossiblePosition = this.size * this.size - 1;
    while (count > 0) {
      const start = generateRandomInt(
        Constants.DEFAULT_PLAYER_STARTING_POSITION + 1,
        lastPossiblePosition
      );
      const end = generateRandomInt(
        Constants.DEFAULT_PLAYER_STARTING_POSITION,
        lastPossiblePosition
      );
      if (this.cells[start].omen || this.cells[end].omen) {
        continue;
      }
      try {
        this.addOmen(type, start, end);
        count--;
      } catch {
        continue;
      }
    }
  }

  movePlayer(player: IPlayer, start: number, final: number): void {
    if (this.cells[start].removePlayer()) {
      this.cells[final].addPlayer(player);
      player.setPosition(final);
    }
  }
}
