const API_URL = import.meta.env.VITE_API_URL

export async function getPosts() {
  const response = await fetch(`${API_URL}/api/blog/posts`)
  if (!response.ok) throw new Error('Failed to fetch posts')
  const { posts } = await response.json()
  return posts
}

export async function getPostBySlug(slug) {
  const response = await fetch(`${API_URL}/api/blog/posts/${slug}`)
  if (!response.ok) throw new Error('Failed to fetch post')
  const { post } = await response.json()
  return post
}