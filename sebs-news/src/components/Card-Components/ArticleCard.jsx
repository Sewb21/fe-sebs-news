import React from "react";
import { Link } from "@reach/router";
import { ArticleVoteUpdater } from "../VoteUpdater";

const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  votes,
  created_at,
  comment_count,
}) => {
  return (
    <article className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3 className="article-title">{title}</h3>
      </Link>
      <p>Topic- {topic}</p>
      <p className="article-author">Author- {author}</p>
      <ArticleVoteUpdater votes={votes} article_id={article_id} />
      <p>Created At: {created_at}</p>
      <p>Comment Count: {comment_count}</p>
    </article>
  );
};

export default ArticleCard;
