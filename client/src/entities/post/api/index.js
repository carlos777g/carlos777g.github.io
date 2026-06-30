// src/entities/post/api/index.js
import { createPost } from "../model"
import { getCached, setCached } from "@/shared/lib/cache/local-cache"

const API_URL = import.meta.env.VITE_API_URL
const POSTS_CACHE_KEY = "cache:posts"

export async function getPosts() {
  const cached = getCached(POSTS_CACHE_KEY)
  if (cached) return cached

  const response = await fetch(`${API_URL}/api/blog/posts`)
  if (!response.ok) throw new Error('Failed to fetch posts')
  const { posts } = await response.json()
  const normalized = posts.map(createPost)

  setCached(POSTS_CACHE_KEY, normalized)
  return normalized
}

export async function getPostBySlug(slug) {
  const cacheKey = `cache:post:${slug}`
  const cached = getCached(cacheKey)
  if (cached) return cached

  const response = await fetch(`${API_URL}/api/blog/posts/${slug}`)
  if (!response.ok) throw new Error('Failed to fetch post')
  const { post } = await response.json()
  const normalized = createPost(post)

  setCached(cacheKey, normalized)
  return normalized
}
