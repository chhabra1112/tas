export enum OmenType {
  Snake,
  Ladder,
  Mine,
  Crocodile,
}

export enum MovementStrategy {
  MAX = "MAX",
  MIN = "MIN",
  SUM = "SUM",
}

export class Constants {
  public static readonly DEFAULT_DICE_COUNT = 1;
  public static readonly MAXIMUM_PER_DICE_VALUE = 6;
  public static readonly MINIMUM_PER_DICE_VALUE = 1;
  public static readonly DEFAULT_PLAYER_STARTING_POSITION = 0;
  public static readonly DEFAULT_PLAYER_WINNING_POSITION = 100;
  public static readonly DEFAULT_BOARD_SIZE = 10;
}
