import React from "react";
import "../css/MovieModal.css";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const {
    title,
    overview,
    backdrop_path,
    release_date,
    vote_average,
    original_language,
    genre_ids,
  } = movie;

  const year = release_date?.split("-")[0] || "N/A";
  const rating = vote_average ? vote_average.toFixed(1) : "N/A";
  const language = original_language?.toUpperCase();

  const genreList =
    genre_ids && genre_ids.length > 0 ? genreMap[genre_ids[0]] || "N/A" : "N/A";

  return (
    <div className="movie-modal-overlay" onClick={onClose}>
      <div
        className="movie-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-details">
          <h1>{title}</h1>
          <p className="meta">
            {year} • {language} • {rating}/10 • {genreList}
          </p>
          <p className="overview">{overview}</p>
          <button className="watch-btn">▶ Watch Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
