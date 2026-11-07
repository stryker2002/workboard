import { describe, expect, it } from "vitest";

describe("WorkBoard test environment", () => {
  it("should execute a basic test", () => {
    const result = 2 + 2;

    expect(result).toBe(4);
  });
});