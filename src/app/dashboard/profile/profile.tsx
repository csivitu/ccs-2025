"use client";

import { useState } from "react";
import Image from "next/image";
import type { UserStats } from "../../actions/domains";
import { titleCase } from "@/lib/utils";
import { updateProfile } from "@/app/actions/profile";
import { Gender } from "@prisma/client";

interface ProfileClientProps {
  user: UserStats;
}

const ProfileClient = (props: ProfileClientProps) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: props.user.name,
    aboutUs: props.user.aboutUs || "",
    gender: props.user.gender || undefined,
    phoneNumber: props.user.phoneNumber || "",
    portfolios: props.user.portfolios || [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await updateProfile(props.user.id, formData);
    if (result.success) {
      setIsEditing(false);
      // You might want to refresh the page or update the UI here
    }
  };

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
            className="w-[296px] h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
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
            className="w-[296px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-[18px] mb-2">
            Gender
          </label>
          <select
            id="gender"
            value={formData.gender || ""}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value as Gender })
            }
            className="w-[296px] h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
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
            className="w-[296px] h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] px-3"
          />
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className="w-[145px] h-[32px] bg-[#238636] border border-[#F0F6FC] border-opacity-10 rounded-[6px] text-[14px] hover:bg-[#2ea043]"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="w-[145px] h-[32px] bg-[#21262D] border border-[#F0F6FC] border-opacity-10 rounded-[6px] text-[14px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container mx-auto py-8 px-4 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
        <div className="col-span-1 md:col-span-3 flex flex-col items-center">
          <div className="mb-4 w-[290px] h-[290px] overflow-hidden">
            <Image
              src="/profile.webp"
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
          <h2 className="text-[20px] font-semibold self-start mx-12">
            Achievements
          </h2>
          <div className="self-start my-2 mx-12">
            <Image
              src="/badge.webp"
              alt="Achievement Badge"
              width={70}
              height={70}
            />
          </div>
          <div className="w-[120px] h-[25px] border border-[#3FB950] text-[#3FB950] text-[15px] text-center rounded-full flex items-center justify-center self-start mx-12">
            You chose CSI
          </div>
          <div className="w-[302px] h-[1px] bg-[#30363D] my-4" />
          <h2 className="text-[20px] font-semibold self-start mx-12">
            Organizations
          </h2>
          <div className="w-[71px] h-[71px] self-start my-2 mx-12">
            <Image
              src="/org.webp"
              alt="Organization Logo"
              width={71}
              height={71}
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 text-left overflow-x-auto">
          <div className="flex items-center justify-between w-[867px] mb-4">
            <h2 className="text-[20px] font-semibold">
              42 contributions in the last year
            </h2>
            <div className="flex items-center">
              <span className="text-[18px]">Contribution settings</span>
              <div className="w-[8px] h-[4px] bg-[#8B949E] ml-2 mr-2" />
            </div>
          </div>
          <div className="mb-6">
            <Image
              src="/contri.webp"
              width={878}
              height={162}
              alt="Contribution Chart"
              className="rounded-t-[10px]"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-[20px] font-semibold">Contribution activity</h3>
            <div className="flex items-center mt-1">
              <span className="text-[18px]">{formattedDate}</span>
              <div className="w-[461px] h-[3px] bg-[#30363D] ml-2" />
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
                    <div className="w-[55px] h-[22px] border border-[#C9D1D9] rounded-full flex items-center justify-center text-[14px] ml-2">
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
  );
};

export default ProfileClient;
