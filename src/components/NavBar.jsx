import React, { Component } from "react";
import "../css/NavBar.css";
import TopicCard from "./Card-Components/TopicCard";
import * as api from "../utils/api";


class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    return (
      <ul className="NavBar">
        {this.state.topics.map((topic) => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </ul>
    );
  }

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default NavBar;
