import {Link} from "react-router-dom";
import * as React from "react";
import './NavBar.scss';

const navBar = () => {
  return (
      <nav className="navbar navbar-inverse">
        <div className="nav-wrap">
          <div className="navbar-header pt">
            <Link to="/">Personality Test</Link>
          </div>
          <div className="navbar-header al">
            <Link to="/answer-list">Answer List</Link>
          </div>
        </div>
      </nav>
  );
};

export default navBar();

