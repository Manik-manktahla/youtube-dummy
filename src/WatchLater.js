import React from "react";

import LockIcon from "@material-ui/icons/Lock";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import { recommendedData } from "./data";
import TileHorizontal from "./Components/TileHorizontal";
import Divider from "@material-ui/core/Divider";

import "./WatchLater.css";

const WatchLater = (props) => {
  return (
    <div className="watchLater">
      <div className="watchLater__fixed">
        <img className="watchLater__img" src={recommendedData[1].videoURL} />
        <p className="watchLater__sub">Liked Videos</p>
        <p className="watchLater__sub">41 videos . Updated 2 days ago</p>
        <div className="watchLater__lock">
          <LockIcon />
          <p>Private</p>
        </div>
        <ShuffleIcon />
      </div>
      <div className="watchLater__content">
        {recommendedData.map((data, index) => (
          <div>
            <div className="watchLater__subTile">
              <p>{index+1}</p>
              <TileHorizontal {...data} className="watchLater__tile" />
            </div>
            <Divider className="watchLater__divider"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
