import { getTopRatedMovies } from "@/utils/AllRequests";
import React from "react";
import ImageComponent from "./ImageComponent";

export default async function TrenTopRatedMoviesdingMovies() {
  const topRatedData: Promise<Movie[]> = getTopRatedMovies();
  const topRated = await topRatedData;

  return (
    <section>
      <h2 className="font-bold mb-6">Top rated</h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 pb-12">
        {topRated.slice(0, 5).map((item) => {
          return (
            <div key={item.id}>
              <ImageComponent poster_path={item.poster_path} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
