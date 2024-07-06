"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SumStrategy_1 = require("../../../src/Dice/RollStrategy/SumStrategy");
describe("SumRollStrategy class test cases", () => {
    it("should return a number", () => {
        const strategy = new SumStrategy_1.SumDiceRollStrategy();
        expect(strategy.rollDice(5, 1, 6)).toBeGreaterThanOrEqual(5);
        expect(strategy.rollDice(5, 1, 6)).toBeLessThanOrEqual(30);
    });
});
