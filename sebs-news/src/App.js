import React from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:slug" />
        <Article path="articles/:article_id" />
        <Article path="articles/:article_id/comments" />
      </Router>
    </div>
  );
}

export default App;
