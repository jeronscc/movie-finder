const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
export const getMovieTrailerKey = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  // Look for a video that is on YouTube and is a "Trailer"
  const trailer = data.results.find(
    (vid) => vid.site === "YouTube" && vid.type === "Trailer"
  );

  // Fallback to first video key if no "Trailer" found
  return trailer ? trailer.key : data.results[0]?.key || null;
};