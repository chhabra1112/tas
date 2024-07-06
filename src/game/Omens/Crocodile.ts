import { OmenType } from "../../constants";
import { Omen } from "./Omen";

export class Crocodile extends Omen {
  type: OmenType = OmenType.Crocodile;
  private constructor(initialPosition: number) {
    super(initialPosition, initialPosition - 5);
  }

  getNewPosition() {
    return this.finalPosition;
  }

  static create(initialPosition: number) {
    return new Crocodile(initialPosition);
  }
}
