import { Omen } from "./Omen";

export class Ladder extends Omen {
  constructor(initialPosition: number, finalPosition: number) {
    if (finalPosition < initialPosition) {
      throw new Error("Ladder cannot move the player backwards.");
    }
    super(initialPosition, finalPosition);
  }

  getNewPosition() {
    return this.finalPosition;
  }
}
