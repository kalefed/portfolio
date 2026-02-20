import Image from "next/image";
import WorkingOn from "./components/working_on/workingOn";
import Navbar from "./components/navbar";
import GrainBackground from "./components/GrainBg";
import BackpackReveal from "./components/Backpack";
import FadeInAnimation from "./components/FadeInAnimation";

export default function Home() {
  return (
    <>
      <div className="px-14 lg:px-28 relative bg-[#e8e8ff] overflow-hidden h-fit">
        <GrainBackground />
        <div className="relative z-10">
          <Navbar />
          <FadeInAnimation>
            <div className="mt-40 mb-50">
              <h1 className="font-sans text-3xl md:text-4xl lg:text-6xl w-3/4">
                Full-stack developer ⊹₊⟡⋆ who enjoys the details of
                infrastructure & backend development and the creativity of frontend work
                {/* 
                Full-stack developer ⊹₊⟡⋆ who finds balance between robust
                systems and thoughtful interfaces */}
              </h1>
              <h2 className="font-sans text-sm md:text-lg lg:text-xl mt-10 w-1/2 lg:w-4/6 xl:w-1/2">
                Hi, I'm Kaleigh, a full-stack developer currently doing
                end-to-end developement @ Jumping Elephants
              </h2>
            </div>
          </FadeInAnimation>
        </div>
        <div className="absolute lg:bottom-17 lg:right-40 xl:bottom-20 xl:right-40 xl:mb-0">
          <FadeInAnimation>
            <BackpackReveal />
          </FadeInAnimation>
        </div>
      </div>
      <section className="my-10 px-14 lg:px-28">
        <WorkingOn />
      </section>
    </>
  );
}
