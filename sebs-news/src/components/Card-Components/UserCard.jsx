import React, { Component } from "react";

class UserCard extends Component {
  state = {
    username: "tickle122",
    avatar:
      "https://cdn.dribbble.com/users/4514928/screenshots/9652230/media/337c8ccdf2f63a3d93329aec3052ec0f.jpg",
  };
  render() {
    return (
      <main className="UserCard">
        <img
          src={this.state.avatar}
          alt="User avatar"
          className="user--avatar"
        />
        Username: {this.state.username}{" "}
      </main>
    );
  }
}

export default UserCard;
