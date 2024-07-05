import { Game } from "./Game";

function main() {
  const size = 10;
  const game = new Game(10);
  const board = game.getBoard();
  const snakes = [
    [62, 5],
    [33, 6],
    [49, 9],
    [88, 16],
    [41, 20],
    [56, 53],
    [98, 64],
    [93, 73],
    [95, 75],
  ];
  const ladders = [
    [2, 37],
    [27, 46],
    [10, 32],
    [51, 68],
    [61, 79],
    [65, 84],
    [71, 91],
    [81, 100],
  ];
  for (let i = 0; i < snakes.length; i++) {
    board.addSnake(snakes[i][0], snakes[i][1]);
  }
  for (let i = 0; i < ladders.length; i++) {
    board.addLadder(ladders[i][0], ladders[i][1]);
  }
  const players: [string, number][] = [
    ["Gaurav", 1],
    ["Sagar", 1],
  ];
  for (let i = 0; i < players.length; i++) {
    game.addPlayer(players[i][0], players[i][1]);
  }
  game.startGame();
}

main();
