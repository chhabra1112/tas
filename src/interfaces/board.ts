import { OmenType } from "../constants";
import { ICell } from "./cell";
import { IPlayer } from "./player";

export interface IBoard {
  size: number;
  cells: ICell[];
  winningPosition: number;
  movePlayer(player: IPlayer, start: number, final: number): void;
  addOmen(type: OmenType, start: number, end: number): void;
  generateOmens(count: number, type: OmenType): void;
}
