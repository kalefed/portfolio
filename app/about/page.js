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
              <h1 className="font-source-serif text-3xl md:text-4xl lg:text-6xl">
                Nice to meet you, I'm Kaleigh ⊹₊⟡⋆
              </h1>
              <p>
                I'm Kaleigh Feder, a Junior Software Developer at Jumping
                Elephants. I have a Computing degree, with a major in AI from
                Queen's University and am currently located in Kitchener. I've
                previously interned at Statistics Canada and the Canada Revenue
                Agency.
              </p>
              <p>
                What excites me about Full Stack development is bridging the gap
                between my creative and technical sides with work that makes a
                big impact.
              </p>
            </div>
            <section className="basis-3/6">
              <Image
                src="/profileKale.png"
                width={500}
                height={500}
                alt="Clipboard with kaleigh's face"
              />
            </section>
          </header>
        </FadeInAnimation>
      </section>
    </div>
  );
}
