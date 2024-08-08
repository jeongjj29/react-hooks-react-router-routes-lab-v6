import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({
    title: "",
    time: "",
    genres: [],
  });
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((r) => r.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
