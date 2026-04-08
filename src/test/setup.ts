import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
}));

vi.mock("@/locales/client", () => ({
  useScopedI18n: vi.fn((scope: string) => (key: string) => `${scope}.${key}`),
  useCurrentLocale: vi.fn(() => "en"),
  useChangeLocale: vi.fn(() => vi.fn()),
}));

vi.mock("@/locales/server", () => ({
  getScopedI18n: vi.fn(
    (scope: string) => async (key: string) => `${scope}.${key}`,
  ),
}));
