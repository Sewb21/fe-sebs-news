import React, { Component } from "react";
import * as api from "../utils/api";
import CommentList from "./CommentList";

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
    return (
      <main className="Single-Article">
        <h2>{this.state.article.title}</h2>
        <p>Topic: {this.state.article.topic}</p>
        <p>{this.state.article.body}</p>
        <p>Author: {this.state.article.author}</p>
        <p>{this.state.article.votes}</p>
        <p>{this.state.article.created_at}</p>
        <button onClick={this.showComments}>Show Comments</button>
        <CommentList comments={this.state.comments} />
      </main>
    );
  }

  showComments = () => {
    this.setState((currentState) => {
      return {
        showComments: !currentState.showComments,
        comments: [
          {
            comment_id: 115,
            author: "happyamy2016",
            article_id: "33",
            votes: 12,
            created_at: "2018-01-19T14:47:14.514Z",
            body:
              "Neque dolor sint illum id consequuntur debitis qui nam eum. Nam adipisci similique consequatur officiis. Totam qui enim at iste dolorem ullam. Tenetur laudantium sed facilis aspernatur occaecati. Provident rerum quia consectetur et. Molestiae eligendi commodi.",
          },
          {
            comment_id: 272,
            author: "tickle122",
            article_id: "33",
            votes: 17,
            created_at: "2017-09-26T21:34:42.072Z",
            body:
              "Distinctio excepturi laboriosam eos aperiam quis amet eum animi minima. Officiis in quia. Est consequatur optio atque nostrum iusto impedit harum quod asperiores.",
          },
          {
            comment_id: 196,
            author: "cooljmessy",
            article_id: "33",
            votes: 0,
            created_at: "2017-07-15T21:11:34.498Z",
            body:
              "Qui consequuntur id beatae ut vel a error. Vitae et et. Mollitia soluta neque quibusdam tempore quis quia eos autem magni. Voluptatibus numquam nostrum et enim officiis rerum. Optio quo harum dolore voluptatem sit temporibus rem voluptas rem.",
          },
        ],
      };
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
