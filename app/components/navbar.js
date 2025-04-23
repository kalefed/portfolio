import Link from "next/link";
export default function Navbar() {
  return (
    <div className="font-inter flex justify-between mx-28 my-10">
      <p>kale</p>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Resume</Link>
      </div>
    </div>
  );
}
