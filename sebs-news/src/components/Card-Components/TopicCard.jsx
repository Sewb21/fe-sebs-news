import React from "react";
import { Link } from "@reach/router";

const TopicCard = (props) => {
  return (
    <nav>
      <Link to={`/topics/${props.slug}`}>
        <section className="NavBar_topic-card">
          <h3 className="NavBar_topic-slug">{props.slug}</h3>
          <p className="NavBar_topic-description">{props.description}</p>
        </section>
      </Link>
    </nav>
  );
};

export default TopicCard;
