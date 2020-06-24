import React from "react";

const UserCard = ({ userInfo }) => {
  return (
    <article className="UserCard">
      <p className="UserCard_username">
        Username:{" "}
        <span className="UserCard_user-username">{userInfo.user.username}</span>
      </p>
    </article>
  );
};

export default UserCard;
