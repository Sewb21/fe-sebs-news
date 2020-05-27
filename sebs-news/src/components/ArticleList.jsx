import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return <h3>Loading...</h3>;
    return (
      <main>
        {this.state.articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
