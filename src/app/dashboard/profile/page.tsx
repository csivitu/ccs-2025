import { getUserStats } from '../../actions/domains'
import { redirect } from 'next/navigation'
import ProfileClient from './profile'
import { auth } from '@/app/(auth)/auth'
import { User } from 'lucide-react'

const Profile = async () => {
  const response = await getUserStats()
  if (!response || !response.success || !response.data) {
    redirect('/')
  }
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }

  return <ProfileClient user={response.data} image={session.user.image || ''} />
}

export default Profile
