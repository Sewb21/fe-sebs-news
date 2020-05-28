import React, { Component } from "react";
import * as api from "../utils/api";
import CommentList from "./List-Components/CommentList";
import VoteUpdater from "./VoteUpdater";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    showComments: false,
    comments: [],
  };

  componentDidMount() {
    this.getArticleByID();
  }

  render() {
    const {
      title,
      topic,
      body,
      author,
      votes,
      article_id,
    } = this.state.article;
    return (
      <main className="Single-Article">
        <h2>{title}</h2>
        <p>Topic: {topic}</p>
        <p>{body}</p>
        <p>Author: {author}</p>
        <VoteUpdater votes={votes} article_id={article_id} />
        <p>Created: {this.state.article.created_at}</p>
        <button onClick={this.showComments}>Show Comments</button>
        <button onClick={this.hideComments}>Hide Comments</button>
        <CommentList comments={this.state.comments} />
      </main>
    );
  }

  showComments = () => {
    const article_id = this.props.article_id;
    api.fetchCommentsByArticleID(article_id).then(({ comments }) => {
      this.setState((currentState) => {
        return {
          showComments: !currentState.showComments,
          comments: comments,
        };
      });
    });
  };

  hideComments = () => {
    this.setState({
      showComments: false,
      comments: [],
    });
  };

  getArticleByID = () => {
    const article_id = this.props.article_id;

    api.fetchArticleByID(article_id).then((article) => {
      this.setState({ article, isLoading: false, comments: [] });
    });
  };
}

export default Article;
