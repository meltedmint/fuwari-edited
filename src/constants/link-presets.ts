import { LinkPreset, type NavBarLink } from '@/types/config'
import type { NovelLinkPreset, NovelNavBarLink } from '@/types/config'
import type { SpinoffLinkPreset, SpinoffNavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Blog]: {
    name: i18n(I18nKey.blog),
    url: '/',
  },
  [LinkPreset.Novel]: {
    name: i18n(I18nKey.novel),
    url: '/novel/',
  },
  [LinkPreset.Spinoff]: {
    name: i18n(I18nKey.spinoff),
    url: '/spinoff/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
}

export const NovelLinkPresets: { [key in NovelLinkPreset]: NovelNavBarLink } = {
  [LinkPreset.Blog]: {
    name: i18n(I18nKey.blog),
    url: '/',
  },
  [LinkPreset.Novel]: {
    name: i18n(I18nKey.novel),
    url: '/novel/',
  },
  [LinkPreset.Spinoff]: {
    name: i18n(I18nKey.spinoff),
    url: '/spinoff/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/novel/archive/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
}

export const SpinoffLinkPresets: {
  [key in SpinoffLinkPreset]: SpinoffNavBarLink
} = {
  [LinkPreset.Blog]: {
    name: i18n(I18nKey.blog),
    url: '/',
  },
  [LinkPreset.Novel]: {
    name: i18n(I18nKey.novel),
    url: '/novel/',
  },
  [LinkPreset.Spinoff]: {
    name: i18n(I18nKey.spinoff),
    url: '/spinoff/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/spinoff/archive/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
}
