import { OmenType } from "../../constants";
import { Omen } from "./Omen";

export class Mine extends Omen {
  type: OmenType = OmenType.Mine;
  blockedTurns: number = 2;
  private constructor(initialPosition: number) {
    super(initialPosition, initialPosition);
  }

  getNewPosition() {
    return this.finalPosition;
  }

  static create(initialPosition: number) {
    return new Mine(initialPosition);
  }
}
