import React from "react";

import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Seb's News App</h1>
      </Link>
      <form>
        <input type="text" placeholder="search - *Add functionality*" />
        <button>Submit</button>
      </form>
    </header>
  );
};

export default Header;
