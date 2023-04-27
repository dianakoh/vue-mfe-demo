import { useEffect, useState } from "react";
import { Movie2 } from "../types/movie";
import MovieDetailData from "../mock/movie-detail.json";
import "./MovieDetail.scss";
import axios from "axios";

interface MovieDetailProps {
  id: number;
}

function MovieDetail2({ id }: MovieDetailProps) {
  const [movie, setMovie] = useState<Movie2 | null>(null);

  useEffect(() => {
    async function getMovie() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ce084afcba3137b332a74dd9229d80f7`,
          {
            params: { movie_id: id },
          }
        )
        .then((response: any) => {
          setMovie(response.data);
        });
    }

    getMovie();
  }, []);

  if (!movie) {
    return <div>loading...</div>;
  }

  return (
    <div className="movie-detail">
      <div className="detail-information">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            title={movie.title}
            className="poster-img"
          />
        </div>
        <div className="detail-desc">
          <h1 className="'title">{movie.title}</h1>
          <h4 className="year-genres">
            {movie.release_date} •{" "}
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre.name} / </span>
            ))}
          </h4>
          <p className="summary">{movie.overview}</p>
        </div>
      </div>
      <div
        className="blur-background"
        style={{
          background: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default MovieDetail2;
