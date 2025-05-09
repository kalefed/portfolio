import FadeInAnimation from "../components/FadeInAnimation";
import Link from "next/link";
import Image from "next/image";

export default function ProjectLayout({ children }) {
  return (
    <FadeInAnimation>
      <div className="my-4 sm:mx-20 md:mx-40 xl:mx-72">
        <Link href="/" className="flex flex-row gap-2 items-center">
          <Image src="/backArrow.svg" width={20} height={20} alt="Back arrow" />
          <p className="hover:underline">Go back home</p>
        </Link>
      </div>
      {children}
    </FadeInAnimation>
  );
}
