import { OmenType } from "../../constants";
import { IOmen } from "../../interfaces/omen";

export class Omen implements IOmen {
  type: OmenType = OmenType.Default;
  initialPosition: number;
  finalPosition: number;

  constructor(initialPosition: number, finalPosition?: number) {
    this.finalPosition = finalPosition ?? initialPosition;
    this.initialPosition = initialPosition;
  }

  getNewPosition(): number {
    return this.finalPosition;
  }
}
