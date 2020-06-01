import React from "react";

const UserCard = ({ userInfo }) => {
  return (
    <article className="UserCard">
      <p className="UserCard_username-tag">Username: </p>
      <p className="UserCard_username">{userInfo.user.username}</p>
      <img
        src={userInfo.user.avatar}
        alt="User avatar"
        className="user--avatar"
      />
    </article>
  );
};

export default UserCard;
