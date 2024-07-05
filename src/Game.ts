import { Board } from "./Board";
import { Dice } from "./Dice";
import { Player } from "./Player";
import { IBoard } from "./interfaces/board";
import { IDice } from "./interfaces/dice";
import { IPlayer } from "./interfaces/player";

export class Game {
  private board: IBoard;
  private players: IPlayer[] = [];
  private currentTurn: number = -1;
  private winner: IPlayer | null = null;
  private dice: IDice;

  constructor(
    size: number,
    noOfDices?: number,
    snakes?: number,
    ladders?: number
  ) {
    this.board = new Board(size);
    this.dice = new Dice(noOfDices);
    snakes && this.board.addNewSnakes(snakes);
    ladders && this.board.addNewLadders(ladders);
  }

  getBoard(): IBoard {
    return this.board;
  }

  addDice(noOfDices?: number): void {
    this.dice = new Dice(noOfDices);
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

  startGame() {
    let currentPlayer;
    while (!this.winner) {
      currentPlayer = this.getNextPlayer();
      const move = this.dice.roll();

      const currPos = currentPlayer.currPosition;
      const nextPos = currPos + move;
      let finalPos = this.handleOmen(nextPos);
      finalPos =
        finalPos > this.board.winningPosition
          ? this.board.winningPosition
          : finalPos;
      this.logMove(currentPlayer, currPos, nextPos, finalPos);
      currentPlayer.setPosition(finalPos);
      if (finalPos >= this.board.winningPosition) {
        this.winner = currentPlayer;
        return currentPlayer;
      }
      this.board.movePlayer(currentPlayer, currPos, finalPos);
    }
  }

  handleOmen(position: number): number {
    const omen = this.board.cells?.[position]?.omen;
    if (!omen) {
      return position;
    }
    return omen.finalPosition;
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
