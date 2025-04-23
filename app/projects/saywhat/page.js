import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl italic font-source-serif">Say What?</h1>
        <h3 className="text-base font-poppins text-center text-secondary-col">
          March 2025
        </h3>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/saywhat.png"
          width={700}
          height={200}
          alt="Say what website search bar"
          className="mb-10"
        />
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-4/6">
          <div className="row-span-1 col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>24 Hours</p>
            <div>
              <h2 className="font-bold mb-2 mt-8">Tools</h2>
              <ul>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>FastAPI</li>
                <li>Pydantic</li>
                <li>Zustand</li>
                <li>Urban Dictionary API</li>
                <li>Vader</li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 row-span-1">
            <h2 className="font-bold mb-2">Overview</h2>
            <p className="mb-2">
              “Say What?” is a web application designed to bridge the
              generational language gap by translating Gen-Z slang and internet
              jargon into more universally understandable English. Built for the
              hackHer Hackathon hosted by QWIC, the project won Best Education
              Hack for its creativity, usability, and social impact in
              facilitating intergenerational communication.
              <br />
            </p>
            <Link
              href="https://devpost.com/software/say-what-h1s9o3?ref_content=my-projects-tab&ref_feature=my_projects"
              className="underline text-[#aaaaaa]"
            >
              Devpost Link
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-4/6 mt-8">
          {/* More Info */}
          <div className="col-span-4 flex flex-col gap-2">
            <h2 className="font-bold">Development</h2>
            <p>
              I independently developed the frontend using Next.js and styled
              with Tailwind CSS for a responsive and modern UI. Motion was used
              to create engaging animations and transitions, while Zustand
              handled global state management efficiently. All visual assets and
              UI illustrations were hand-drawn by me using Procreate, giving the
              app a distinct and original aesthetic.
            </p>
            <p>
              The backend was built using FastAPI, leveraging Pydantic for data
              validation and schema enforcement. The API processed user input
              using a combination of external services:
            </p>
            <ul className="list-disc pl-8">
              <li>Urban Dictionary API to identify and define slang terms</li>
              <li>
                OpenAI API to rephrase sentences into more accessible language
              </li>
              <li>
                VADER Sentiment Analysis to retain the emotional tone of the
                original sentence
              </li>
            </ul>
          </div>

          {/* The hackathon */}
          <div className="col-span-4 flex flex-col gap-2">
            <h2 className="font-bold">Hackathon Reflections</h2>
            <p>
              This was my last hackathon before I graduated which made it extra
              special. I got to do it with some of my realy good friends I had
              made during my undergrad.
            </p>
            <Image
              src="/saywhat/friends.png"
              width={600}
              height={200}
              alt="Kaleigh and KJ"
              className="mb-10 rounded-xl"
            />
            <Image
              src="/saywhat/winners.png"
              width={600}
              height={200}
              alt="Kaleigh, KJ, Kate and Allix with Hackathon prize"
              className="mb-10 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
