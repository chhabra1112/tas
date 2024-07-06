import { MovementStrategy } from "../../constants";
import { BaseDiceRollStrategy } from "./BaseStrategy";
import { MaxDiceRollStrategy } from "./MaxStrategy";
import { MinDiceRollStrategy } from "./MinStrategy";
import { SumDiceRollStrategy } from "./SumStrategy";

export class MovementFactory {
  private static strategyMap = {
    [MovementStrategy.MAX]: MaxDiceRollStrategy,
    [MovementStrategy.MIN]: MinDiceRollStrategy,
    [MovementStrategy.SUM]: SumDiceRollStrategy,
  };

  static getStrategy(type?: MovementStrategy): BaseDiceRollStrategy {
    if (type) return new this.strategyMap[type]();
    return new SumDiceRollStrategy();
  }
}
