import { Game } from "./game";
import * as fs from "fs";
import * as path from "path";
import config from "../config.json";
import { MovementStrategy, OmenType } from "./constants";

export function testRun() {
  const game = new Game();
  const board = game.getBoard();
  const input = fs.readFileSync(path.join(__dirname, "../input"), "utf-8");
  const inputList = input.split("\r\n");
  let idx = 0;
  const noOfSnakes = +inputList[idx].trim();
  idx++;
  for (let i = 0; i < noOfSnakes; i++) {
    const [start, end] = inputList[idx].split(" ");
    board.addOmen(OmenType.Snake, +start.trim(), +end.trim());
    idx += 1;
  }
  const noOfLadders = +inputList[idx].trim();
  idx += 1;
  for (let i = 0; i < noOfLadders; i++) {
    const [start, end] = inputList[idx].split(" ");
    board.addOmen(OmenType.Ladder, +start.trim(), +end.trim());
    idx += 1;
  }
  const noOfPlayers = +inputList[idx].trim();
  idx += 1;
  for (let i = 0; i < noOfPlayers; i++) {
    const [name, position] = inputList[idx].split(" ");
    game.addPlayer(name.trim(), +position.trim());
    idx += 1;
  }

  game.startGame();
}

export function configRun() {
  const { players, boardSize, snakes, ladders, dies, movementStrategy } =
    config;
  const game = new Game(boardSize, dies, snakes, ladders);
  game.addDice(dies, movementStrategy as MovementStrategy);
  game.addPlayers(players);
  game.startGame();
}

function main() {
  const args = process.argv;
  const run = args[args.length - 1];
  switch (run) {
    case "config":
      return configRun();
    case "input":
      return testRun();
    default:
      console.log("Please enter valid argument.");
  }
}
main();
