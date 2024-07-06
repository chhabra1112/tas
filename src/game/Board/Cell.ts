import { OmenType } from "../../constants";
import { ICell } from "../../interfaces/cell";
import { IPlayer } from "../../interfaces/player";
import { Mine } from "../Omens/Mine";
import { Omen } from "../Omens/Omen";

export class Cell implements ICell {
  position: number;
  omen: Omen | null;
  currPlayer: IPlayer | null = null;
  private blockedTurns: number = 0;

  constructor(position: number, omen?: Omen) {
    this.position = position;
    this.omen = omen ?? null;
  }

  setOmen(omen: Omen): void {
    this.omen = omen;
    if (omen.type == OmenType.Mine) {
      this.blockedTurns = (omen as Mine).blockedTurns;
    }
  }

  addPlayer(player: IPlayer): void {
    if (this.currPlayer) {
      this.currPlayer.resetPosition();
    }
    this.currPlayer = player;
    if (this.omen && this.omen?.type == OmenType.Mine) {
      this.blockedTurns = (this.omen as Mine).blockedTurns;
    }
  }

  removePlayer(): boolean {
    if (this.omen && this.blockedTurns) {
      this.blockedTurns--;
      return false;
    }
    this.currPlayer = null;
    return true;
  }
}
