import React from "react";
import "../../css/CommentCard.css";
import { CommentVoteUpdater } from "../VoteUpdater";
import dayjs from "dayjs";

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
      <p>Posted: {dayjs(created_at).format("DD/MM/YYYY")}</p>
      {author === username && (
        <button onClick={() => handleCommentDelete(comment_id)}>
          Delete Comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;
