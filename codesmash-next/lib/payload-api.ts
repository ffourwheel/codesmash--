// Define interfaces based on the Payload CMS collections

export interface Media {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  client?: string;
  excerpt?: string;
  content?: any; // RichText Lexical data
  projectUrl?: string;
  featuredImage: Media | string; // Payload can return the ID or the populated object
  gallery?: { id: string; image: Media | string }[];
  services?: string[];
  publishedDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedDocs<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

/**
 * Fetches portfolios from the Payload REST API.
 * Uses Next.js fetch with next.tags for granular revalidation.
 */
export async function fetchPortfolios(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedDocs<Portfolio>> {
  // Using the absolute URL to our local Payload instance.
  // In production, use your actual absolute URL (e.g., via process.env.NEXT_PUBLIC_SERVER_URL)
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  
  // Depth=1 ensures that relations (like featuredImage) are populated, not just IDs.
  const url = `${baseUrl}/api/portfolios?depth=1&page=${page}&limit=${limit}&sort=-publishedDate`;

  const res = await fetch(url, {
    // Revalidate data every 60 seconds (ISR), or use `cache: 'no-store'` for SSR
    next: { 
      revalidate: 60,
      tags: ['portfolios'] 
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch portfolios: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: any;
  featuredImage: Media | string;
  status: 'draft' | 'published';
  publishedDate?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Fetches posts from the Payload REST API.
 */
export async function fetchPosts(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedDocs<Post>> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/posts?depth=1&page=${page}&limit=${limit}&sort=-publishedDate&where[status][equals]=published`;

  const res = await fetch(url, {
    next: { 
      revalidate: 60,
      tags: ['posts'] 
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}
