import Image from "next/image";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/tasks-page/profile-card";
import TaskCard, {
  type taskCardProps,
} from "@/components/tasks-page/task-cark";

import GitIcon from "public/giticon.webp";
import PartyPopper from "public/party-popper.svg";

const generalInstructions = [
  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
];
export default function TasksPage() {
  //fetch Tasks on this array
  const tasks: taskCardProps[] = [
    {
      name: "E-commerce website",
      subtitle: "something something something",
      domain: "Tech",
      deadline: new Date(),
      description:
        "make amazon but it should look like flipkart but it actually is ebay or sum and also allow everything like silk road",
    },
    {
      name: "E-commerce website",
      subtitle: "something something something",
      domain: "Tech",
      deadline: new Date(),
      isCompleted: true,
      description:
        "make amazon but it should look like flipkart but it actually is ebay or sum and also allow everything like silk road",
    },
    {
      name: "E-commerce website",
      subtitle: "something something something",
      domain: "Tech",
      deadline: new Date(),
      isCompleted: false,
      description:
        "make amazon but it should look like flipkart but it actually is ebay or sum and also allow everything like silk road",
    },
  ];

  return (
    <>
      <main className="flex sm:flex-row flex-col gap-20 m-6 justify-center">
        <ProfileCard
          name="YEEZUS"
          image={GitIcon}
          regno="23bds0338"
          domains={["Tech", "Design"]}
        />

        <section className="flex flex-col sm:gap-12 gap-4">
          <div>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-4">
              General Instructions
            </h2>
            <ol className="list-decimal list-inside ml-2 sm:ml-4 md:ml-8">
              {generalInstructions.map((instruction) => {
                return (
                  <li key={instruction} className="pb-1 font-light">
                    {instruction}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="border-t-4 border-[#30363D]">
            {tasks.map((task) => (
              <TaskCard key={task.name} {...task} />
            ))}
          </div>

          <div className="flex items-center flex-col gap-2 mt-8">
            <Image
              src={PartyPopper}
              alt="Party Popper"
              className="w-[72px] sm:w-[144px]"
            />
            <span className="text-xl sm:text-2xl font-medium">
              Happy Tasking!
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
