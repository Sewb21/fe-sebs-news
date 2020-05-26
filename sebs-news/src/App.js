import React from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ArticleList />
    </div>
  );
}

export default App;
