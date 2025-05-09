import Link from "next/link";
import Image from "next/image";

export default function WorkingOn() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-source-serif text-3xl md:text-4xl lg:text-6xl">
          what I've been <span className="italic">working</span> on ₊⟡⋆
        </h1>
        <h3 className="font-inter text-sm md:text-lg lg:text-xl pl-2 pt-5">
          click on a project to learn more
        </h3>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        <Link
          href="/projects/onmyshelf"
          className="p-4 hover:bg-neutral-100 hover:rounded-xl"
        >
          <Image
            src="/onmyshelf_thumbnail.png"
            width={700}
            height={200}
            alt="Purple and blue gradient background with an image of a book on top."
            className="mb-4"
          />
          <h1 className="font-source-serif text-xl">On My Shelf — 2025</h1>
          <p className="text-[#aaaaaa]">
            View and track your reading statistics
          </p>
        </Link>
        <Link
          href="/projects/saywhat"
          className="p-4 hover:bg-neutral-100 hover:rounded-xl"
        >
          <Image
            src="/saywhat_thumbnail.png"
            width={700}
            height={200}
            alt="QWIC website picture"
            className="mb-4"
          />
          <h1 className="font-source-serif text-xl">Say What — 2025</h1>
          <p className="text-[#aaaaaa]">
            Project for Queen's HackHer (Won Best Education Hack)
          </p>
        </Link>
        <Link
          href="/projects/qwic"
          className="p-4 hover:bg-neutral-100 hover:rounded-xl"
        >
          <Image
            src="/qwic_thumbnail.png"
            width={700}
            height={200}
            alt="QWIC website picture"
            className="mb-4"
          />
          <h1 className="font-source-serif text-xl">
            Queen's Women in Computing — 2024
          </h1>
          <p className="text-[#aaaaaa]">Full Stack development, QWIC website</p>
        </Link>
        <Link
          href="/projects/compsa"
          className="p-4 hover:bg-neutral-100 hover:rounded-xl"
        >
          <Image
            src="/compsa_thumbnail.png"
            width={700}
            height={200}
            alt="COMPSA admin panel"
            className="mb-4"
          />
          <h1 className="font-source-serif text-xl">
            Queen's Computing Students' Association — 2024
          </h1>
          <p className="text-[#aaaaaa]">Frontend Developer, Admin Panel</p>
        </Link>
        <Link
          href="/projects/pentagram"
          className="p-4 hover:bg-neutral-100 hover:rounded-xl"
        >
          <Image
            src="/pentagram_thumbnail.png"
            width={700}
            height={200}
            alt="QWIC website picture"
            className="mb-4"
          />
          <h1 className="font-source-serif text-xl">The Pentagram</h1>
          <p className="text-[#aaaaaa]">Artist & Story Developer</p>
        </Link>
      </section>
    </div>
  );
}
