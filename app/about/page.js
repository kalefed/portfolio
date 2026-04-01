import Image from "next/image";
import Navbar from "../components/navbar";
import FadeInAnimation from "../components/FadeInAnimation";

export default function aboutMe() {
  return (
    <div className="px-14 lg:px-28">
      <Navbar />
      <section className="flex justify-center items-center">
        <FadeInAnimation>
          <header className="flex flex-col md:flex-row gap-4 mt-10">
            <div className="basis-3/6 flex flex-col gap-4">
              <h1 className="font-sans text-3xl md:text-4xl lg:text-6xl">
                Nice to meet you, I'm Kaleigh ⊹₊⟡⋆
              </h1>
              <p>
                I'm currently a Junior Full-Stack Developer at Jumping Elephants
                owning the end-to-end development and infrastructure for UX
                research tools. <br />
                <br /> I completed my Bachelor of Computing with a major in AI
                at Queen's University where I got involved with the computing
                community through my roles as a web developer on QWIC (Queen's
                Women in Computing), QWEB and COMPSA as well as a Computing
                Orientation Leader.
              </p>
              <p>
                What excites me most about Full-Stack development is bridging
                the gap between my creative and technical sides with work that
                makes a big impact.
              </p>
            </div>
            <section className="basis-3/6 ml-20">
              <Image
                src="/profileKale.png"
                width={400}
                height={400}
                alt="Clipboard with kaleigh's face"
              />
            </section>
          </header>
        </FadeInAnimation>
      </section>
    </div>
  );
}
