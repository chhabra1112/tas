import { configRun, testRun } from "../src";

describe("code runs from provided input", () => {
  it("should run the game successfully with given input.", () => {
    testRun();
  });

  it("should run the game successfully with given config.", () => {
    configRun();
  });
});
