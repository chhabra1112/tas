export interface IDice {
  count: number;
  minValuePerDice: number;
  maxValuePerDice: number;
  roll(): number;
}
