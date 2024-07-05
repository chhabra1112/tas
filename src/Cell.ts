import { ICell } from "./interfaces/cell";
import { IOmen } from "./interfaces/omen";
import { IPlayer } from "./interfaces/player";

export class Cell implements ICell {
  position: number;
  omen: IOmen | null;
  currPlayer: IPlayer | null = null;

  constructor(position: number, omen?: IOmen) {
    this.position = position;
    this.omen = omen ?? null;
  }

  setOmen(omen: IOmen): void {
    this.omen = omen;
  }

  addPlayer(player: IPlayer): void {
    if (this.currPlayer) {
      this.currPlayer.resetPosition();
    }
    this.currPlayer = player;
  }

  removePlayer(): void {
    this.currPlayer = null;
  }
}
