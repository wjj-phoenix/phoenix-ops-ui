import { locale } from 'dayjs';
import 'dayjs/locale/zh-cn';
import { localStg } from '@/utils/storage';

/**
 * Set dayjs locale
 *
 * @param lang
 */
export function setDayjsLocale(lang: App.I18n.LangType = 'zh-CN') {
  const localMap = {
    'zh-CN': 'zh-cn'
  } satisfies Record<App.I18n.LangType, string>;

  const l = lang || localStg.get('lang') || 'zh-CN';

  locale(localMap[l]);
}
