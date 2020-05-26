import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
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

  fetchArticles() {
    axios
      .get("https://sebs-news-api.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      });
  }
}

export default ArticleList;
