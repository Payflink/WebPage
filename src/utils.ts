export const mkIsCurrentPage = (currentPathname: string) => (path: string) =>
  currentPathname.includes(path) ? 'page' : undefined
