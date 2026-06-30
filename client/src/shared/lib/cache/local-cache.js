const DEFAULT_TTL_MS =  1 * 60 * 60 * 1000; // 24 hours

export function getCached(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const { data, expiresAt } = JSON.parse(raw);
    if (Date.now() > expiresAt) {
      localStorage.removeItem(key);
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

export function setCached(key, data, ttlMs = DEFAULT_TTL_MS) {
  try {
    const payload = {
      data,
      expiresAt: Date.now() + ttlMs,
    };
    localStorage.setItem(key, JSON.stringify(payload));
  } catch {
    // localStorage full or unavailable, fail silently
  }
}
