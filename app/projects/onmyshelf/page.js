import Image from "next/image";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl italic font-source-serif">On My Shelf</h1>
        <h3 className="text-base font-poppins text-center text-secondary-col">
          April 2025 - Present
        </h3>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        {/* <Image
          src="/qwic.png"
          width={700}
          height={200}
          alt="QWIC website picture"
          className="mb-10"
        /> */}
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-4/6">
          <div className="row-span-1 col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>Current</p>
            <div>
              <h2 className="font-bold mb-2 mt-8">Tools</h2>
              <ul>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>PostgreSQL</li>
                <li>SQLAlchemy</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 row-span-1">
            <h2 className="font-bold mb-2">Overview</h2>
            <p>
              I've loved using various book trackers like Goodreads, Fable and
              Storygraph but I found myself wanting a place to see detailed
              statistics on my reading. For example, how much money have I saved
              by going to the library? Or insights into the diversity of my
              shelf.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-4/6 mt-8">
          <div className="col-span-4 flex flex-col gap-2">
            <h2 className="font-bold text-lg">Designing the backend</h2>
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <h2 className="font-bold text-lg">Designing the frontend</h2>
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <h2 className="font-bold text-lg">Results</h2>
          </div>
        </div> */}
      </div>
    </section>
  );
}
