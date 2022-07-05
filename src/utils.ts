import { BlogPost, Language } from './types'

export const mkIsCurrentPage =
  (currentPathname: string) =>
  (path: string, { exact = false } = {}) => {
    if (exact) return currentPathname === path
    return currentPathname.includes(path) ? 'page' : undefined
  }

export const takeSortedBlogPosts = (
  blogPosts: BlogPost,
  language: Language,
  take?: number
) =>
  [...blogPosts]
    .sort(
      (a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
    )
    .filter((post) => post.frontmatter.lang === language)
    .slice(0, take)
