import { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import MovieDetailData from "../mock/movie-detail.json";
import "./MovieDetail.scss";
import axios from "axios";

interface MovieDetailProps {
  id: number;
}

function MovieDetail({ id }: MovieDetailProps) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function getMovie() {
      await axios
        .get(`https://yts.mx/api/v2/movie_details.json`, {
          params: { movie_id: id },
        })
        .then((response: any) => {
          setMovie(response.data.data.movie);
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
            src={movie.large_cover_image}
            alt={movie.title}
            title={movie.title}
            className="poster-img"
          />
        </div>
        <div className="detail-desc">
          <h1 className="'title">{movie.title}</h1>
          <h4 className="year-genres">
            {movie.year} •{" "}
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre} / </span>
            ))}
          </h4>
          <p className="summary">{movie.description_full}</p>
        </div>
      </div>
      <div
        className="blur-background"
        style={{
          background: `url(${movie.large_cover_image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default MovieDetail;
