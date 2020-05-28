import React from "react";

const CommentCard = ({ body, author, votes, created_at }) => {
  return (
    <li className="comment-card">
      <p>Comment: {body}</p>
      <p>Author: {author}</p>
      <p>Votes: {votes}</p>
      <p>Created At: {created_at}</p>
    </li>
  );
};

export default CommentCard;
