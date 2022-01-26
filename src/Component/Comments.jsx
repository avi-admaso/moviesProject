import React from "react";
import Views from "./Views";
// import { CommentsContext } from "../CommentsContext";
import NewContext from "../CommentsContext";
 function Comments() {
  return (
    <NewContext>
      <Views />
    </NewContext>
  );
}
export default Comments
