import { createProject } from "../model"
import { getCached, setCached } from "@/shared/lib/cache/local-cache"

const API_URL = import.meta.env.VITE_API_URL
const PROJECTS_CACHE_KEY = "cache:projects"

export async function getProjects() {
  const cached = getCached(PROJECTS_CACHE_KEY)
  if (cached) return cached

  const response = await fetch(`${API_URL}/api/projects`)
  if (!response.ok) throw new Error('Failed to fetch projects')
  const { projects } = await response.json()
  const normalized = projects.map(createProject)

  setCached(PROJECTS_CACHE_KEY, normalized)
  return normalized
}
