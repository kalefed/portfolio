import Image from "next/image";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-40 xl:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl italic font-source-serif">
          Queen's Women in Computing Website
        </h1>
        <h3 className="text-base font-poppins text-center text-secondary-col">
          May 2024 - April 2025
        </h3>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/qwic.png"
          width={700}
          height={200}
          alt="QWIC website picture"
          className="mb-10 w-5/6 lg:w-4/6"
          loading="eager"
        />
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-5/6 lg:w-4/6">
          <div className="row-span-1 col-span-4 sm:col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>12 Months</p>
            <div className="mb-4">
              <h2 className="font-bold mt-8 mb-2">Tools</h2>
              <ul>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-3 row-span-1">
            <h2 className="font-bold mb-2">Overview</h2>
            <p className="mb-2">
              I led a team of three developers using Agile methodologies to
              build QWIC’s website. QWIC's original website was built using HTML
              so the goal was to rebrand the website in a way that still fit the
              current design identity, and use more modern technologies.
              <br />
              <br />
              As part of the redesign process, I crafted the visual style, user
              experience, and mobile/web designs using Figma. I met with club
              exec's to gather requirements for each page, and iteratively
              presented designs for feedback. <br />
              <br />
              I developed the home page, sponsorships, mentorship and the
              contact us pages using Next.js and Tailwind CSS and deploying the
              website on Vercel.
              <br />
              <br />I provided 1:1 mentorship to web developers, holding
              bi-weekly scrum meetings for task planning. Additionally I created
              a development guide to support the team, ensuring consistency in
              development practices.
            </p>
          </div>

          <div className="col-span-4 sm:col-span-3 col-start-1 sm:col-start-2 row-start-2">
            <h2 className="font-bold mb-2">My Role</h2>
            <p>Team Lead, Mentor, Full-Stack Developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
