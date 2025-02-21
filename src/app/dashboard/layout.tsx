import { redirect } from 'next/navigation'
import { auth } from '../(auth)/auth'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer/footer'
import { IoIosWarning } from 'react-icons/io'
import { RiErrorWarningLine } from 'react-icons/ri'
import { prisma } from '@/lib/db'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  })

  const onboardingCompleted =
    !!user?.gender && !!user?.aboutUs && !!user?.phoneNumber

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar username={session?.user.name} image={session.user.image || ''} />
      {!onboardingCompleted && (
        <div
          className="w-full py-3 bg-orange-400/20 border-orange-900/70 border-b px-4 md:px-8 font-apro flex items-center gap-4"
          id="profile-completion-banner"
        >
          <RiErrorWarningLine className="w-20 md:w-12 h-20 md:h-12 text-orange-100" />
          <div className="">
            <h1 className="font-bold text-sm md:text-lg">
              Profile Completion Required
            </h1>
            <p className="text-xs md:text-sm lg:text-base">
              To enhance your experience and ensure seamless communication,
              please visit the <strong>Profile Page</strong> and complete your
              personal details.
            </p>
          </div>
        </div>
      )}
      {children}
      <Footer />
    </div>
  )
}
