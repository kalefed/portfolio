import Image from "next/image";
import WorkingOn from "./workingOn";

export default function Home() {
  return (
    <div className="mx-28 relative">
      <div className="grid grid-cols-7 gap-4 h-lvh">
        <header className="col-span-4 flex flex-col justify-center gap-4">
          <h1 className="font-inter text-2xl">Hi there, I'm</h1>
          <h1 className="font-source-serif text-7xl italic">Kaleigh Feder</h1>
          <h2 className="font-inter text-2xl">
            A design-driven Full Stack Developer based in Kitchener, ON. My
            focus is on creating user-centered software that drives meaningful
            change.
          </h2>
        </header>
        <Image
          className="col-span-3 rotate-6"
          src="/profiledrawn.png"
          width={700}
          height={700}
          alt="clipboard with kaleigh feder's image"
        />
      </div>

      <section>
        <WorkingOn />
      </section>
    </div>
  );
}
