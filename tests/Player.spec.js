"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../src/Player");
describe("Player class tests", () => {
    it("should return a player with given name and starting position (0)", () => {
        const player = new Player_1.Player("Hari");
        expect(player.currPosition).toBe(0);
        expect(player.name).toBe("Hari");
    });
    it("should return a player with given name and given starting position", () => {
        const player = new Player_1.Player("Hari", 57);
        expect(player.currPosition).toBe(57);
        expect(player.name).toBe("Hari");
        player.setPosition(80);
        expect(player.currPosition).toBe(80);
        player.resetPosition();
        expect(player.currPosition).toBe(0);
    });
});
