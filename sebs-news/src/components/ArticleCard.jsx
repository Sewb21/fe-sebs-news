import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  return (
    <article className="article-card">
      <Link to={`/articles/${props.article_id}`}>
        <h3 className="article-title">{props.title}</h3>
      </Link>
      <p>Topic- {props.topic}</p>
      <p className="article-author">Author- {props.author}</p>
    </article>
  );
};

export default ArticleCard;
