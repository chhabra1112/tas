"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crocodile_1 = require("../../src/Omens/Crocodile");
describe("Crocodile class tests", () => {
    it("should successfully create a Snake", () => {
        const snake = new Crocodile_1.Crocodile(30);
        expect(snake.getNewPosition()).toBe(25);
        expect(snake.initialPosition).toBe(30);
    });
});
