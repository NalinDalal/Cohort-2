import { describe, it, expect } from "@jest/globals";
import { sum } from "../index";

describe("sum", () => {
  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should add two numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it("should add two numbers", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
