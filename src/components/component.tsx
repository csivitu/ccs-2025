'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

export function AuthButtons() {
  const [isPending, startTransition] = useTransition()
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Sign in error:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div>
      {!session ? (
        <button
          disabled={isPending}
          onClick={() => startTransition(() => handleSignIn())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isPending ? 'Signing in...' : 'Sign in with Google'}
        </button>
      ) : (
        <button
          disabled={isPending}
          onClick={() => startTransition(() => handleSignOut())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
        >
          {isPending ? 'Signing out...' : 'Sign out'}
        </button>
      )}
    </div>
  )
}
