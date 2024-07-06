import { Omen } from "./Omen";

export class Crocodile extends Omen {
  constructor(initialPosition: number) {
    super(initialPosition, initialPosition - 5);
  }

  getNewPosition() {
    return this.finalPosition;
  }
}
