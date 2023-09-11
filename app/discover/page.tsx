import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import MoviesGenres from "./components/MoviesGenres";
import MoviesListByGenre from "./components/MoviesListByGenre";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Movies",
  description:
    "Millions of movies, TV shows and people to discover. Explore now.",
};
export default async function Discover({ searchParams: { genreId } }: Params) {
  return (
    <main className="pl-4 md:pl-60 pr-4 w-full">
      <MoviesGenres genreId={genreId} />
      <MoviesListByGenre genreId={genreId} />
    </main>
  );
}
