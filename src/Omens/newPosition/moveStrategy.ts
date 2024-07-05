export interface IOmenMoveStrategy {
  initialPosition: number;
  finalPosition: number;

  calculateNewPosition(): number;
}
