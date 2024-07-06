"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
describe("Util Random int function", () => {
    it("should return a random number between two integers", () => {
        const randInt = (0, utils_1.generateRandomInt)(1, 20);
        expect(randInt).toBeLessThanOrEqual(20);
        expect(randInt).toBeGreaterThanOrEqual(1);
    });
});
