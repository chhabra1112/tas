"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ladder_1 = require("../../src/Omens/Ladder");
describe("Ladder class tests", () => {
    it("should Throw error that Ladder should not be horizontal", () => {
        expect(() => new Ladder_1.Ladder(10, 20, 29)).toThrow(new Error("Ladders can't be horizontal"));
    });
    it("should Throw error that Ladder move backwards.", () => {
        expect(() => new Ladder_1.Ladder(10, 31, 29)).toThrow(new Error("Ladder cannot move the player backwards."));
    });
    it("should successfully create a ladder", () => {
        const ladder = new Ladder_1.Ladder(10, 20, 30);
        expect(ladder.finalPosition).toBe(30);
        expect(ladder.initialPosition).toBe(20);
    });
});
