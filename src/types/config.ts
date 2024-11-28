import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from '@constants/constants'

export type SiteConfig = {
  title: string
  subtitle: string

  lang: string

  themeColor: {
    hue: number
    fixed: boolean
  }
  banner: {
    enable: boolean
    src: string
    position?: 'top' | 'center' | 'bottom'
    credit: {
      enable: boolean
      text: string
      url?: string
    }
  }
  toc: {
    enable: boolean
    depth: 1 | 2 | 3
  }

  favicon: Favicon[]
}

export type Favicon = {
  src: string
  theme?: 'light' | 'dark'
  sizes?: string
}

export enum LinkPreset {
  Blog = 0,
  Novel = 1,
  Spinoff = 2,
  Archive = 3,
  About = 4,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}

export type LIGHT_DARK_MODE =
  | typeof LIGHT_MODE
  | typeof DARK_MODE
  | typeof AUTO_MODE

export type BlogPostData = {
  body: string
  title: string
  published: Date
  description: string
  tags: string[]
  draft?: boolean
  image?: string
  category?: string
  prevTitle?: string
  prevSlug?: string
  nextTitle?: string
  nextSlug?: string
}
/* for Novels Below */
export type NovelPostData = {
  body: string
  title: string
  published: Date
  description: string
  tags: string[]
  draft?: boolean
  image?: string
  category?: string
  prevTitle?: string
  prevSlug?: string
  nextTitle?: string
  nextSlug?: string
}

export enum NovelLinkPreset {
  Blog = 0,
  Novel = 1,
  Spinoff = 2,
  Archive = 3,
  About = 4,
}

export type NovelNavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NovelNavBarConfig = {
  links: (NovelNavBarLink | NovelLinkPreset)[]
}

/* for Spinoff Below */
export type SpinoffPostData = {
  body: string
  title: string
  published: Date
  description: string
  tags: string[]
  draft?: boolean
  image?: string
  category?: string
  prevTitle?: string
  prevSlug?: string
  nextTitle?: string
  nextSlug?: string
}

export enum SpinoffLinkPreset {
  Blog = 0,
  Novel = 1,
  Spinoff = 2,
  Archive = 3,
  About = 4,
}

export type SpinoffNavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type SpinoffNavBarConfig = {
  links: (SpinoffNavBarLink | SpinoffLinkPreset)[]
}
