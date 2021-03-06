import React, { Component } from "react";
import "./css/App.css";
import "./css/UserCard.css";
import Header from "./components/Header";
import ArticleList from "./components/List-Components/ArticleList";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import ErrorDisplayer from "./components/ErrorDisplayer";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    username: "tickle122",
    avatar:
      "https://cdn.dribbble.com/users/4514928/screenshots/9652230/media/337c8ccdf2f63a3d93329aec3052ec0f.jpg",
  };
  render() {
    return (
      <div>
        <Header user={this.state} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:slug" />
          <Article path="articles/:article_id" username={this.state.username} />
          <ErrorDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
