import WorkingOn from "./components/working_on/workingOn";
import Experiences from "./components/experience/Experience";
import Navbar from "./components/navbar";
import GrainBackground from "./components/GrainBg";
import BackpackReveal from "./components/Backpack";
import FadeInAnimation from "./components/FadeInAnimation";

export default function Home() {
  return (
    <>
      <div className="px-14 lg:px-28 relative bg-[#e8e8ff] overflow-hidden">
        <GrainBackground />

        {/* Hero Section */}
        <div className="relative z-10">
          <Navbar />

          <div className="mt-40 mb-40 lg:grid lg:grid-cols-[1.6fr_0.6fr] lg:items-center lg:gap-16">
            {/* LEFT COLUMN — Text */}
            <FadeInAnimation>
              <div>
                <h1 className="font-sans text-3xl md:text-4xl lg:text-6xl max-w-3xl">
                  Full-stack developer ⊹₊⟡⋆ working across frontend, backend and
                  infrastructure ✩‧₊˚ she's into curious problems, creative
                  solutions ⊹₊⟡⋆ and growing communities through tech ₊˚⊹♡
                </h1>

                <h2 className="font-sans text-sm md:text-lg lg:text-xl mt-10 max-w-xl">
                  Hi, I'm Kaleigh! I am currently solo developing UX research
                  tools @ <span className="italic">Jumping Elephants</span>
                </h2>
              </div>
            </FadeInAnimation>

            {/* RIGHT COLUMN — Backpack (Hidden on Mobile) */}
            <div className="hidden lg:flex justify-end">
              <FadeInAnimation>
                <BackpackReveal />
              </FadeInAnimation>
            </div>
          </div>
        </div>
      </div>

      <section className="my-10 px-14 lg:px-28">
        <Experiences />
      </section>

      <section className="my-10 px-14 lg:px-28">
        <WorkingOn />
      </section>
    </>
  );
}
