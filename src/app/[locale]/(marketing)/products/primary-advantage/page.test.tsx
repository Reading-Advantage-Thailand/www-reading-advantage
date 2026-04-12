import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import PrimaryAdvantage from "@/app/[locale]/(marketing)/products/primary-advantage/page";

afterEach(() => {
  cleanup();
});

describe("PrimaryAdvantage", () => {
  it("renders main heading", () => {
    render(<PrimaryAdvantage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders hero section with description", () => {
    render(<PrimaryAdvantage />);
    const heroText = screen.getByText(/hero\./i);
    expect(heroText).toBeInTheDocument();
  });

  it("renders key features section", () => {
    render(<PrimaryAdvantage />);
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBeGreaterThan(0);
  });

  it("renders platform features", () => {
    render(<PrimaryAdvantage />);
    expect(screen.getByText(/platformFeatures/i)).toBeInTheDocument();
  });

  it("renders CEFR alignment section", () => {
    render(<PrimaryAdvantage />);
    expect(screen.getByText(/cefrSection/i)).toBeInTheDocument();
  });
});
