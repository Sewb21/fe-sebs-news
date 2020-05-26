import React, { Component } from "react";

class UserCard extends Component {
  state = {
    username: "Sewb",
    avatar:
      "https://cdn.dribbble.com/users/4514928/screenshots/9652230/media/337c8ccdf2f63a3d93329aec3052ec0f.jpg",
  };
  render() {
    return (
      <div className="UserCard">
        Username: {this.state.username}{" "}
        <img
          src={this.state.avatar}
          alt="User avatar"
          className="user--avatar"
        />
      </div>
    );
  }
}

export default UserCard;
