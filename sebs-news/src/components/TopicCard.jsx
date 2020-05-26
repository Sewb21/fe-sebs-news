import React from "react";

const TopicCard = (props) => {
  return (
    <section className="topic-card">
      <h3>{props.slug}</h3> <p>{props.description}</p>
    </section>
  );
};

export default TopicCard;
