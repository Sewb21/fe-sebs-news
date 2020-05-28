import React, { Component } from "react";
import ArticleCard from "../Card-Components/ArticleCard";
import * as api from "../../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: "",
    order: "desc",
  };

  componentDidMount() {
    this.getArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.slug !== this.props.slug ||
      prevState.sortBy !== this.state.sortBy ||
      prevState.order !== this.state.order
    ) {
      this.getArticles();
    }
  }
  render() {
    if (this.state.isLoading) return <h3>Loading...</h3>;
    return (
      <main>
        <p>Sort By-</p>
        <button onClick={this.updateSortBy} name="created_at">
          Created at
        </button>
        <button onClick={this.updateSortBy} name="comment_count">
          Comment Count
        </button>
        <button onClick={this.updateSortBy} name="votes">
          Votes
        </button>
        <p>Order</p>
        <button onClick={this.updateOrder} name="asc">
          Ascending
        </button>
        <button onClick={this.updateOrder} name="desc">
          Descending
        </button>
        {this.state.articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }

  getArticles = () => {
    const { slug } = this.props;
    const { sortBy, order } = this.state;
    api.fetchArticles(slug, sortBy, order).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  updateSortBy = (event) => {
    const { name } = event.target;
    this.setState({ sortBy: name });
  };

  updateOrder = (event) => {
    const { name } = event.target;
    this.setState({ order: name });
  };
}

export default ArticleList;
