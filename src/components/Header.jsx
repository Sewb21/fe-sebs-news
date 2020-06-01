import React from "react";
import UserCard from "./Card-Components/UserCard";
import "../css/Header.css";

import { Link } from "@reach/router";

const Header = (props) => {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Seb's News App</h1>
      </Link>
      <UserCard userInfo={props} />
    </header>
  );
};

export default Header;
