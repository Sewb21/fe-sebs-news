import React from "react";

const UserCard = (props) => {
  return (
    <article className="UserCard">
      <img
        src={props.userInfo.user.avatar}
        alt="User avatar"
        className="user--avatar"
      />
      <p className="UserCard_username-tag">Username: </p>
      <p className="UserCard_username">{props.userInfo.user.username}</p>
    </article>
  );
};

export default UserCard;
