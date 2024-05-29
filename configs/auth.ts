import { getUser } from '~/actions/auth'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import * as z from 'zod'

import { authconfig } from './authconfig'

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authconfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data

          const user = await getUser({ email, password })
          return user ?? null
        }

        return null
      }
    })
  ]
})
