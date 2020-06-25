import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ slug, description }) => {
  return (
    <nav>
      <Link to={`/topics/${slug}`}>
        <section className="NavBar_topic-card">
          <h3 className="NavBar_topic-slug">{slug}</h3>
        </section>
      </Link>
    </nav>
  );
};

export default TopicCard;
