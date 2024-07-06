import { OmenType } from "../../constants";
import { Crocodile } from "./Crocodile";
import { Ladder } from "./Ladder";
import { Omen } from "./Omen";
import { Snake } from "./Snake";

export class OmenFactory {
  static createOmen(
    type: OmenType,
    size: number,
    start: number,
    end: number
  ): Omen {
    switch (type) {
      case OmenType.Crocodile:
        return Crocodile.create(start);
      case OmenType.Ladder:
        return Ladder.create(size, start, end);
      case OmenType.Snake:
        return Snake.create(start, end);
    }
    return Snake.create(start, end);
  }
}
