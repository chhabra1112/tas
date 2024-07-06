import { Omen } from "./Omen";

export class Ladder extends Omen {
  constructor(size: number, initialPosition: number, finalPosition: number) {
    if (finalPosition < initialPosition) {
      throw new Error("Ladder cannot move the player backwards.");
    }
    if (
      Math.floor(finalPosition / size) == Math.floor(initialPosition / size)
    ) {
      throw new Error("Ladders can't be horizontal");
    }
    super(initialPosition, finalPosition);
  }

  getNewPosition() {
    return this.finalPosition;
  }
}
