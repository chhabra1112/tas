import { OmenType } from "../../constants";
import { Omen } from "./Omen";

export class Snake extends Omen {
  type: OmenType = OmenType.Snake;
  private constructor(initialPosition: number, finalPosition: number) {
    if (finalPosition > initialPosition) {
      throw new Error("Snake cannot move the player forward.");
    }
    super(initialPosition, finalPosition);
  }

  getNewPosition() {
    return this.finalPosition;
  }

  static create(initialPosition: number, finalPosition: number) {
    return new Snake(initialPosition, finalPosition);
  }
}
