import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar";

export default function TaskPage() {
  //fetch the task with taskid
  const task = {
    domain: "Tech",
    taskNo: "1",
    question:
      "The question is when not how.. If you were tasked with designing a futuristic transportation system for a city of 10 million people, where the main goal is to minimize environmental impact while maximizing efficiency and accessibility, how would you integrate various technologies like autonomous vehicles, renewable energy, AI-driven traffic management, and underground transit systems? Additionally, how would you address challenges related to urban planning, public acceptance, and the economic feasibility of such a project in both the short and long term?",
    resources: ["Resource 1: Link Address", "Resource 2: Link Address"],
    instructions: [
      " Instruction 1 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
      " Instruction 2 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
      " Instruction 3 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
    ],
  };

  return (
    <>
      <main className="flex flex-col bg-hero items-center gap-8 sm:gap-12 md:gap-16 bg-gradient-to-b from-[#111341] to-[#22294A] pb-10 my-auto min-h-[90vh]">
        <section className="px-5 sm:px-24 md:px-36 py-5 sm:py-11 bg-[#6960A0] sm:mx-16 md:mx-20 flex flex-col items-center rounded-b-3xl bg-opacity-30 gap-3 max-w-7xl">
          <h1 className="font-bold capitalize sm:text-5xl text-3xl ">
            {task.domain} Domain
          </h1>
          <div className="flex flex-col text-left gap-3 ">
            <h2 className="text-xl sm:text-3xl font-semibold">
              Task {task.taskNo}
            </h2>
            <p className="text-[#BABAC6] sm:text-base text-sm">
              {task.question}
            </p>
            <h3 className="font-bold text-lg sm:text-2xl">Resources</h3>
            <ul className="list-decimal list-inside text-[#BABAC6]">
              {task.resources.map((resource) => (
                <li key={resource}>
                  <a className="underline sm:text-base text-sm" href={resource}>
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-col items-center text-left gap-5 mx-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold ">
            Instructions
          </h3>
          <ul className="list-disc marker:text-[#675DA7] marker:text-2xlpl-2">
            {task.instructions.map((instruction) => (
              <li key={instruction} className="sm:text-base text-sm">
                {instruction}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="uppercase bg-[#9386E4] rounded-full px-8 py-2 text-[#363960] font-semibold "
          type="button"
        >
          Submit
        </button>
      </main>
      <Footer />
    </>
  );
}
