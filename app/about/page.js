import Image from "next/image";

export default function aboutMe() {
  return (
    <div className="mx-28">
      <section className="flex justify-center items-center">
        <header className="flex flex-row">
          <div className="basis-3/6 flex flex-col gap-4">
            <h1 className="font-source-serif text-4xl italic">
              Design-driven developer crafting thoughtful, full-stack solutions
            </h1>
            <p>
              I'm Kaleigh Feder, a CS (focus in AI) new grad from Queen's
              University located in Kitchener. I've previously interned at
              Statistics Canada and the Canada Revenue Agency. I'm looking for
              Full Stack development opportunities.
            </p>
            <p>
              What excites me about Full Stack development is bridging the gap
              between my creative and technical sides. Currently, I'm on the
              hunt for new grad developer opportunities.
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
      </section>
    </div>
  );
}
