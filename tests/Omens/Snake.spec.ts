import { Snake } from "../../src/game/Omens/Snake";

describe("Snake class tests", () => {
  it("should Throw error that Snake should not be horizontal", () => {
    expect(() => Snake.create(20, 29)).toThrow(
      new Error("Snake cannot move the player forward.")
    );
  });

  it("should successfully create a Snake", () => {
    const snake = Snake.create(30, 20);
    expect(snake.finalPosition).toBe(20);
    expect(snake.initialPosition).toBe(30);
  });
});
