import { Dice } from "../../src/Dice/Dice";
import { Constants } from "../../src/constants";

describe("Dice class test cases", () => {
  it("should throw an error", () => {
    expect(() => new Dice(0)).toThrow(
      new Error("Count of Dices should be atleast 1.")
    );
  });

  it("should throw an error", () => {
    expect(() => new Dice(1, 6, 1)).toThrow(
      new Error(
        "Maximum Possible dice value should be more or equal than minimum value."
      )
    );
  });

  it("should throw an error", () => {
    expect(() => new Dice(1, -5, 0)).toThrow(
      new Error(
        "Maximum Possible dice value should be more or equal than minimum value."
      )
    );
  });

  it("should successfully create a dice with 1 number and values 1 to 6", () => {
    const dice = new Dice();
    expect(dice.count).toBe(Constants.DEFAULT_DICE_COUNT);
    expect(dice.maxValuePerDice).toBe(Constants.MAXIMUM_PER_DICE_VALUE);
    expect(dice.minValuePerDice).toBe(Constants.MINIMUM_PER_DICE_VALUE);
  });

  it("should successfully create a dice with provided values", () => {
    const dice = new Dice(2);
    expect(dice.count).toBe(2);
    expect(dice.maxValuePerDice).toBe(Constants.MAXIMUM_PER_DICE_VALUE);
    expect(dice.minValuePerDice).toBe(Constants.MINIMUM_PER_DICE_VALUE);
  });

  it("should successfully create a dice with provided values", () => {
    const dice = new Dice(2, 2, 7);
    expect(dice.count).toBe(2);
    expect(dice.minValuePerDice).toBe(2);
    expect(dice.maxValuePerDice).toBe(7);
  });
});
