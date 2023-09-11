const API_KEY = process.env.NEXT_THE_MOVIE_DB_API_KEY;
const BASE_URL = process.env.NEXT_BASE_URL;

export const getMoviesBySearching = async (searchQuery: string) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
  );
  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();
  return data.results;
};

export const getTrendingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();
  return data.results;
};

export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();
  return data.results;
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();
  return data.results;
};

export const getAllGenres = async () => {
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();
  return data.genres;
};

export const getMoviesByGenre = async (genreId: number) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();
  return data.results;
};
