import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  dateFormat: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
