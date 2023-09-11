import React from "react";
import ImageComponent from "../../components/ImageComponent";
import { getMoviesByGenre } from "@/utils/AllRequests";

export default async function MoviesListByGenre({
  genreId,
}: {
  genreId: number;
}) {
  const moviesByGenreIdData: Promise<Movie[]> = getMoviesByGenre(genreId);
  const moviesByGenre = await moviesByGenreIdData;

  return (
    <section className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 pt-4 md:pt-12">
      {moviesByGenre.map((movie) => {
        return (
          <ImageComponent key={movie.id} poster_path={movie.poster_path} />
        );
      })}
    </section>
  );
}
