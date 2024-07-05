import { IOmen } from "./omen";
import { IPlayer } from "./player";

export interface ICell {
  position: number;
  omen: IOmen | null;
  currPlayer: IPlayer | null;

  setOmen(omen: IOmen): void;
  addPlayer(player: IPlayer): void;
  removePlayer(): void;
}
