import React from "react";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";

import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

import "./Trending.css";
import TileHorizontal from "./Components/TileHorizontal";

import { trending } from "./data";

const Trending = (props) => {
  return (
    <div className='trending'>
      <div className="trending__container">
        <div className="trending__main">
          <IconButton>
            <MusicVideoIcon />
          </IconButton>
          <p>Music</p>
        </div>
        <div className="trending__main">
          <IconButton>
            <SportsEsportsIcon />
          </IconButton>
          <p>Gaming</p>
        </div>
        <div className="trending__main">
          <IconButton>
            <ReceiptIcon />
          </IconButton>
          <p>News</p>
        </div>
        <div className="trending__main">
          <IconButton>
            <LocalMoviesIcon />
          </IconButton>
          <p>Movies</p>
        </div>
      </div>
      {trending.map((data) => <TileHorizontal {...data}/>)}
    </div>
  );
};

export default Trending;
