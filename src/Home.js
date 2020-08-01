import React from "react";
import Tile from "./Components/Tile";
import Divider from "@material-ui/core/Divider";
import { recommendedData, news, posts } from "./data";
import Post from "./Components/Post";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home__main">
      <div className="home">
        <h2>Recommended</h2>
        <div className="home__container">
          {recommendedData.map((data) => (
            <Tile {...data} />
          ))}
        </div>
      </div>
      <Divider className="home__divider" />
      <div className="home">
        <h2>Breaking News</h2>
        <div className="home__container">
          {news.map((data) => (
            <Tile {...data} />
          ))}
        </div>
      </div>

      <Divider className="home__divider" />
      <div className="home">
        <h2>Latest YouTube posts</h2>
        <div className="home__container">
          {posts.map((data) => (
            <Post {...data} />
          ))}
        </div>
      </div>

      <Divider className="home__divider" />
      <div className="home">
        <div className="home__container">
          {recommendedData.map((data) => (
            <Tile {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
