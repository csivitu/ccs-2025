'use server'

import { requestHandler } from '@/helpers/request-handler'
import { prisma } from '@/lib/db'
import type { Gender, PortfolioCategory } from '@prisma/client'
import { revalidatePath } from 'next/cache'

interface UpdateProfileData {
  name: string
  aboutUs?: string
  gender?: Gender
  phoneNumber?: string
  portfolios?: {
    category: PortfolioCategory
    link: string
  }[]
}

export async function updateProfile(userId: string, data: UpdateProfileData) {
  return requestHandler(async () => {
    // Update user basic info
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        aboutUs: data.aboutUs,
        gender: data.gender,
        phoneNumber: data.phoneNumber,
      },
    })

    // If portfolios are provided, update them
    if (data.portfolios) {
      // Delete existing portfolios
      await prisma.portfolio.deleteMany({
        where: { userId },
      })

      // Create new portfolios
      await prisma.portfolio.createMany({
        data: data.portfolios.map((portfolio) => ({
          ...portfolio,
          userId,
        })),
      })
    }

    revalidatePath('/dashboard/profile')
    return updatedUser
  })
}
