import React from "react";

import { recommendedData } from "./data";
import Tile from "./Components/Tile";
import Divider from "@material-ui/core/Divider";
import HistoryIcon from "@material-ui/icons/History";
import Avatar from "@material-ui/core/Avatar";
import WatchLaterIcon from '@material-ui/icons/WatchLater';

import "./Library.css";
const Library = (props) => {
  return (
    <div className="library">
      <div className="library__container">
        <div className="library__bar">
          <div className="library__history">
            <HistoryIcon />
            <h3>History</h3>
          </div>
          <p className="library__seeAll">SEE ALL</p>
        </div>
        <div className="subscriptions__container">
          {recommendedData.map((data) => (
            <Tile {...data} className="subscriptionsTile" />
          ))}
        </div>
        <Divider />
        <div className="library__bar">
          <div className="library__history">
            <WatchLaterIcon />
            <h3>Watch Later</h3>
          </div>
          <p className="library__seeAll">SEE ALL</p>
        </div>
        <div className="subscriptions__container">
          {recommendedData.map((data) => (
            <Tile {...data} className="subscriptionsTile" />
          ))}
        </div>
      </div>
      <div className="library__infoContainer">
        <Avatar src="" alt="Manik" className="library__infoAvatar" />
        <h3 style={{ margin: "10px" }}>Manik Manktahla</h3>
        <Divider className="library__infoDivider" />
        <div className="library__info">
          <p>Subscriptions</p>
          <p>40</p>
        </div>
        <Divider className="library__infoDivider" />
        <div className="library__info">
          <p>Uploads</p>
          <p>0</p>
        </div>
        <Divider className="library__infoDivider" />
        <div className="library__info">
          <p>Likes</p>
          <p>41</p>
        </div>
        <Divider className="library__infoDivider" />
      </div>
    </div>
  );
};

export default Library;
