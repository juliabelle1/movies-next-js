import NowPlayingMovies from "./components/NowPlayingMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import TrendingMovies from "./components/TrendingMovies";

export default async function Home() {
  return (
    <main className="pl-4 md:pl-60 pr-4 w-full">
      <TrendingMovies />
      <NowPlayingMovies />
      <TopRatedMovies />
    </main>
  );
}
