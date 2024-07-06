import { Crocodile } from "../../src/game/Omens/Crocodile";

describe("Crocodile class tests", () => {
  it("should successfully create a Snake", () => {
    const snake = Crocodile.create(30);
    expect(snake.getNewPosition()).toBe(25);
    expect(snake.initialPosition).toBe(30);
  });
});
