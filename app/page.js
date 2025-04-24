import Image from "next/image";
import WorkingOn from "./workingOn";
import Navbar from "./components/navbar";
import GrainBackground from "./components/GrainBg";

export default function Home() {
  return (
    <>
      <div className="px-28 relative bg-[#e8e8ff] overflow-hidden">
        <GrainBackground />
        <div className="relative z-10">
          <Navbar />
          <div className="py-40">
            <h1 className="font-source-serif text-6xl">
              kaleigh is a <span className="italic">full stack developer</span>{" "}
              ✩‧₊˚ with a background in <span className="italic">AI</span> and a
              love for art and design₊˚⊹♡ she’s into curious problems, creative
              solutions ⊹₊⟡⋆ and growing communities through tech
            </h1>
            <h2 className="font-inter text-xl mt-10">
              Currently searching for new grad dev roles, building a book
              statistics visualizer and reading a fantasy book in her free time!
            </h2>
          </div>
        </div>
      </div>
      <section className="my-10 px-28">
        <WorkingOn />
      </section>
    </>
  );
}
