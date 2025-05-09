import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-40 xl:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl italic font-source-serif">
          The Pentagram
        </h1>
        <h3 className="text-base font-poppins text-center text-secondary-col">
          January 2023 - April 2023
        </h3>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/pentagram.png"
          width={700}
          height={200}
          alt="Pentagram video game screens"
          className="mb-10"
        />
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-5/6 lg:w-4/6">
          <div className="row-span-1 col-span-4 sm:col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>6 Months</p>
            <div className="mb-4">
              <h2 className="font-bold mt-8 mb-2">Tools</h2>
              <ul>
                <li>Procreate</li>
                <li>Unity</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-3 row-span-1">
            <h2 className="font-bold mb-2">Overview</h2>
            <p className="mb-2">
              The Pentagram is a detective game set on an old desktop computer.
              Navigate the computer to find clues and solve mysteries to
              discover what the secret organization, "The Pentagram," has been
              up to and why they've been doing it.
              <br />
              <br />
              This project was apart of my CISC226 (Video Game Design) semester
              project. My primary role was creating the art assets, I created
              all of the game’s pixel art, from the backgrounds to the icons on
              the computer where our game is set. I also collaborated to
              brainstorm the games storyline and puzzles.
            </p>
            <Link
              href="https://sampapais.itch.io/the-pentagram"
              className="underline text-[#aaaaaa]"
            >
              Play our game for free!
            </Link>
          </div>

          <div className="col-span-4 sm:col-span-3 col-start-1 sm:col-start-2 row-start-2">
            <h2 className="font-bold mb-2">My Role</h2>
            <p>Artist, Story Developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
