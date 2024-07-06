"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dice_1 = require("../../src/Dice/Dice");
const constants_1 = require("../../src/constants");
describe("Dice class test cases", () => {
    it("should throw an error", () => {
        expect(() => new Dice_1.Dice(0)).toThrow(new Error("Count of Dices should be atleast 1."));
    });
    it("should throw an error", () => {
        expect(() => new Dice_1.Dice(1, 6, 1)).toThrow(new Error("Maximum Possible dice value should be more or equal than minimum value."));
    });
    it("should throw an error", () => {
        expect(() => new Dice_1.Dice(1, -5, 0)).toThrow(new Error("Maximum Possible dice value should be more or equal than minimum value."));
    });
    it("should successfully create a dice with 1 number and values 1 to 6", () => {
        const dice = new Dice_1.Dice();
        expect(dice.count).toBe(constants_1.Constants.DEFAULT_DICE_COUNT);
        expect(dice.maxValuePerDice).toBe(constants_1.Constants.MAXIMUM_PER_DICE_VALUE);
        expect(dice.minValuePerDice).toBe(constants_1.Constants.MINIMUM_PER_DICE_VALUE);
    });
    it("should successfully create a dice with provided values", () => {
        const dice = new Dice_1.Dice(2);
        expect(dice.count).toBe(2);
        expect(dice.maxValuePerDice).toBe(constants_1.Constants.MAXIMUM_PER_DICE_VALUE);
        expect(dice.minValuePerDice).toBe(constants_1.Constants.MINIMUM_PER_DICE_VALUE);
    });
    it("should successfully create a dice with provided values", () => {
        const dice = new Dice_1.Dice(2, 2, 7);
        expect(dice.count).toBe(2);
        expect(dice.minValuePerDice).toBe(2);
        expect(dice.maxValuePerDice).toBe(7);
    });
});
