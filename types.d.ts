type Navigation = {
  id: number;
  name: string;
  icon: IconType;
  href: string;
  path: string;
  className: string;
};

type SearchQueryParams = {
  params: {
    searchQuery: string;
  };
};

type GenreIdParams = {
  searchParams: {
    genreId: number;
  };
};

type Genres = {
  id: number;
  name: string;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_name: string;
  first_air_date: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
