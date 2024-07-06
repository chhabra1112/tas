import { OmenType } from "../constants";

export interface IOmen {
  type: OmenType;
  initialPosition: number;
  finalPosition: number;

  getNewPosition(): number;
}
