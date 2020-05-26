import React from "react";

const ArticleCard = (props) => {
  return (
    <article className="article-card">
      <h3 className="article-title">{props.title}</h3>
      <p>Topic- {props.topic}</p>
      <p className="article-author">Author- {props.author}</p>
    </article>
  );
};

export default ArticleCard;
