import React, { useState, useEffect, useContext } from "react";
import {TheContext} from "../CommentsContext";
// import theComments from "../CommentsContext";
// import theComments
function Views() {
  const theCommentObj = useContext(TheContext);
  const [userName, setUserName] = useState("");
  useEffect(() => {setUserName(prompt("put your name"));alert(` ${userName}`);},[]);
  const [view, setViews] = useState(0);
  
  function UpViews() {
    setViews(view + 1);
  }
  function DownViews() {
    setViews(view - 1);
  }
  function RestViews() {
    setViews(0);
  }

  return (
      
    <section>
      
        {theCommentObj.map((com,i)=>{
          return(
        <div key = {i}>
          <p>{com.theName}</p>
          <p>{com.text}</p>
          <p>{com.views}</p>
        </div>);})}
        
      <p>NAME: {userName}</p>
      <p>VIEWS: {view}</p>
      <button onClick={UpViews}>up</button>
      <button onClick={DownViews}>down</button>
      <button onClick={RestViews}>rest</button>
    </section>
  );
}
export default Views;
