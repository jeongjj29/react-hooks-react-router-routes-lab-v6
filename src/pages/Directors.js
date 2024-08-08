import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Article from "../components/Article";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data));
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <Article key={director.name} person={director} />
        ))}
      </main>
    </>
  );
}

export default Directors;
