import { IOmenMoveStrategy } from "./moveStrategy";

export class OmenMoveFixedDisplacementStrategy implements IOmenMoveStrategy {
  initialPosition: number;
  finalPosition: number;

  constructor(initialPosition: number, distance: number) {
    this.finalPosition =
      initialPosition + distance < 0 ? 0 : initialPosition + distance;
    this.initialPosition = initialPosition;
  }

  calculateNewPosition(): number {
    return this.finalPosition;
  }
}
