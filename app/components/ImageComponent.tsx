import Image from "next/image";
import React from "react";

export default function ImageComponent({
  poster_path,
}: {
  poster_path: string;
}) {
  return (
    <>
      <Image
        priority
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt="img"
        width={500}
        height={500}
        className="min-w-full h-full object-cover rounded-md"
      />
    </>
  );
}
