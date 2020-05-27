import React from "react";

const TopicCard = (props) => {
  return (
    <section className="NavBar_topic-card">
      <h3 className="NavBar_topic-slug">{props.slug}</h3>{" "}
      <p className="NavBar_topic-description">{props.description}</p>
    </section>
  );
};

export default TopicCard;
