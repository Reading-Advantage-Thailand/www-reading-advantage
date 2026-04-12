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
    const heroText = screen.getByText(/hero\./i);
    expect(heroText).toBeInTheDocument();
  });

  it("renders blended learning section", () => {
    render(<ReadingAdvantage />);
    const heading = screen.getAllByRole("heading", { level: 2 });
    expect(heading.length).toBeGreaterThan(0);
  });

  it("renders key features", () => {
    render(<ReadingAdvantage />);
    expect(screen.getByText(/keyFeatures/i)).toBeInTheDocument();
  });

  it("renders platform features", () => {
    render(<ReadingAdvantage />);
    expect(screen.getByText(/platformFeatures/i)).toBeInTheDocument();
  });
});
