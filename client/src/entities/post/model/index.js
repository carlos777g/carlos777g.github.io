export const createPost = (data) => ({
  slug: data.slug ?? '',
  title: data.title ?? 'Untitled',
  date: data.date ?? null,
  tags: data.tags ?? [],
  tools: data.tools ?? [],
  description: data.description ?? null,
  coverImage: data.cover_image ?? null,
  content: data.content ?? null,
})