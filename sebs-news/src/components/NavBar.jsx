import React, { Component } from "react";
import TopicCard from "./TopicCard";
import * as api from "../utils/api";

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    api.fetchTopics().then(({ topics }) => {
      this.setState({ topics });
    });
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
}

export default NavBar;
