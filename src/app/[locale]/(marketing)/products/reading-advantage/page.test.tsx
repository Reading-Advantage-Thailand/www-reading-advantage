import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ReadingAdvantage from "@/app/[locale]/(marketing)/products/reading-advantage/page";

afterEach(() => {
  cleanup();
});

describe("ReadingAdvantage", () => {
  it("renders main heading", () => {
    render(<ReadingAdvantage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders hero section with description", () => {
    render(<ReadingAdvantage />);
    expect(screen.getAllByRole("heading", { level: 1 }).length).toBe(1);
  });

  it("renders blended learning section", () => {
    render(<ReadingAdvantage />);
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBeGreaterThan(2);
  });

  it("renders key features", () => {
    render(<ReadingAdvantage />);
    expect(screen.getAllByRole("heading", { level: 2 }).length).toBeGreaterThan(
      0,
    );
  });

  it("renders platform features", () => {
    render(<ReadingAdvantage />);
    expect(screen.getAllByRole("heading", { level: 2 }).length).toBeGreaterThan(
      1,
    );
  });
});
