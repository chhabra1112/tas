"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Snake_1 = require("../../src/Omens/Snake");
describe("Snake class tests", () => {
    it("should Throw error that Snake should not be horizontal", () => {
        expect(() => new Snake_1.Snake(20, 29)).toThrow(new Error("Snake cannot move the player forward."));
    });
    it("should successfully create a Snake", () => {
        const snake = new Snake_1.Snake(30, 20);
        expect(snake.finalPosition).toBe(20);
        expect(snake.initialPosition).toBe(30);
    });
});
