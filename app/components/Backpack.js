"use client";

import Image from "next/image";

export default function BackpackReveal() {
  return (
    <div className="relative group">
      {/* Backpack */}
      <div className="cursor-pointer z-10 relative">
        <Image src="/loot/bag.png" alt="Backpack" width={200} height={150} />
        <p className="text-center text-sm">
          the loot i'd drop <br /> in a video game
        </p>
      </div>

      {/* Items Reveal on Hover */}
      <div
        className={`
            absolute transition-transform duration-200 ease-out
            transform opacity-0 scale-50
            translate-x-[-90px] translate-y-[-100px]
            group-hover:translate-x-[-120px] group-hover:translate-y-[-250px]
            group-hover:opacity-100 group-hover:scale-100
          `}
      >
        <Image src="/loot/book.png" alt="Book" width={220} height={220} />
      </div>

      <div
        className={`absolute transition-all duration-200 ease-out opacity-0 transform scale-50 translate-x-[-10px] translate-y-[-120px] group-hover:translate-x-[150px] group-hover:translate-y-[-100px] group-hover:opacity-100 group-hover:scale-100`}
      >
        <Image
          src="/loot/music.png"
          alt="Music"
          width={150}
          height={150}
          className="rotate-6"
        />
      </div>

      <div
        className={`absolute transition-all duration-200 ease-out opacity-0 transform scale-50 translate-x-[-10px] translate-y-[-200px] group-hover:translate-x-[150px] group-hover:translate-y-[-300px] group-hover:opacity-100 group-hover:scale-100`}
      >
        <Image src="/loot/coffee.png" alt="Coffee" width={200} height={200} />
      </div>

      <div
        className={`absolute transition-all duration-200 ease-out opacity-0 transform scale-50 -rotate-6 translate-x-[-10px] translate-y-[-170px] group-hover:translate-x-[-200px] group-hover:translate-y-[-120px] group-hover:opacity-100 group-hover:scale-100`}
      >
        <Image src="/loot/sketch.png" alt="Sketch" width={170} height={200} />
      </div>
    </div>
  );
}
