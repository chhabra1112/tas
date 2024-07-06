import { Crocodile } from "../../src/Omens/Crocodile";

describe("Crocodile class tests", () => {
  it("should successfully create a Snake", () => {
    const snake = new Crocodile(30);
    expect(snake.getNewPosition()).toBe(25);
    expect(snake.initialPosition).toBe(30);
  });
});
