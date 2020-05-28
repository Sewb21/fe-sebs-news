import React from "react";
import { CommentVoteUpdater } from "../VoteUpdater";

const CommentCard = ({ body, author, votes, created_at, comment_id }) => {
  return (
    <li className="comment-card">
      <p>Comment: {body}</p>
      <p>Author: {author}</p>
      <CommentVoteUpdater votes={votes} comment_id={comment_id} />
      <p>Created At: {created_at}</p>
    </li>
  );
};

export default CommentCard;
