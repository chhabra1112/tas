import { Board } from "../src/Board";

describe("Board class tests", () => {
  it("should Throw an error", () => {
    expect(() => new Board(1)).toThrow(
      new Error("Size of Board should atleast be 2x2.")
    );
  });
});
