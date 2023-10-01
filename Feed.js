import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post.js";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
   return(
      <div class="feed">
     
    <div class="feed__header">
     <h2>Home</h2>
     </div>
     <TweetBox />
     <FlipMove>
    </FlipMove>
    
     </div>
  );
}

export default Feed;
 