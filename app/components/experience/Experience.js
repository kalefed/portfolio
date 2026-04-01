import { experience_list } from "./experience_list";

export default function Experiences() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-6xl">
          My <span className="italic">experiences</span> ₊⟡⋆
        </h1>
      </header>
      {experience_list.map((experience, index) => {
        return (
          <div className="grid grid-cols-6 mb-16">
            <p className="col-span-1 text-[#898989]">{experience.date_range}</p>
            <div className="flex flex-col gap-2 col-span-5 ml-10">
              <header>
                <p className="font-source-serif text-xl">{experience.role}</p>
                <p className="text-[#898989] text-sm">{experience.company}</p>
              </header>
              <p>{experience.description}</p>
              {/* technology pills */}
              <div className="flex flex-row gap-2">
                {experience.technologies.map((tech, index) => {
                  return (
                    <p className="rounded-xl bg-[#e8e8ff] py-0.5 px-2.5 text-[#4c01a9aa] text-sm">
                      {tech}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
