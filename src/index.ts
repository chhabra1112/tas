import { Game } from "./Game";
import * as fs from "fs";
import * as path from "path";

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
    board.addSnake(+start.trim(), +end.trim());
    idx += 1;
  }
  const noOfLadders = +inputList[idx].trim();
  idx += 1;
  for (let i = 0; i < noOfLadders; i++) {
    const [start, end] = inputList[idx].split(" ");
    board.addLadder(+start.trim(), +end.trim());
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

testRun();
