import React from "react";

import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import "./TileHorizontal.css";

const TileHorizontal = (props) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={`tileHorizontal ${props.className}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img className="tile__image" src={props.videoURL} />
      <div className="tile__content">
        <div className="tileHorizontal__subContent">
          <h3 className="title__value">{props.videoTitle}</h3>
          <div style={{ display: "flex" }}>
            <p className="title__value title__valueGrey">
              {props.videoChannel}
            </p>
            {props.tick && <CheckCircleIcon className="tile__channelTick" />}
            <p className="title__value title__valueGrey titleHorizontal__views">
              {props.videoViews} . {props.videoTime}
            </p>
          </div>
          <p>{props.description}</p>
        </div>
        {hover && <MoreVertIcon />}
      </div>
    </div>
  );
};

export default TileHorizontal;
