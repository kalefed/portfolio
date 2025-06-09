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
          On My Shelf
        </h1>
        <h3 className="text-base font-poppins text-center text-secondary-col">
          April 2025 - Present
        </h3>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/onmyshelf_thumbnail.jpg"
          width={700}
          height={200}
          alt="Gradient background with a book"
          className="mb-10"
        />
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-5/6 lg:w-4/6">
          <div className="row-span-1 col-span-4 sm:col-span-1">
            <h3 className="font-bold mb-2">Timeline</h3>
            <p>Current</p>
            <div className="mb-4">
              <h3 className="font-bold mt-8 mb-2">Tools</h3>
              <ul>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TanStack Query</li>
                <li>PostgreSQL</li>
                <li>Flask</li>
                <li>SQLAlchemy</li>
                <li>Docker</li>
                <li>Pytest</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-3 row-span-1">
            <h3 className="font-bold mb-2">Overview</h3>
            <p className="mb-4">
              A full-stack book tracking web app, providing data-driven insights
              into reading habits through graphs and visuals
            </p>
            <Link
              href="https://github.com/kalefed/onmyshelf"
              className="underline text-[#aaaaaa]"
            >
              Follow my progress on GitHub!
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-8 w-5/6 lg:w-4/6 mt-10">
          <div className="col-span-4">
            <h2 className="text-lg md:text-xl lg:text-2xl italic font-medium not-even:font-source-serif mb-2">
              Problem & Motivation
            </h2>
            <p>
              I've loved using various book trackers like Goodreads, Fable and
              Storygraph but I found myself wanting a place to see detailed
              statistics on my reading. For example, how much money have I saved
              by going to the library? Or insights into the diversity of my
              shelf.
            </p>
            <p className="my-4">
              So, I wanted to create something to solve this problem, and focus
              on strengthening my full stack development skills. And that's how
              "On My Shelf" was born!
            </p>
          </div>
          <div className="col-span-4">
            <h2 className="text-lg md:text-xl lg:text-2xl italic font-medium font-source-serif mb-2">
              Architecture
            </h2>
            <p>
              The frontend is a next.js app that communicates with the Flask
              backend and the database is PostgreSQL.
            </p>
            <Image
              src="/c4diagram.png"
              width={700}
              height={200}
              alt="C4 diagram with level one and two"
              className="mb-10"
            />
          </div>
          <div className="col-span-4">
            <h2 className="text-lg md:text-xl lg:text-2xl italic font-medium font-source-serif mb-2">
              Database Modeling
            </h2>
            <h3 className="font-bold mt-8 mb-2">ER Diagram</h3>
            <Image
              src="/erDiagram.png"
              width={800}
              height={300}
              alt="ER diagram for a book tracker application"
              className="mb-10"
            />
          </div>
          {/* <div className="col-span-4">
            <h2 className="text-lg md:text-xl lg:text-2xl italic font-medium font-source-serif mb-2">
              Implementation
            </h2>
            <h3 className="font-bold mt-8 mb-2">Frontend</h3>
            <h3 className="font-bold mt-8 mb-2">Backend</h3>
            <h3 className="font-bold mt-8 mb-2">DevOps & Testing</h3>
            <p>
              For manual testing, I used Postman for every API endpoint and
              wrote unit tests using{" "}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
