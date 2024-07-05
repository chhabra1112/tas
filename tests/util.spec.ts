import { generateRandomInt } from "../src/utils";

describe("Util Random int function", () => {
  it("should return a random number between two integers", () => {
    const randInt = generateRandomInt(1, 20);
    expect(randInt).toBeLessThanOrEqual(20);
    expect(randInt).toBeGreaterThanOrEqual(1);
  });
});
