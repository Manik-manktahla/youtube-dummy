import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CommentIcon from "@material-ui/icons/Comment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import './Post.css'

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={props.icon} alt={props.name} />
        <p className="post__content">
          {props.name} . {props.time}
        </p>
      </div>
      <div className="post__body">
        <p>{props.description}</p>
        <img className="post__image" src={props.image} />
      </div>
      <div className="post__footer">
        <div className="post__footerSubContainer">
          <ThumbUpAltIcon />
          <p className="post__content">{props.likes}</p>
          <ThumbDownIcon className="post__contentIcon"/>
          <p className="post__content">{props.dislikes}</p>
        </div>
        <div className="post__footerSubContainer">
          <CommentIcon />
          <p className="post__content">{props.comments}</p>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
