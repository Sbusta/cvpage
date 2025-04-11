import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './navigation'; // archivo auxiliar opcional

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  // Asegura que el middleware se aplique a todas las rutas excepto las de sistema
  matcher: ['/((?!api|_next|.*\\..*).*)']
};