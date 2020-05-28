import React from "react";
import { Link } from "@reach/router";
import VoteUpdater from "../VoteUpdater";

const ArticleCard = ({ article_id, title, topic, author, votes }) => {
  return (
    <article className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3 className="article-title">{title}</h3>
      </Link>
      <p>Topic- {topic}</p>
      <p className="article-author">Author- {author}</p>
      <VoteUpdater votes={votes} article_id={article_id} />
    </article>
  );
};

export default ArticleCard;
