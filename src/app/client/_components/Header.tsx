"use client";

import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="w-screen h-10 border border-black flex flex-row items-center justify-between ">
      <div>
        <h1 className="font-bold">Gal gerel</h1>
      </div>
      <div className="flex flex-row gap-10">
        <h1>Home</h1>
        <h2>Ger</h2>
        <h3>Apartment</h3>
        <h4>Atelier</h4>
      </div>
      <div>
        <Input type="search" />
      </div>
    </div>
  );
};
