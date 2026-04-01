import Link from "next/link";
import Image from "next/image";
import { project_list } from "./Projects";

export default function WorkingOn() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-6xl">
          what I've been <span className="italic">working</span> on ₊⟡⋆
        </h1>
      </header>
      <section className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
        {project_list.map((project, index) => {
          return (
            <Link
              key={index}
              href={project.href}
              className="p-4 hover:bg-neutral-100 hover:rounded-xl flex flex-col items-center"
            >
              <div className="w-full mb-4">
                <Image
                  src={project.image_path}
                  width={700}
                  height={200}
                  alt={project.image_alt}
                  className="w-full h-auto rounded-lg object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col items-start w-full">
                <h1 className="font-source-serif text-xl">{project.name}</h1>
                <p className="text-[#aaaaaa]">{project.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
