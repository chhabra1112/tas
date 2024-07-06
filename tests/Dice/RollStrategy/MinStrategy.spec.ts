import { MinDiceRollStrategy } from "../../../src/Dice/RollStrategy/MinStrategy";

describe("MinRollStrategy class test cases", () => {
  it("should return a number", () => {
    const strategy = new MinDiceRollStrategy();
    expect(strategy.rollDice(5, 1, 6)).toBeGreaterThanOrEqual(1);
    expect(strategy.rollDice(5, 1, 6)).toBeLessThanOrEqual(6);
  });
});
