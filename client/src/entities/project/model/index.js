export const createProject = (data) => ({
  id: data.slug ?? '',
  title: data.title ?? 'Untitled',
  description: data.description ?? null,
  date: data.date ?? null,
  image: data.cover_image ?? data.coverImage ?? null,
  liveUrl: data.demo_url ?? data.demoUrl ?? null,
  githubUrl: data.github_url ?? data.githubUrl ?? null,
  stack: data.stack ?? [],
})
