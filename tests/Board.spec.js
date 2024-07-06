"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("../src/Board");
const Cell_1 = require("../src/Cell");
const Ladder_1 = require("../src/Omens/Ladder");
const Omen_1 = require("../src/Omens/Omen");
const Snake_1 = require("../src/Omens/Snake");
describe("Board class tests", () => {
    it("should Throw an error", () => {
        expect(() => new Board_1.Board(1)).toThrow(new Error("Size of Board should atleast be 2x2."));
    });
    it("should return a board with all valid keys.", () => {
        const board = new Board_1.Board(20);
        expect(board.winningPosition).toBe(400);
        expect(board.size).toBe(20);
        expect(() => board.addLadder(56, 50)).toThrow(new Error("Ladder cannot move the player backwards."));
        board.addLadder(56, 86);
        expect(board.cells[56]).toBeInstanceOf(Cell_1.Cell);
        expect(board.cells[56].omen).toBeInstanceOf(Omen_1.Omen);
        expect(board.cells[56].omen).toMatchObject(new Ladder_1.Ladder(20, 56, 86));
        expect(() => board.addSnake(50, 56)).toThrow(new Error("Snake cannot move the player forward."));
        board.addSnake(50, 36);
        expect(board.cells[50]).toBeInstanceOf(Cell_1.Cell);
        expect(board.cells[50].omen).toBeInstanceOf(Omen_1.Omen);
        expect(board.cells[50].omen).toMatchObject(new Snake_1.Snake(50, 36));
    });
});
