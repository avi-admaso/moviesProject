import React from "react";
function AddMovies() {
  const Movies = [
    { nameTitle: "movie name", nameInput: "rating", disabled: true },
    { nameTitle: "movie name", nameInput: "rating", disabled: true },
    { nameTitle: "movie name", nameInput: "rating", disabled: false },
    { nameTitle: "movie name", nameInput: "rating", disabled: false },
  ];
  return (
    <section>
      <form action="">
        <label htmlFor="">MOVIE NAME</label>
        <br />
        <input type="text" />
        <br />
      </form>
    </section>
  );
}
export default AddMovies;
