import { getUserDetails } from '@/app/actions/details'
import Navbar from '@/components/Navbar'

async function NavbarWrapper() {
  const response = await getUserDetails()
  const username = response.success ? response.data?.name || 'Guest' : 'Guest'
  
  return <Navbar username={username} />
}

export default NavbarWrapper