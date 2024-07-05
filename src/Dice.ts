import { Constants } from "./constants";
import { IDice } from "./interfaces/dice";
import { generateRandomInt } from "./utils";

export class Dice implements IDice {
  count: number;
  minValuePerDice: number;
  maxValuePerDice: number;

  constructor(noOfDices?: number, minValue?: number, maxValue?: number) {
    this.count = noOfDices ?? Constants.DEFAULT_DICE_COUNT;
    this.maxValuePerDice = minValue ?? Constants.MAXIMUM_PER_DICE_VALUE;
    this.minValuePerDice = maxValue ?? Constants.MINIMUM_PER_DICE_VALUE;
    this.validate();
  }

  private validate() {
    if (this.count < Constants.DEFAULT_DICE_COUNT) {
      throw new RangeError("Count of Dices should be atleast 1.");
    }
    if (this.minValuePerDice > this.maxValuePerDice) {
      throw new RangeError(
        "Maximum Possible dice value should be more or equal than minimum value."
      );
    }
    if (this.maxValuePerDice < Constants.MINIMUM_PER_DICE_VALUE) {
      throw new RangeError(
        "Maximum Possible dice value should be more or equal than minimum value."
      );
    }
  }

  roll(): number {
    let total = 0;
    for (let i = 0; i < this.count; i++) {
      total += generateRandomInt(this.minValuePerDice, this.maxValuePerDice);
    }
    return total;
  }
}
