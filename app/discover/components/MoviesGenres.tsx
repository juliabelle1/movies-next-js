import { getAllGenres } from "@/utils/AllRequests";
import Link from "next/link";
import React from "react";

export default async function MoviesGenres({ genreId }: { genreId: number }) {
  const allGenresData: Promise<Genres[]> = getAllGenres();
  const genres = await allGenresData;

  return (
    <section>
      <h2 className="font-bold pb-4 md:pb-8">Discover</h2>
      <div className="flex items-center flex-wrap">
        {genres.map((genre) => {
          return (
            <div
              key={genre.id}
              className={
                genreId == genre.id
                  ? "bg-white text-black mr-2 mb-2 w-[106px] md:w-[120px] py-1.5 rounded-full"
                  : "bg-transparent border border-white rounded-full mr-2 mb-2 w-[106px] md:w-[120px] py-1.5"
              }
            >
              <Link href={`/discover?genreId=${genre.id}`}>
                <h5 className="text-center">{genre.name}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
