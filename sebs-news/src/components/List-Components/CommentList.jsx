import React from "react";
import CommentCard from "../Card-Components/CommentCard";

const CommentList = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </ul>
  );
};

export default CommentList;
