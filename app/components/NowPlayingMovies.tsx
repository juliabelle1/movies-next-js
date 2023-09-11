import { getNowPlayingMovies } from "@/utils/AllRequests";
import React from "react";
import ImageComponent from "./ImageComponent";
import NowPlayingMoviesHover from "./NowPlayingMoviesHover";

export default async function NowPlayingMovies() {
  const nowPlayingMoviesData: Promise<Movie[]> = getNowPlayingMovies();
  const nowPlayingMovies = await nowPlayingMoviesData;

  return (
    <section>
      <h2 className="font-bold mb-6">Now playing</h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 pb-12">
        {nowPlayingMovies.slice(0, 5).map((item) => {
          return (
            <div key={item.id} className="relative">
              <div className="flex flex-wrap content-center rounded-md relative">
                <ImageComponent poster_path={item.poster_path} />
              </div>
              <NowPlayingMoviesHover release_date={item.release_date} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
