import { generateRandomInt } from "../../../utils";
import { BaseDiceRollStrategy } from "./BaseStrategy";

export class MinDiceRollStrategy implements BaseDiceRollStrategy {
  rollDice(noOfDice: number, minVal: number, maxVal: number): number {
    let res = maxVal;
    for (let i = 0; i < noOfDice; i++) {
      res = Math.min(res, generateRandomInt(minVal, maxVal));
    }
    return res;
  }
}
