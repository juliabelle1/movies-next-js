import { getTrendingMovies } from "@/utils/AllRequests";
import React from "react";
import TrendingMoviesTitle from "./TrendingMoviesTitle";
import Image from "next/image";

export default async function TrendingMovies() {
  const trendingMoviesData: Promise<Movie[]> = getTrendingMovies();
  const trendingMovies = await trendingMoviesData;

  return (
    <section>
      <h2 className="font-bold mb-5">Trending</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 pb-12">
        {trendingMovies.slice(0, 2).map((item) => {
          return (
            <div key={item.id} className="relative">
              <Image
                priority
                src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${item.backdrop_path}`}
                alt="img"
                width={500}
                height={500}
                className="min-w-full h-full object-cover rounded-md"
              />
              <TrendingMoviesTitle item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
