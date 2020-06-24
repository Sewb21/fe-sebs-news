import React from "react";
import UserCard from "./Card-Components/UserCard";
import "../css/Header.css";

import { Link } from "@reach/router";

const Header = (props) => {
  return (
    <header className="header_container">
      <Link to="/">
        <h1 className="header_item-text">SEB'S NEWS APP</h1>
      </Link>
      <UserCard userInfo={props} />
    </header>
  );
};

export default Header;
