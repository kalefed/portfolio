import Image from "next/image";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl italic font-source-serif">
          COMPSA Admin Panel
        </h1>
        <h3 className="text-base font-poppins text-center text-secondary-col">
          July 2023 - April 2024
        </h3>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/compsa.png"
          width={700}
          height={200}
          alt="QWIC website picture"
          className="mb-10"
        />
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-4/6">
          <div className="row-span-1 col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>4 Months</p>
            <div>
              <h2 className="font-bold mb-2 mt-8">Tools</h2>
              <ul>
                <li>Next.js</li>
                <li>Bulma CSS</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 row-span-1">
            <h2 className="font-bold mb-2">Overview</h2>
            <p>
              COMPSA's website featured pages such as events, members and job
              postings. However, exec's didn't necessarily have the expertise to
              edit the code everytime a change was needed on the website.
              <br />
              <br />
              This led to the development of an admin panel, where non-technical
              users to add, edit or delete events, team members, and
              content—automating website updates eliminating the need for club
              members to make code changes.
              <br />
            </p>
          </div>

          <div className="col-span-3 col-start-2 row-start-2">
            <h2 className="font-bold mb-2">My Role</h2>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
