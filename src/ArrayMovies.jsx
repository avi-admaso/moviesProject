import React from "react";
export const movieContext = React.createContext();
// const theMovies = { movieName:"GODFATHER", rating : 5 }
const theMovies = [
  { movieName: "GODFATHER", rating: 5 },
  { movieName: "GOODFELLAS", rating: 4.5 },
  { movieName: "CASINO", rating: 4.5 },
];
function MoviesArray(props) {
  return (
    <movieContext.Provider value={theMovies}>
      {props.children}
    </movieContext.Provider>
  );
}
// export default MoviesArray;
export default theMovies;
