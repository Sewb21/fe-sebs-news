import React from "react";
import { CommentVoteUpdater } from "../VoteUpdater";

const CommentCard = ({
  body,
  author,
  votes,
  created_at,
  comment_id,
  username,
  handleCommentDelete,
}) => {
  return (
    <li className="comment-card">
      <p>Comment: {body}</p>
      <p>Author: {author}</p>
      <CommentVoteUpdater votes={votes} comment_id={comment_id} />
      <p>Created At: {created_at}</p>
      {author === username && (
        <button onClick={() => handleCommentDelete(comment_id)}>
          Delete Comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;
