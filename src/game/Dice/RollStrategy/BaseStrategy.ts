export interface BaseDiceRollStrategy {
  rollDice(noOfDice: number, minVal: number, maxVal: number): number;
}
