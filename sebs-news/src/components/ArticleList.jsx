import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      this.getArticles();
    }
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

  getArticles = () => {
    api.fetchArticles(this.props.slug).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticleList;
