'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { UserStats } from '../../actions/domains'
import { titleCase } from '@/lib/utils'
import { updateProfile } from '@/app/actions/profile'
import { Gender, PortfolioCategory } from '@prisma/client'

interface ProfileClientProps {
  user: UserStats
  image: string
}

const ProfileClient = (props: ProfileClientProps) => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: props.user.name,
    aboutUs: props.user.aboutUs || '',
    gender: props.user.gender || undefined,
    phoneNumber: props.user.phoneNumber || '',
    portfolios: props.user.portfolios || [],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await updateProfile(props.user.id, formData)
    if (result.success) {
      setIsEditing(false)
    }
  }

  const EditForm = () => (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-4 mx-12">
        <div>
          <label htmlFor="name" className="block text-[18px] mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
            required
          />
        </div>

        <div>
          <label htmlFor="aboutUs" className="block text-[18px] mb-2">
            About
          </label>
          <textarea
            id="aboutUs"
            value={formData.aboutUs}
            onChange={(e) =>
              setFormData({ ...formData, aboutUs: e.target.value })
            }
            className="w-full bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-[18px] mb-2">
            Gender
          </label>
          <select
            id="gender"
            value={formData.gender || ''}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value as Gender })
            }
            className="w-full h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
          >
            <option value="">Select Gender</option>
            {Object.values(Gender).map((gender) => (
              <option key={gender} value={gender}>
                {titleCase(gender)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-[18px] mb-2">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className="w-full h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
          />
        </div>
        <div>
          <label className="block text-[18px] mb-2">
            Portfolio/Project Links
          </label>
          {formData.portfolios.map((portfolio) => (
            <div key={portfolio.id} className="flex gap-2 mb-2">
              <input
                type="url"
                value={portfolio.link}
                onChange={(e) => {
                  const newPortfolios = formData.portfolios.map((p) =>
                    p.id === portfolio.id ? { ...p, link: e.target.value } : p,
                  )
                  setFormData({ ...formData, portfolios: newPortfolios })
                }}
                className="flex-1 h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
                placeholder="https://example.com"
              />
              {formData.portfolios.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const newPortfolios = formData.portfolios.filter(
                      (p) => p.id !== portfolio.id,
                    )
                    setFormData({ ...formData, portfolios: newPortfolios })
                  }}
                  className="h-[32px] px-2 bg-red-600 rounded-[6px] text-[14px] hover:bg-red-700"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setFormData({
                ...formData,
                portfolios: [
                  ...formData.portfolios,
                  {
                    id: `temp-${Date.now()}`,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    category: PortfolioCategory.TECH,
                    link: '',
                    userId: props.user.id,
                  },
                ],
              })
            }}
            className="mt-2 h-[32px] px-4 bg-[#238636] rounded-[6px] text-[14px] hover:bg-[#2ea043]"
          >
            Add Link
          </button>
        </div>
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className="w-1/2 h-[32px] bg-[#238636] border border-[#F0F6FC] border-opacity-10 rounded-[6px] text-[14px] hover:bg-[#2ea043]"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="w-1/2 h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] text-[14px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  )

  return (
    <div className="container mx-auto py-8 px-4 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
        <div className="col-span-1 md:col-span-3 flex flex-col items-center">
          <div className="mb-4 w-[290px] h-[290px] rounded-2xl overflow-hidden">
            <Image
              src={props.image.length > 0 ? props.image : '/profile.webp'}
              alt="Raju Rastogi"
              width={296}
              height={296}
            />
          </div>
          {isEditing ? (
            <EditForm />
          ) : (
            <>
              <h1 className="text-[25px] font-semibold self-start mx-12">
                {props.user.name}
              </h1>
              <p className="text-[20px] mb-4 self-start mx-12">
                {props.user.aboutUs}
              </p>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-[296px] h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] text-[18px] flex items-center justify-center my-5 py-3"
              >
                Edit profile
              </button>
            </>
          )}
          <div className="w-[302px] h-[1px] bg-[#30363D] my-4" />

          <div className="flex flex-col justify-center items-center mobile:w-full gap-4">
            <h2 className="text-[20px] font-semibold self-start w-full text-center">
              Achievements
            </h2>
            <Image
              src="/badge.webp"
              alt="Achievement Badge"
              width={70}
              height={70}
            />
            <div className="border-[#1cec1c] border-[2px] rounded-full py-1 px-4 text-[12px] font-bold">
              You chose CSI
            </div>
          </div>
          <div className="w-[302px] h-[1px] bg-[#30363D] my-4" />
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[20px] font-semibold self-start mx-12">
              Organizations
            </h2>
            <Image
              src="/org.webp"
              alt="Organization Logo"
              width={71}
              height={71}
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 text-left overflow-x-auto">
          <div className="mb-6">
            <Image
              src="/contri.webp"
              width={878}
              height={162}
              alt="Contribution Chart"
              className="rounded-t-[10px] mobile:hidden tab:block"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-[20px] font-semibold">Contribution activity</h3>
            <div className="flex items-center mt-1">
              <span className="text-[18px]">{formattedDate}</span>
              <div className="w-[302px] h-[1px] bg-[#30363D] my-4" />
            </div>
          </div>
          <div className="flex items-start mb-6">
            <Image
              src="/side.webp"
              width={32}
              height={325}
              alt="Side Image"
              className="hidden md:block mr-4"
            />
            <div>
              {props.user.attemptedDomains.map((domain, idx) => (
                <div key={domain.id} className="mb-12">
                  <div className="flex items-center mb-2 mt-4">
                    <h4 className="text-[18px] ">
                      Questions completed in {titleCase(domain?.domain)} Domain
                    </h4>
                    <div className="w-[55px] h-[22px] border border-[#C9D1D9] rounded-full flex items-center justify-center text-[14px] ml-2 py-1 px-[1rem]">
                      Public
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileClient
