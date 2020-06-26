import React, { Component } from "react";
import ArticleCard from "../Card-Components/ArticleCard";
import * as api from "../../utils/api";
import ErrorDisplayer from "../ErrorDisplayer";
import "../../css/ArticleList.css";
import SortBy from "../SortBy";
import LoaderComponent from '../Loader'

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
    const { err } = this.state;
    if (err) return <ErrorDisplayer msg={err} />;
    if (this.state.isLoading) return <LoaderComponent />
    return (
      <main className="ArticleList">
        <SortBy
          updateSortBy={this.updateSortBy}
          updateOrder={this.updateOrder}
        />
        {this.state.articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }

  getArticles = () => {
    const { slug } = this.props;
    const { sortBy, order } = this.state;
    api
      .fetchArticles(slug, sortBy, order)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  updateSortBy = (value) => {
    this.setState({ sortBy: value });
  };

  updateOrder = (value) => {
    this.setState({ order: value });
  };
}

export default ArticleList;
