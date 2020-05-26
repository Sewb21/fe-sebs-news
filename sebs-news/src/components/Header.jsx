import React from "react";
import UserCard from "./UserCard";

const Header = () => {
  return (
    <header className="App-header">
      <h1>Seb's News App</h1>
      <form>
        <input type="text" placeholder="search" />
        <button>Submit</button>
      </form>
      <UserCard />
    </header>
  );
};

export default Header;
