import { Omen } from "../game/Omens/Omen";
import { IPlayer } from "./player";

export interface ICell {
  position: number;
  omen: Omen | null;
  currPlayer: IPlayer | null;

  setOmen(omen: Omen): void;
  addPlayer(player: IPlayer): void;
  removePlayer(): boolean;
}
