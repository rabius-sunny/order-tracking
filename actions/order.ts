'use server'

import { revalidatePath } from 'next/cache'
import prisma from '~/lib/prisma'

import { TStatus } from '..'

export const createOrder = async () => {
  try {
    await prisma.order.create({})
    return { ok: true }
  } catch {
    throw new Error('something went wrong')
  }
}

export const getOrder = async () => {
  try {
    const data = await prisma.order.findFirst()
    return { data }
  } catch {
    throw new Error('Order not found')
  }
}

export const changeOrder = async (id: string, status: TStatus) => {
  try {
    await prisma.order.update({ where: { id }, data: { status } })
    revalidatePath('/')
    return { ok: true }
  } catch {
    throw new Error('something went wrong')
  }
}
