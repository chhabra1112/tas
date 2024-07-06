import { Mine } from "../../src/game/Omens/Mine";

describe("Mine class tests", () => {
  it("should successfully create a Mine", () => {
    const mine = Mine.create(10);
    expect(mine.finalPosition).toBe(10);
    expect(mine.initialPosition).toBe(10);
  });
});
