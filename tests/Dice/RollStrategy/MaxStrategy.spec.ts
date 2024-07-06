import { MaxDiceRollStrategy } from "../../../src/Dice/RollStrategy/MaxStrategy";

describe("MaxRollStrategy class test cases", () => {
  it("should return a number", () => {
    const strategy = new MaxDiceRollStrategy();
    expect(strategy.rollDice(5, 1, 6)).toBeGreaterThanOrEqual(1);
    expect(strategy.rollDice(5, 1, 6)).toBeLessThanOrEqual(6);
  });
});
