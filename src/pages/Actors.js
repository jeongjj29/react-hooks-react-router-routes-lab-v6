import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Article from "../components/Article";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <Article key={actor.name} person={actor} />
        ))}
      </main>
    </>
  );
}

export default Actors;
