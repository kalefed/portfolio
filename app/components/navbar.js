import Link from "next/link";
export default function Navbar() {
  return (
    <div className="font-inter flex justify-between py-10">
      <p>kale</p>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <a href="mailto:kaleighfeder@gmail.com" className="hover:underline">
          Contact Me
        </a>
      </div>
    </div>
  );
}
