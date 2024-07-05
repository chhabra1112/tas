import { Omen } from "./Omen";

export class Snake extends Omen {
  constructor(initialPosition: number, finalPosition: number) {
    if (finalPosition > initialPosition) {
      throw new Error("Snake cannot move the player forward.");
    }
    super(initialPosition, finalPosition);
  }

  getNewPosition() {
    return this.finalPosition;
  }
}
