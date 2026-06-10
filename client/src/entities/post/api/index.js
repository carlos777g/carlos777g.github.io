// src/entities/post/api/index.js
import { createPost } from "../model";

const API_URL = import.meta.env.VITE_API_URL;

export async function getPosts() {
  const response = await fetch(`${API_URL}/api/blog/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  
  const { posts } = await response.json();
  // Rigor: Map every raw item through the factory model to ensure data integrity
  return posts.map(createPost);
}

export async function getPostBySlug(slug) {
  const response = await fetch(`${API_URL}/api/blog/posts/${slug}`);
  if (!response.ok) throw new Error('Failed to fetch post');
  
  const { post } = await response.json();
  return createPost(post);
}