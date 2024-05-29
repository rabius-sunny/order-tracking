import NextAuth from 'next-auth'

import { authconfig } from './configs/authconfig'

export default NextAuth(authconfig).auth

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
