"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MinStrategy_1 = require("../../../src/Dice/RollStrategy/MinStrategy");
describe("MinRollStrategy class test cases", () => {
    it("should return a number", () => {
        const strategy = new MinStrategy_1.MinDiceRollStrategy();
        expect(strategy.rollDice(5, 1, 6)).toBeGreaterThanOrEqual(1);
        expect(strategy.rollDice(5, 1, 6)).toBeLessThanOrEqual(6);
    });
});
