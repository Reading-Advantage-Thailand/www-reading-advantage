import { describe, it, expect } from "vitest";
import { calculateReadingTime, getPaginatedPosts } from "@/lib/blog";

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

describe("getPaginatedPosts", () => {
  const mockPosts = [
    {
      slug: "post-1",
      title: "Post 1",
      date: "2024-01-01",
      excerpt: "Excerpt 1",
      author: "Author 1",
      tags: ["tag1"],
      readingTime: "5 min read",
    },
    {
      slug: "post-2",
      title: "Post 2",
      date: "2024-01-02",
      excerpt: "Excerpt 2",
      author: "Author 2",
      tags: ["tag1", "tag2"],
      readingTime: "3 min read",
    },
    {
      slug: "post-3",
      title: "Post 3",
      date: "2024-01-03",
      excerpt: "Excerpt 3",
      author: "Author 3",
      tags: ["tag2"],
      readingTime: "7 min read",
    },
    {
      slug: "post-4",
      title: "Post 4",
      date: "2024-01-04",
      excerpt: "Excerpt 4",
      author: "Author 4",
      tags: ["tag3"],
      readingTime: "4 min read",
    },
    {
      slug: "post-5",
      title: "Post 5",
      date: "2024-01-05",
      excerpt: "Excerpt 5",
      author: "Author 5",
      tags: ["tag1"],
      readingTime: "6 min read",
    },
    {
      slug: "post-6",
      title: "Post 6",
      date: "2024-01-06",
      excerpt: "Excerpt 6",
      author: "Author 6",
      tags: ["tag2"],
      readingTime: "5 min read",
    },
    {
      slug: "post-7",
      title: "Post 7",
      date: "2024-01-07",
      excerpt: "Excerpt 7",
      author: "Author 7",
      tags: ["tag3"],
      readingTime: "8 min read",
    },
    {
      slug: "post-8",
      title: "Post 8",
      date: "2024-01-08",
      excerpt: "Excerpt 8",
      author: "Author 8",
      tags: ["tag1"],
      readingTime: "3 min read",
    },
    {
      slug: "post-9",
      title: "Post 9",
      date: "2024-01-09",
      excerpt: "Excerpt 9",
      author: "Author 9",
      tags: ["tag2"],
      readingTime: "6 min read",
    },
    {
      slug: "post-10",
      title: "Post 10",
      date: "2024-01-10",
      excerpt: "Excerpt 10",
      author: "Author 10",
      tags: ["tag3"],
      readingTime: "4 min read",
    },
  ];

  it("returns the correct slice of posts for page 1 with default perPage (9)", async () => {
    const result = await getPaginatedPosts(1, 9, mockPosts);
    expect(result.posts).toHaveLength(9);
    expect(result.posts[0].slug).toBe("post-10");
    expect(result.posts[8].slug).toBe("post-2");
    expect(result.currentPage).toBe(1);
    expect(result.totalPages).toBe(2);
  });

  it("returns the correct slice of posts for page 2", async () => {
    const result = await getPaginatedPosts(2, 9, mockPosts);
    expect(result.posts).toHaveLength(1);
    expect(result.posts[0].slug).toBe("post-1");
    expect(result.currentPage).toBe(2);
    expect(result.totalPages).toBe(2);
  });

  it("returns total page count correctly", async () => {
    const result = await getPaginatedPosts(1, 3, mockPosts);
    expect(result.totalPages).toBe(4);
  });

  it("returns empty array for page numbers beyond total", async () => {
    const result = await getPaginatedPosts(3, 9, mockPosts);
    expect(result.posts).toHaveLength(0);
    expect(result.currentPage).toBe(3);
    expect(result.totalPages).toBe(2);
  });

  it("returns empty array for page 0 or negative", async () => {
    const result = await getPaginatedPosts(0, 9, mockPosts);
    expect(result.posts).toHaveLength(0);
  });

  it("handles custom perPage values", async () => {
    const result = await getPaginatedPosts(1, 5, mockPosts);
    expect(result.posts).toHaveLength(5);
    expect(result.totalPages).toBe(2);
  });
});
