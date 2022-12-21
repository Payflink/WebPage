import type { MarkdownInstance } from 'astro'

export const languages = ['de', 'en', 'fr', 'it'] as const
export type Language = typeof languages[number]

export interface SiteMapItem {
  href: string
  title: string
}
export interface SiteMapGroup {
  title: string
  items: SiteMapItem[]
}
export type I18nSiteMap = Record<Language, SiteMapGroup[]>

export type FooterInfo = {
  aProductOf: string
  city: string
  inquiries: string
  newsletter: string
  or: string
  appointment: {
    title: string
    url: string
  }
}

export type I18nFooterInfo = Record<Language, FooterInfo>

export type Product = {
  name: string
  description: string
  claim: string
  image: string
}
export type MetaData = Record<Language, Product>

export type CallToAction = {
  href: string
  text: string
}

export type BlogPostFrontMatter = {
  lang: 'de' | 'fr' | 'en'
  title: string
  description: string
  image: string
  date: string
  author: string
}
export type BlogPost = MarkdownInstance<BlogPostFrontMatter>

export type TeamMember = {
  name: string
  role: Record<Language, string>
  image: string
}

export type LandingPageFrontMatter = {
  lang: 'de' | 'fr' | 'en'
  title: string
  description: string
  image: string
  keyword: string
}
export type LandingPage = MarkdownInstance<LandingPageFrontMatter>[]

export type DocumentationFrontMatter = {
  lang: 'de' | 'fr' | 'en'
  title: string
  description: string
}
export type Documentation = MarkdownInstance<DocumentationFrontMatter>[]
