export interface IPlayer {
  name: string;
  currPosition: number;

  setPosition(postion: number): void;
  resetPosition(): void;
}
