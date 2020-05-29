import React from "react";

const ErrorDisplayer = ({ msg }) => {
  const err = msg ? msg : "Oops, Somethings not quite right";
  return (
    <section>
      <h3>Oops! {err}</h3>
    </section>
  );
};

export default ErrorDisplayer;
