import { IOmen } from "../interfaces/omen";

export class Omen implements IOmen {
  initialPosition: number;
  finalPosition: number;

  constructor(initialPosition: number, finalPosition?: number) {
    this.finalPosition = finalPosition ?? initialPosition;
    this.initialPosition = initialPosition;
  }

  getNewPosition() {}
}
