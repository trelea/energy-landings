import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  /**
   * please exclude /admin and /api routes
   * and the ones containing a dot (e.g. `favicon.ico`)
   */
  matcher: '/((?!admin|api|trpc|_next|_vercel|.*\\..*).*)',
}
