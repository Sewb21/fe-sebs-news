import React from "react";

import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Seb's News App</h1>
      </Link>
    </header>
  );
};

export default Header;
