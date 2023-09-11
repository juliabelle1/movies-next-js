"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function SearchMovie() {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const router = useRouter();

  const OnHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  useEffect(() => {
    if (searchTitle) {
      router.push(`${searchTitle}`);
    }
  }, [searchTitle, router]);

  return (
    <div className="pl-0 md:pl-60 pr-0 md:pr-8">
      <div className="pt-4 pb-8 md:py-8 w-full flex justify-center items-center md:justify-start">
        <div className="relative w-full mx-4 md:mx-0">
          <input
            value={searchTitle}
            onChange={OnHandleChange}
            className="w-full md:w-80 h-9 rounded-full pl-10 text-sm text-black focus:outline-none focus:border-0"
            placeholder="Search movie title"
          />
          <AiOutlineSearch className="w-7 h-7 text-inactive-text stroke-none absolute z-20 left-2 top-1.5" />
        </div>
      </div>
    </div>
  );
}
