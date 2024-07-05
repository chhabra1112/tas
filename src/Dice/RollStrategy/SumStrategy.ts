import { generateRandomInt } from "../../utils";
import { BaseDiceRollStrategy } from "./BaseStrategy";

export class SumDiceRollStrategy implements BaseDiceRollStrategy {
  rollDice(noOfDice: number, minVal: number, maxVal: number): number {
    let res = 0;
    for (let i = 0; i < noOfDice; i++) {
      res += generateRandomInt(minVal, maxVal);
    }
    return res;
  }
}
