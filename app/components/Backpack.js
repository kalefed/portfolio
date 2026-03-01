"use client";

import Image from "next/image";

export default function BackpackReveal() {
  return (
    <div className="relative group w-fit">
      {/* Backpack */}
      <div className="cursor-pointer z-10 relative">
        <div className="relative w-[250px] h-[200px]">
          <Image
            src="/loot/bag.png"
            alt="Backpack"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-center text-sm">
          the loot i'd drop <br /> in a video game
        </p>
      </div>

      {/* Book */}
      <div
        className="
          absolute pointer-events-none
          transition-all duration-200 ease-out
          opacity-0 scale-50
          -translate-x-[90px] -translate-y-[100px]
          group-hover:-translate-x-[120px] group-hover:-translate-y-[270px]
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        <div className="relative w-[220px] h-[220px]">
          <Image
            src="/loot/book.png"
            alt="Book"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Music */}
      <div
        className="
          absolute pointer-events-none
          transition-all duration-200 ease-out
          opacity-0 scale-50
          -translate-x-[10px] -translate-y-[120px]
          group-hover:translate-x-[170px] group-hover:-translate-y-[100px]
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        <div className="relative w-[150px] h-[150px] rotate-6">
          <Image
            src="/loot/music.png"
            alt="Music"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Coffee */}
      <div
        className="
          absolute pointer-events-none
          transition-all duration-200 ease-out
          opacity-0 scale-50
          -translate-x-[10px] -translate-y-[200px]
          group-hover:translate-x-[150px] group-hover:-translate-y-[300px]
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        <div className="relative w-[200px] h-[200px]">
          <Image
            src="/loot/coffee.png"
            alt="Coffee"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Sketch */}
      <div
        className="
          absolute pointer-events-none
          transition-all duration-200 ease-out
          opacity-0 scale-50 -rotate-6
          -translate-x-[10px] -translate-y-[170px]
          group-hover:-translate-x-[100px] group-hover:-translate-y-[100px]
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        <div className="relative w-[170px] h-[200px]">
          <Image
            src="/loot/sketch.png"
            alt="Sketch"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
