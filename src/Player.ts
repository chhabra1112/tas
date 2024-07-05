import { Constants } from "./constants";
import { IPlayer } from "./interfaces/player";

export class Player implements IPlayer {
  name: string;
  currPosition: number;

  constructor(userName: string, position?: number) {
    this.name = userName;
    this.currPosition = position ?? Constants.DEFAULT_PLAYER_STARTING_POSITION;
  }

  setPosition(newPosition: number): void {
    this.currPosition = newPosition;
  }

  resetPosition(): void {
    this.currPosition = Constants.DEFAULT_PLAYER_STARTING_POSITION;
  }
}
