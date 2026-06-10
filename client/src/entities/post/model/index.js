// src/entities/post/model/index.js

/**
 * Post Entity Factory
 * Normalizes backend response payloads into a strict frontend data structure.
 */
export const createPost = (data) => ({
  slug: data.slug ?? '',
  title: data.title ?? 'Untitled',
  date: data.date ?? null,
  tags: data.tags ?? [],
  tools: data.tools ?? [],
  description: data.description ?? null,
  coverImage: data.cover_image ?? data.coverImage ?? null,
  content: data.content ?? null,
})