import React from "react";

function Article({ person }) {
  return (
    <article>
      <h2>{person.name}</h2>
      <ul>
        {person.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </article>
  );
}

export default Article;
