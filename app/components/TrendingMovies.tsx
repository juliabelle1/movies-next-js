import { getTrendingMovies } from "@/utils/AllRequests";
import React from "react";
import ImageComponent from "./ImageComponent";
import TrendingMoviesTitle from "./TrendingMoviesTitle";

export default async function TrendingMovies() {
  const trendingMoviesData: Promise<Movie[]> = getTrendingMovies();
  const trendingMovies = await trendingMoviesData;

  return (
    <section>
      <h2 className="font-bold mb-5">Trending</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 pb-12">
        {trendingMovies.slice(0, 4).map((item) => {
          return (
            <div key={item.id} className="relative">
              <ImageComponent poster_path={item.poster_path} />
              <TrendingMoviesTitle item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
