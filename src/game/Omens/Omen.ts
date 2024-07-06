import { OmenType } from "../../constants";

export class Omen {
  type: OmenType = OmenType.Default;
  initialPosition: number;
  finalPosition: number;

  constructor(initialPosition: number, finalPosition?: number) {
    this.finalPosition = finalPosition ?? initialPosition;
    this.initialPosition = initialPosition;
  }

  getNewPosition() {
    return this.finalPosition;
  }
}
