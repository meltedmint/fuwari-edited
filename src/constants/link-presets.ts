import { LinkPreset, type NavBarLink } from '@/types/config'
import { NovelLinkPreset, type NovelNavBarLink } from '@/types/config'
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
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
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
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
  },
}

