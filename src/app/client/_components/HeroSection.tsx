"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <Image src="/bg.png" alt="Background" fill className="object-cover" />
    </div>
  );
};
