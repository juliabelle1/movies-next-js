import { getMoviesBySearching } from "@/utils/AllRequests";
import React from "react";
import ImageComponent from "../components/ImageComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Movies",
  description:
    "Millions of movies, TV shows and people to discover. Explore now.",
};

export default async function SearchMoviesList({
  params: { searchQuery },
}: SearchQueryParams) {
  const moviesBySearchingData: Promise<Movie[]> =
    getMoviesBySearching(searchQuery);
  const moviesBySearching = await moviesBySearchingData;

  return (
    <main className="pl-4 md:pl-60 pr-4 md:pr-8 w-full">
      <h2 className="font-bold mb-5">Top results</h2>
      {moviesBySearching.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 pb-12">
          {moviesBySearching.map((movie) => {
            return (
              <ImageComponent key={movie.id} poster_path={movie.poster_path} />
            );
          })}
        </div>
      ) : (
        <div className="w-full h-screen">
          <h4>No movies found with that title...</h4>
        </div>
      )}
    </main>
  );
}
