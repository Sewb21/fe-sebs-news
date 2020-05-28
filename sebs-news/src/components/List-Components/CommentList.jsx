import React from "react";
import CommentCard from "../Card-Components/CommentCard";

const CommentList = (props) => {
  return (
    <>
      <form type="submit" method="post">
        <p>Post a comment</p>
        <input
          type="text"
          name="body"
          placeholder="Comment"
          required="required"
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {props.comments.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </ul>
    </>
  );
};

export default CommentList;
