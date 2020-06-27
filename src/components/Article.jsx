import React, { Component } from "react";
import "../css/Article.css";
import * as api from "../utils/api";
import CommentList from "./List-Components/CommentList";
import { ArticleVoteUpdater } from "./VoteUpdater";
import ErrorDisplayer from "./ErrorDisplayer";
import dayjs from "dayjs";
import LoaderComponent from './Loader'

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    this.getArticleByID();
  }

  render() {
    const { username } = this.props;
    const {
      title,
      topic,
      body,
      author,
      votes,
      article_id,
    } = this.state.article;
    const { err } = this.state;

    if (this.state.isLoading) return <LoaderComponent />

    if (err) return <ErrorDisplayer msg={err} />;
    return (
      <main className="Single-Article">
        <h2 className='Article-title'>{title}</h2>
        <p className='Article-topic'>Topic: {topic}</p>
        <p className='Article-body'>{body}</p>
        <p className='Article-author'>Author: {author}</p>
        <ArticleVoteUpdater votes={votes} article_id={article_id} />
        <p className='Article-date'>
          Posted: {dayjs(this.state.article.created_at).format("DD/MM/YYYY")}
        </p>
        <CommentList
          username={username}
          article_id={article_id}
          className="Comment-List"
        />
      </main>
    );
  }

  getArticleByID = () => {
    const article_id = this.props.article_id;

    api.fetchArticleByID(article_id).then((article) => {
      this.setState({ article, isLoading: false, comments: [] });
    });
  };
}

export default Article;
