import React from "react";
import { Link } from "@reach/router";
import "../../css/ArticleCard.css";
import { ArticleVoteUpdater } from "../VoteUpdater";
import dayjs from "dayjs";

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
        <h2 className="article-title">{title}</h2>
      </Link>
      <br/>
      <div className='article-card_body'>
      <p>Topic- {topic}</p>
      <p className="article-author">Author- {author}</p>
      <ArticleVoteUpdater votes={votes} article_id={article_id} />
      <p>Posted: {dayjs(created_at).format("DD/MM/YYYY")}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
