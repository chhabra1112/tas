import { Game } from "../src/game";

describe("Game class tests", () => {
  it("should run the game successfully.", () => {
    const game = new Game(20, 2, 10, 10);
    game.addPlayers(5);
    game.startGame();
  });

  it("should throw an error.", () => {
    const game = new Game(20, 2, 10, 10);
    expect(() => game.startGame()).toThrow(
      new Error("There are no Players to play.")
    );
  });
});
