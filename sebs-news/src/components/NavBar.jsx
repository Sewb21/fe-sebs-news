import React, { Component } from "react";
import axios from "axios";
import TopicCard from "./TopicCard";

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    axios
      .get("https://sebs-news-api.herokuapp.com/api/topics")
      .then(({ data }) => {
        this.setState({ topics: data.topics });
      });
  }
  render() {
    return (
      <ul>
        {this.state.topics.map((topic) => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </ul>
    );
  }
}

export default NavBar;
