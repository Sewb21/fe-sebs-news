import React from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/List-Components/ArticleList";
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
      </Router>
    </div>
  );
}

export default App;
