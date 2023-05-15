import { commonFibonacci } from "../fibonacci";

describe("Fibonacci", () => {
  test("Should return 1", () => {
    expect(commonFibonacci(1)).toBe(1);
  });
});
