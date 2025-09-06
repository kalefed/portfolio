import Image from "next/image";
import WorkingOn from "./workingOn";
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
              <h1 className="font-source-serif text-3xl md:text-4xl lg:text-6xl">
                kaleigh is a{" "}
                <span className="italic">full stack developer</span> ✩‧₊˚ with a
                background in <span className="italic">AI</span> and a love for
                art and design₊˚⊹♡ she’s into curious problems, creative
                solutions ⊹₊⟡⋆ and growing communities through tech
              </h1>
              <h2 className="font-inter text-sm md:text-lg lg:text-xl mt-10 w-1/2 lg:w-4/6 xl:w-1/2">
                Currently a Junior Software Developer at Jumping Elephants,
                building a book statistics visualizer and reading a fantasy book
                in her free time!
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
