import { describe, it, expect } from "vitest";
import { calculateReadingTime } from "@/lib/blog";

describe("calculateReadingTime", () => {
  it("returns correct reading time for short content", () => {
    const shortContent =
      "This is a short blog post with only fifty words here and there to read.";
    const result = calculateReadingTime(shortContent);
    expect(result).toBe("1 min read");
  });

  it("returns correct reading time for content requiring multiple minutes", () => {
    const words = Array(1000).fill("word").join(" ");
    const result = calculateReadingTime(words);
    expect(result).toBe("5 min read");
  });

  it("handles empty string", () => {
    const result = calculateReadingTime("");
    expect(result).toBe("1 min read");
  });

  it("handles content with extra whitespace", () => {
    const contentWithWhitespace = "  word   word   word  ";
    const result = calculateReadingTime(contentWithWhitespace);
    expect(result).toBe("1 min read");
  });
});
