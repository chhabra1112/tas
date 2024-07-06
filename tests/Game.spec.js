"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../src/Game");
describe("Game class tests", () => {
    it("should run the game successfully.", () => {
        const game = new Game_1.Game(20, 2, 10, 10);
        game.addPlayers(5);
        game.startGame();
    });
    it("should throw an error.", () => {
        const game = new Game_1.Game(20, 2, 10, 10);
        expect(() => game.startGame()).toThrow(new Error("There are no Players to play."));
    });
});
