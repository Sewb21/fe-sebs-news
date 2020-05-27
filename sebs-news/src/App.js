import React from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:slug" />
      </Router>
    </div>
  );
}

export default App;
