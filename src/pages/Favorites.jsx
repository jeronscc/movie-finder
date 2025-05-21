import { useState } from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Favorites() {
  const { favorites } = useMovieContext();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            />
          ))}
        </div>
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>Your Favorites List is Empty</h2>
      <p>
        Browse movies and click the ‪‪❤︎‬ icon to add them here. Start building
        your watchlist!
      </p>
    </div>
  );
}

export default Favorites;
