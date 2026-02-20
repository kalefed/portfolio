import Link from "next/link";
import Image from "next/image";
import { project_list } from "./Projects";

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
        {project_list.map((project, index) => {
          return (
            <Link
              key={index}
              href={project.href}
              className="p-4 hover:bg-neutral-100 hover:rounded-xl"
            >
              <Image
                src={project.image_path}
                width={700}
                height={200}
                alt={project.image_alt}
                className="mb-4"
              />
              <h1 className="font-source-serif text-xl">{project.name}</h1>
              <p className="text-[#aaaaaa]">{project.description}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
