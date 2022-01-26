import React, { useContext } from "react";
import { movieContext } from "../ArrayMovies";
function Home() {
  const getMovies = useContext(movieContext);
  return (
    <section>
      {movieContext.map((item) => (
        <ArrayMovies>
          <div>MOVIE NAME : {getMovies.item.movieName}</div>
          <div>RATING : {getMovies.item.rating}</div>
        </ArrayMovies>
      ))}
    </section>
  );
}

export default Home;
