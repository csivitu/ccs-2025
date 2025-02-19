import { getUserStats } from "../../../actions/domains";
import { redirect } from "next/navigation";
import ProfileClient from "./profile";

const Profile = async () => {
  const response = await getUserStats();
  if (!response || !response.success || !response.data) {
    redirect("/");
  }

  return <ProfileClient user={response.data} />;
};

export default Profile;
