import { Cell } from "../Board/Cell";
import { IPlayer } from "./player";

export interface IBoard {
  size: number;
  cells: Cell[];
  winningPosition: number;

  addSnake(start: number, end: number): void;
  addLadder(start: number, end: number): void;
  addNewSnakes(count: number): void;
  addNewLadders(count: number): void;
  movePlayer(player: IPlayer, start: number, final: number): void;
}
