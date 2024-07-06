import { Ladder } from "../../src/Omens/Ladder";

describe("Ladder class tests", () => {
  it("should Throw error that Ladder should not be horizontal", () => {
    expect(() => new Ladder(10, 20, 29)).toThrow(
      new Error("Ladders can't be horizontal")
    );
  });

  it("should Throw error that Ladder move backwards.", () => {
    expect(() => new Ladder(10, 31, 29)).toThrow(
      new Error("Ladder cannot move the player backwards.")
    );
  });

  it("should successfully create a ladder", () => {
    const ladder = new Ladder(10, 20, 30);
    expect(ladder.finalPosition).toBe(30);
    expect(ladder.initialPosition).toBe(20);
  });
});
