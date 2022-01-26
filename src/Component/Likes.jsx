import React, { useState } from "react";
function Likes() {
  const [votes, setVotes] = useState(0);
  function LikeIt() {
    setVotes(votes + 1);
  }
  function dontLike() {
    setVotes(votes - 1);
  }
  function restLike() {
    setVotes(0);
  }

  return (
    <section>
      <p>{votes}</p>
      <button onClick={LikeIt}>LIKE</button>
      <button onClick={dontLike}>UNLIKE</button>
      <button onClick={restLike}>REST</button>
    </section>
  );
}

export default Likes;
