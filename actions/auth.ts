'use server'

import { AuthError } from 'next-auth'
import prisma from '~/lib/prisma'
import { signIn, signOut } from '~/configs/auth'
import { TLoginData } from '..'

export const getUser = async ({ email, password }: TLoginData) => {
  try {
    return await prisma.user.findUnique({ where: { email, password } })
  } catch {
    throw new Error('user not found')
  }
}

export const createUser = async ({
  username,
  email,
  password
}: TLoginData & { username: string }) => {
  try {
    await prisma.user.create({ data: { username, email, password } })
    return { ok: true }
  } catch {
    throw new Error('something went wrong')
  }
}

export const authenticate = async (formData: TLoginData) => {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          throw new Error('credential error')
        default:
          throw new Error('Something went wrong')
      }
    }
    throw error
  }
}

export const logOut = async () => {
  return signOut()
}
