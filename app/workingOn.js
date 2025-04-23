import Link from "next/link";
import Image from "next/image";

export default function WorkingOn() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-source-serif text-6xl italic">
          What I've been working on
        </h1>
      </header>
      <section className="grid grid-cols-2 gap-10">
        <Link href="/projects/qwic">
          <Image
            src="/qwic_thumbnail.png"
            width={700}
            height={200}
            alt="QWIC website picture"
            className="mb-4"
          />
          <h1 className="font-source-serif text-xl font-bold">
            Queen's Women in Computing
          </h1>
          <p className="text-[#aaaaaa]">
            Full Stack development for Queen's Women in Computing
          </p>
        </Link>
        {/* <Link href="/projects/qwic">
          <div className="border rounded-xl w-full p-4">
            <h1 className="font-source-serif text-2xl font-bold">
              Internal metadata search engine
            </h1>
            <p>✰ Next.js, Pydantic, FastAPI</p>
            <p>✰ Statistics Canada</p>
          </div>
        </Link>

        <div className="border rounded-xl w-full p-4">
          <h1 className="font-source-serif text-2xl font-bold">
            Data validator platform
          </h1>
          <p>✰ Next.js, Pydantic, FastAPIr</p>
          <p>✰ Statistics Canada</p>
        </div>
        <div className="border rounded-xl w-full p-4">
          <h1 className="font-source-serif text-2xl font-bold">
            Making slang-heavy sentences more understandable
          </h1>
          <p>✰ Next.js, Pydantic, FastAPIr</p>
          <p>✰ Best Education Hack Winner</p>
        </div>

        <Link href="/projects/qwic">
          <Image
            src="/qwic_thumbnail.png"
            width={700}
            height={200}
            alt="QWIC website picture"
            className="mb-10"
          />
          <div className="border rounded-xl w-full p-4">
            <h1 className="font-source-serif text-2xl font-bold">
              Connecting with women and gender minorities in computing
            </h1>
            <p>✰ Next.js, Tailwind CSS, Vercel</p>
            <p>✰ QWIC Web Developer </p>
          </div>
        </Link>

        <div className="border rounded-xl w-full p-4">
          <h1 className="font-source-serif text-2xl font-bold">
            Visualize and track your reading data
          </h1>
          <p>✰ Next.js, CSS, PostgreSQL, SQLAlchemy, Docker</p>
        </div>
        <div className="border rounded-xl w-full p-4">
          <h1 className="font-source-serif text-2xl font-bold">
            Club admin panel
          </h1>
          <p>✰ Next.js, Bulma CSS, Docker</p>
        </div> */}
      </section>
    </div>
  );
}
