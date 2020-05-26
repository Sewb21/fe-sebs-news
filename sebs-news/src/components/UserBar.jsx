import React, { Component } from "react";

class UserBar extends Component {
  state = {
    user: "Sewb",
  };
  render() {
    return (
      <>
        <div>User: {this.state.user}</div>
        <form>
          <input type="text" placeholder="search" />
        </form>
      </>
    );
  }
}

export default UserBar;
