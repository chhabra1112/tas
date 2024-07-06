import { Board } from "../src/Board";
import { Cell } from "../src/Cell";
import { Ladder } from "../src/Omens/Ladder";
import { Omen } from "../src/Omens/Omen";
import { Snake } from "../src/Omens/Snake";

describe("Board class tests", () => {
  it("should Throw an error", () => {
    expect(() => new Board(1)).toThrow(
      new Error("Size of Board should atleast be 2x2.")
    );
  });

  it("should return a board with all valid keys.", () => {
    const board = new Board(20);
    expect(board.winningPosition).toBe(400);
    expect(board.size).toBe(20);
    expect(() => board.addLadder(56, 50)).toThrow(
      new Error("Ladder cannot move the player backwards.")
    );
    board.addLadder(56, 86);
    expect(board.cells[56]).toBeInstanceOf(Cell);

    expect(board.cells[56].omen).toBeInstanceOf(Omen);
    expect(board.cells[56].omen).toMatchObject(new Ladder(20, 56, 86));

    expect(() => board.addSnake(50, 56)).toThrow(
      new Error("Snake cannot move the player forward.")
    );

    board.addSnake(50, 36);
    expect(board.cells[50]).toBeInstanceOf(Cell);

    expect(board.cells[50].omen).toBeInstanceOf(Omen);
    expect(board.cells[50].omen).toMatchObject(new Snake(50, 36));
  });
});
