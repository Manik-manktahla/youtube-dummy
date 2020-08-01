import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from '@material-ui/core/IconButton'
import Button from './Button'

import "./Tile.css";

const Tile = (props) => {
  const [hover, setHover] = React.useState(false);
  console.log(props);
  return (
    <div className={`tile ${props.className}`} onMouseOver={() => setHover(true)}  onMouseOut={() => setHover(false)}>
      <img className="tile__image" src={props.videoURL} />
      <div className="tile__content">
        <Avatar src={props.avatarURL} />
        <div className="tile__subContent">
          <h3 className="title__value">{props.videoTitle}</h3>
          <div style={{ display: "flex" }}>
            <p className="title__value title__valueGrey">
              {props.videoChannel}
            </p>
            {props.tick && <CheckCircleIcon className="tile__channelTick" />}
          </div>

          <p className="title__value title__valueGrey">
            {props.videoViews} . {props.videoTime}
          </p>
        </div>
        {hover && <MoreVertIcon />}
      </div>
      {props.setReminder && <Button className="tile__reminder" name="SET REMINDER"/>}
    </div>
  );
};

export default Tile;
