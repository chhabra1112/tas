import { Board } from "./Board";
import { Dice } from "./Dice";
import { Player } from "./Player";
import { MovementStrategy, OmenType } from "../constants";
import { IBoard } from "../interfaces/board";
import { IDice } from "../interfaces/dice";
import { IPlayer } from "../interfaces/player";

export class Game {
  private board: IBoard;
  private players: IPlayer[] = [];
  private currentTurn: number = -1;
  private winner: IPlayer | null = null;
  private dice: IDice;

  constructor(
    size?: number,
    noOfDices?: number,
    snakes?: number,
    ladders?: number
  ) {
    this.board = new Board(size);
    this.dice = new Dice(noOfDices);
    snakes && this.board.generateOmens(OmenType.Snake, snakes);
    ladders && this.board.generateOmens(OmenType.Ladder, ladders);
  }

  getBoard(): IBoard {
    return this.board;
  }

  addDice(noOfDices?: number, movementStrategy?: MovementStrategy): void {
    this.dice = new Dice(noOfDices, movementStrategy);
  }

  addPlayer(name: string, startingPosition?: number): void {
    const player = new Player(name, startingPosition);
    this.players.push(player);
  }

  addPlayers(count: number): void {
    while (count > 0) {
      const player = new Player(`Player ${count}`);
      this.players.push(player);
      count--;
    }
  }

  getNextPlayer() {
    if (!this.players.length) {
      throw new Error("There are no Players to play.");
    }
    this.currentTurn++;
    if (this.currentTurn >= this.players.length) {
      this.currentTurn = 0;
    }
    return this.players[this.currentTurn];
  }

  playTurn(player: IPlayer, diceRoll: number) {
    const currPos = player.currPosition;
    const nextPos = currPos + diceRoll;
    let finalPos = this.handleOmen(nextPos);
    this.logMove(player, currPos, nextPos, finalPos);
    finalPos =
      finalPos > this.board.winningPosition
        ? this.board.winningPosition
        : finalPos;

    if (finalPos >= this.board.winningPosition) {
      this.winner = player;
      return player;
    }
    this.board.movePlayer(player, currPos, finalPos);
  }

  startGame() {
    let currentPlayer;
    while (!this.winner) {
      currentPlayer = this.getNextPlayer();
      const move = this.dice.roll();
      this.playTurn(currentPlayer, move);
    }
  }

  handleOmen(position: number): number {
    const omen = this.board.cells?.[position]?.omen;
    if (!omen) {
      return position;
    }
    return omen.getNewPosition();
  }

  logMove(player: IPlayer, start: number, diceMove: number, omenMove: number) {
    let logStatement = `${player.name} rolled a ${diceMove - start} and `;
    if (diceMove == omenMove) {
      logStatement += `moved from ${start}`;
    } else if (diceMove < omenMove) {
      logStatement += `climbed the ladder at ${diceMove} moved from ${diceMove}`;
    } else {
      logStatement += `bitten by snake at ${diceMove} moved from ${diceMove}`;
    }
    console.log(logStatement + ` to ${omenMove}`);
  }
}
