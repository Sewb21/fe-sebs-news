import React from "react";

const CommentList = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="article_comment">
            <p>Comment: {comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created At: {comment.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
