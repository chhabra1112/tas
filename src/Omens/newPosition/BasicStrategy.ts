import { IOmenMoveStrategy } from "./moveStrategy";

export class OmenMoveBasicStrategy implements IOmenMoveStrategy {
  initialPosition: number;
  finalPosition: number;

  constructor(initialPosition: number, finalPosition?: number) {
    this.finalPosition = finalPosition ?? initialPosition;
    this.initialPosition = initialPosition;
  }

  calculateNewPosition(): number {
    return this.finalPosition;
  }
}
