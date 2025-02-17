"use server";

import { prisma } from "@/lib/db"; 

export async function updateUserDetails(formData: FormData) {
  const phoneNumber = formData.get("phoneNumber") as string;
  const gender = formData.get("gender") as string;
  const aboutUs = formData.get("aboutUs") as string;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: "user-id-placeholder" },
      data: {
        phoneNumber,
        gender: gender as "MALE" | "FEMALE" | "OTHER",
        aboutUs,
      },
    });

    return { success: true, user: updatedUser };
  } 
  catch (error) {
    return { error: "Failed to update user details" };
  }
}
