import { Constants, MovementStrategy } from "../../constants";
import { IDice } from "../../interfaces/dice";
import { BaseDiceRollStrategy } from "./RollStrategy/BaseStrategy";
import { MovementFactory } from "./RollStrategy/MovementFactory";

export class Dice implements IDice {
  count: number;
  minValuePerDice: number;
  maxValuePerDice: number;
  rollStrategy: BaseDiceRollStrategy;

  constructor(
    noOfDices?: number,
    movementStrategy?: MovementStrategy,
    minValue?: number,
    maxValue?: number
  ) {
    this.count = noOfDices ?? Constants.DEFAULT_DICE_COUNT;
    this.maxValuePerDice = maxValue ?? Constants.MAXIMUM_PER_DICE_VALUE;
    this.minValuePerDice = minValue ?? Constants.MINIMUM_PER_DICE_VALUE;
    this.validate();
    this.rollStrategy = MovementFactory.getStrategy(movementStrategy);
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
    return this.rollStrategy.rollDice(
      this.count,
      this.minValuePerDice,
      this.maxValuePerDice
    );
  }
}
