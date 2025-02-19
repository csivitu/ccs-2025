import { Suspense } from 'react'
import NavbarWrapper  from '@/components/navbar-wrapper'
import Navbar from '@/components/Navbar'

export default function LayoutWithNavbar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={<Navbar username="Guest" />}>
        <NavbarWrapper />
      </Suspense>
      <main>{children}</main>
    </>
  )
}