export const mkIsCurrentPage =
  (currentPathname: string) =>
  (path: string, { exact = false } = {}) => {
    if (exact) return currentPathname === path
    return currentPathname.includes(path) ? 'page' : undefined
  }
