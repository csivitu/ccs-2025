import SocialMediaLink from './socialMediaLink'
import githubLogo from '../../../public/logos/githubLogo.svg'
import linkedInLogo from '../../../public/logos/linkedinLogo.svg'
import instagramLogo from '../../../public/logos/instagramLogo.svg'
import xLogo from '../../../public/logos/xLogo.svg'

export default function Footer() {
  return (
    <footer className="bg-[#09090b] flex tab:justify-between mobile:flex-col tab:flex-row mobile:justify-center mobile:items-center tab:items-center tab:gap-4 mobile:gap-4 mobile:mt-4 tab:mt-4 w-full relative z-[100]">
      <div className="flex w-full mobile:justify-between tab:justify-start">
        <SocialMediaLink
          name="@csivitu"
          href="https://github.com/csivitu"
          icon={githubLogo}
        />
        <SocialMediaLink
          name="@csivitu"
          href="https://www.linkedin.com/company/csivitu/"
          icon={linkedInLogo}
        />
      </div>
      <div className="text-center tab:flex justify-center items-center font-bold mobile:hidden whitespace-nowrap">
        <p>Made with ❤️ by CSI VIT</p>
      </div>
      <div className="tab:flex w-full mobile:justify-between tab:justify-end mobile:hidden">
        <SocialMediaLink
          name="@csivitu"
          href="https://x.com/csivitu"
          icon={xLogo}
        />
        <SocialMediaLink
          name="@csivitu"
          href="https://www.instagram.com/csivitu/"
          icon={instagramLogo}
        />
      </div>
    </footer>
  )
}
