import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'America/Bogota'
  };
});